/* ============================================================================
   tracking.js — Meta Pixel + Conversions API, deduplicados por eventID.
   Usado por TODAS as páginas do site. Cada página define no <head>, antes:
       window.PAGE = { variant: "P19" | "vsl" | "quiz" | "mapa", price?: 19, checkout?: "..." }
   O Pixel ID é público. O token da CAPI fica na Netlify Function meta-capi.
   ============================================================================ */
(function () {
    var PIXEL = '38347741264870182';
    var CAPI = '/.netlify/functions/meta-capi';
    // Só os eventos padrão vão para o servidor; os custom (View_x, CTA_x) ficam no navegador.
    var SERVER_EVENTS = { PageView: 1, ViewContent: 1, InitiateCheckout: 1 };

    // Base code oficial do Meta Pixel
    !function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
        n.queue = []; t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    var page = window.PAGE || { variant: 'desconhecida' };
    var ids = ['oea-' + page.variant];

    function uuid() {
        if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0;
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    function cookie(name) {
        var m = document.cookie.match('(?:^|; )' + name + '=([^;]*)');
        return m ? decodeURIComponent(m[1]) : '';
    }

    // fbclid na URL vira o cookie _fbc (formato oficial): é o que liga o clique
    // no anúncio ao evento do servidor.
    (function () {
        var fbclid = new URLSearchParams(location.search).get('fbclid');
        if (!fbclid || cookie('_fbc')) return;
        var value = 'fb.1.' + Date.now() + '.' + fbclid;
        var host = location.hostname.replace(/^www\./, '');
        var domain = host.indexOf('.') > -1 ? '; domain=.' + host : '';
        document.cookie = '_fbc=' + value + '; max-age=' + (90 * 24 * 3600) + '; path=/' + domain + '; SameSite=Lax; Secure';
    })();

    // O _fbp é gravado pelo fbevents.js depois que ele carrega. Espera até 2 s
    // por ele antes de mandar ao servidor, para os dois lados casarem.
    function whenFbp(cb, tries) {
        tries = tries || 0;
        if (cookie('_fbp') || tries >= 20) return cb();
        setTimeout(function () { whenFbp(cb, tries + 1); }, 100);
    }

    function toServer(name, eventId, data) {
        whenFbp(function () {
            var body = JSON.stringify({
                event_name: name,
                event_id: eventId,
                event_source_url: location.href,
                fbp: cookie('_fbp'),
                fbc: cookie('_fbc'),
                custom_data: data || {}
            });
            try {
                if (navigator.sendBeacon &&
                    navigator.sendBeacon(CAPI, new Blob([body], { type: 'application/json' }))) return;
            } catch (e) { /* cai no fetch */ }
            fetch(CAPI, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: body,
                keepalive: true
            }).catch(function () { });
        });
    }

    function track(name, data, custom) {
        var id = uuid();
        fbq(custom ? 'trackCustom' : 'track', name, data || {}, { eventID: id });
        if (SERVER_EVENTS[name]) toServer(name, id, data);
    }

    fbq('init', PIXEL);
    track('PageView');

    if (page.price) {
        track('ViewContent', {
            content_ids: ids,
            content_name: 'Operação Estrutura no Ar',
            content_type: 'product',
            value: page.price,
            currency: 'BRL'
        });
    }
    // Evento com o nome da variante embutido: vira uma linha própria no Ads
    // Manager, sem precisar de breakdown por parâmetro.
    track('View_' + page.variant, {}, true);

    // Delegação: cobre todos os botões [data-cta] da página de uma vez.
    document.addEventListener('click', function (e) {
        var cta = e.target.closest('[data-cta]');
        if (!cta) return;
        track('InitiateCheckout', {
            content_ids: ids,
            value: page.price || 0,
            currency: 'BRL'
        });
        track('CTA_' + page.variant, { position: cta.dataset.cta }, true);
    });
})();
