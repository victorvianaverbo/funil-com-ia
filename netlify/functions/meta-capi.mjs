// ============================================================================
// meta-capi — Conversions API do Meta (lado servidor).
// Recebe do /tracking.js o mesmo evento que o pixel mandou no navegador, com o
// mesmo event_id, e repassa ao Meta. O Meta deduplica pelo par (event_name, event_id).
//
// Variáveis de ambiente (Netlify → Site configuration → Environment variables):
//   META_PIXEL_ID         id do dataset/pixel
//   META_CAPI_TOKEN       token de acesso gerado no Events Manager (segredo)
//   META_TEST_EVENT_CODE  opcional; quando definido, os eventos caem em "Test events"
// ============================================================================

const GRAPH = 'https://graph.facebook.com/v21.0';
const ALLOWED = new Set(['PageView', 'ViewContent', 'InitiateCheckout']);
const CUSTOM_KEYS = ['content_ids', 'content_name', 'content_type', 'value', 'currency'];

const env = (k) => (globalThis.Netlify?.env?.get(k)) ?? process.env[k];

export default async (req, context) => {
    if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

    const pixel = env('META_PIXEL_ID');
    const token = env('META_CAPI_TOKEN');
    if (!pixel || !token) {
        console.error('meta-capi: faltam META_PIXEL_ID e/ou META_CAPI_TOKEN');
        return new Response(null, { status: 500 });
    }

    let body;
    try { body = await req.json(); } catch { return new Response('Bad JSON', { status: 400 }); }

    if (!ALLOWED.has(body.event_name) || typeof body.event_id !== 'string' || !body.event_id) {
        return new Response('Bad event', { status: 400 });
    }

    const user_data = {
        client_ip_address: context?.ip || req.headers.get('x-nf-client-connection-ip') || undefined,
        client_user_agent: req.headers.get('user-agent') || undefined
    };
    if (body.fbp) user_data.fbp = String(body.fbp);
    if (body.fbc) user_data.fbc = String(body.fbc);

    const custom_data = {};
    for (const k of CUSTOM_KEYS) {
        if (body.custom_data && body.custom_data[k] !== undefined) custom_data[k] = body.custom_data[k];
    }

    const payload = {
        data: [{
            event_name: body.event_name,
            event_time: Math.floor(Date.now() / 1000),
            event_id: body.event_id,
            event_source_url: typeof body.event_source_url === 'string' ? body.event_source_url : undefined,
            action_source: 'website',
            user_data,
            custom_data
        }],
        access_token: token
    };
    const testCode = env('META_TEST_EVENT_CODE');
    if (testCode) payload.test_event_code = testCode;

    const res = await fetch(`${GRAPH}/${pixel}/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!res.ok) {
        console.error('meta-capi: Meta respondeu', res.status, await res.text());
        return new Response(null, { status: 502 });
    }
    return new Response(null, { status: 204 });
};
