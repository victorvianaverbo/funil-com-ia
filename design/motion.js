/* ============================================================================
   MOVIMENTO — camada compartilhada pelos 3 layouts. Substitui o AOS (CDN).

   Contrato de segurança: a classe .motion-on só entra no <html> se este script
   rodar. É ela que autoriza o CSS a esconder qualquer coisa. Script quebrado,
   bloqueado ou lento = página inteira visível, que é o comportamento certo
   para uma página de vendas.
   ============================================================================ */

(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) return;

    document.documentElement.classList.add('motion-on');

    const onReady = (fn) =>
        document.readyState === 'loading'
            ? document.addEventListener('DOMContentLoaded', fn)
            : fn();

    onReady(() => {
        /* --- Revelação em cascata ----------------------------------------- */
        const revealer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                // Irmãos revelados em cascata: o índice vira o atraso.
                const delay = Number(el.dataset.revealDelay || 0);
                setTimeout(() => el.classList.add('is-in'), delay);
                revealer.unobserve(el);
            });
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

        document.querySelectorAll('[data-reveal]').forEach((el, i) => {
            if (!el.dataset.revealDelay) {
                // escalona só entre irmãos diretos, não a página toda
                const siblings = [...el.parentElement.children].filter((s) => s.hasAttribute('data-reveal'));
                el.dataset.revealDelay = siblings.indexOf(el) * 90;
            }
            revealer.observe(el);
        });

        /* --- O terminal digita -------------------------------------------- */
        /* É a única coisa acima da dobra que mostra o mecanismo funcionando. */
        const terminal = document.querySelector('.terminal-body');
        if (terminal) {
            const lines = [...terminal.querySelectorAll('.log-line')];
            const caret = terminal.querySelector('.cursor-line');

            const typer = new IntersectionObserver((entries) => {
                if (!entries[0].isIntersecting) return;
                typer.disconnect();

                lines.forEach((line, i) => {
                    setTimeout(() => {
                        line.classList.add('is-typed');
                        if (caret && i === lines.length - 1) {
                            caret.classList.add('caret');
                        }
                    }, 450 + i * 520);
                });
            }, { threshold: 0.4 });

            typer.observe(terminal);
        }

        /* --- Contador (+R$ 10MM) ------------------------------------------ */
        document.querySelectorAll('[data-count]').forEach((el) => {
            const target = parseFloat(el.dataset.count);
            const prefix = el.dataset.countPrefix || '';
            const suffix = el.dataset.countSuffix || '';

            const counter = new IntersectionObserver((entries) => {
                if (!entries[0].isIntersecting) return;
                counter.disconnect();

                const duration = 1400;
                const start = performance.now();

                const tick = (now) => {
                    const p = Math.min((now - start) / duration, 1);
                    // desacelera no fim: o número "aterrissa" em vez de parar seco
                    const eased = 1 - Math.pow(1 - p, 3);
                    el.textContent = prefix + Math.round(target * eased) + suffix;
                    if (p < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
            }, { threshold: 0.6 });

            counter.observe(el);
        });

        /* --- Fio de progresso de leitura ----------------------------------- */
        const rail = document.querySelector('.progress-rail span');
        if (rail) {
            let ticking = false;
            const update = () => {
                const max = document.documentElement.scrollHeight - window.innerHeight;
                const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
                rail.style.width = pct + '%';
                ticking = false;
            };
            window.addEventListener('scroll', () => {
                if (ticking) return;
                ticking = true;
                requestAnimationFrame(update);
            }, { passive: true });
            update();
        }
    });
})();
