/* ==========================================================================
   PÁGINA DE VENDAS — Operação Estrutura no Ar
   ========================================================================== */

/* --------------------------------------------------------------------------
   LINK DO CHECKOUT — o único lugar pra mexer quando o pagamento estiver pronto.
   Deixe vazio e os botões rolam até o bloco de oferta (comportamento atual).
   Preencha com a URL do checkout e TODOS os botões passam a apontar pra lá.
   Ex.: var CHECKOUT_URL = 'https://pay.kiwify.com.br/xxxxx';
   -------------------------------------------------------------------------- */
var CHECKOUT_URL = '';

(function () {
  'use strict';

  /* ======================================================================
     ANIMAÇÃO DE SCROLL
     Faz o mesmo que a biblioteca AOS e lê os mesmos atributos (data-aos,
     data-aos-delay), mas nativo: a lib custava 2 requests ao unpkg.com no
     caminho crítico (~300ms de latência no 4G) por 7 KB de fade-up.
     O hero nunca entra aqui — ele pinta de primeira, por regra.
     ====================================================================== */
  var alvos = document.querySelectorAll('[data-aos]');
  var querMenosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function revelarTudo() {
    Array.prototype.forEach.call(alvos, function (el) { el.classList.add('visivel'); });
  }

  if (!('IntersectionObserver' in window) || querMenosMovimento) {
    revelarTudo();
  } else {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        var atraso = parseInt(entrada.target.getAttribute('data-aos-delay'), 10) || 0;
        setTimeout(function () { entrada.target.classList.add('visivel'); }, atraso);
        observador.unobserve(entrada.target);   // anima uma vez só
      });
    }, { rootMargin: '0px 0px -8% 0px' });

    Array.prototype.forEach.call(alvos, function (el) { observador.observe(el); });
  }

  /* ======================================================================
     RASTREAMENTO
     ====================================================================== */
  var variante = document.documentElement.getAttribute('data-ab') || '1';

  /* Empurra pro dataLayer se houver um. O /rastrear pluga o pixel depois. */
  function rastrear(evento, dados) {
    window.dataLayer = window.dataLayer || [];
    var payload = { event: evento, headline_variante: variante };
    for (var k in dados) { if (dados.hasOwnProperty(k)) payload[k] = dados[k]; }
    window.dataLayer.push(payload);
  }

  rastrear('pagina_vista', { pagina: 'pagina-vendas' });

  /* ======================================================================
     BOTÕES DE COMPRA
     ====================================================================== */
  var botoes = document.querySelectorAll('[data-cta]');

  Array.prototype.forEach.call(botoes, function (botao) {
    if (CHECKOUT_URL) {
      botao.href = CHECKOUT_URL;
      botao.target = '_blank';
      botao.rel = 'noopener';
    }

    botao.addEventListener('click', function () {
      rastrear('checkout_clicado', { origem: botao.getAttribute('data-cta') });
    });
  });
})();
