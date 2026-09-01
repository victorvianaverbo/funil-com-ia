// FAQ Accordion Logic
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentNode;
        const isActive = item.classList.contains('active');

        // Close all other items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            otherItem.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Smooth Scroll for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// O movimento agora vive em design/motion.js (IntersectionObserver, sem lib).
// O AOS saiu: era uma dependência de CDN só para revelar bloco na rolagem.

// Meta Pixel — dispara imediatamente, não em requestIdleCallback: quem clica no
// CTA nos primeiros segundos sumia da audiência antes do PageView sair.
(() => {
    if (typeof fbq !== 'function') return;

    // window.PAGE vem do <head>, gerado pelo build.ps1 (variant / price / checkout)
    const page = window.PAGE || { variant: 'desconhecida', price: 0 };
    const ids = ['oea-' + page.variant];

    fbq('init', '3220708284790428');
    fbq('track', 'PageView');
    fbq('track', 'ViewContent', {
        content_ids: ids,
        content_name: 'Operação Estrutura no Ar',
        content_type: 'product',
        value: page.price,
        currency: 'BRL'
    });
    // Evento com o nome da variante embutido: vira uma linha própria no Ads
    // Manager, sem precisar de breakdown por parâmetro.
    fbq('trackCustom', 'View_' + page.variant);

    // Delegação: cobre os 7 botões de CTA de uma vez.
    document.addEventListener('click', (e) => {
        const cta = e.target.closest('[data-cta]');
        if (!cta) return;

        fbq('track', 'InitiateCheckout', {
            content_ids: ids,
            value: page.price,
            currency: 'BRL'
        });
        fbq('trackCustom', 'CTA_' + page.variant, { position: cta.dataset.cta });
    });
})();
