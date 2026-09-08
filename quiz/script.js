/* ==========================================================================
   QUIZ — Operação Estrutura no Ar
   Funil de perguntas + cortes da VSL. O quiz É a venda: termina no checkout.
   A capa (etapa 0) está estática no index.html. Daqui pra frente é este script.
   ========================================================================== */

/* --------------------------------------------------------------------------
   CONFIGURAÇÃO — o que você mexe
   -------------------------------------------------------------------------- */

/* Link do checkout, no fim do funil. Vazio = o botão final não leva a lugar nenhum. */
var CHECKOUT_URL = 'https://pay.hotmart.com/X102170086S';

/* Segundos que o vídeo roda antes de liberar a ação da tela.
   O doc pede isso pra incentivar assistir. Suba se os cortes ficarem longos. */
var SEGUNDOS_LIBERAR = 8;

(function () {
  'use strict';

  /* Quem pediu menos movimento recebe troca instantânea e frases sem datilografia */
  var REDUZIDO = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ======================================================================
     AS ETAPAS, NA ORDEM
     ====================================================================== */
  var ETAPAS = [
    { tipo: 'capa' },

    { tipo: 'pergunta', chave: 'situacao', ficha: 'ETAPA 1 · SITUAÇÃO',
      titulo: 'Você já tentou colocar a sua estrutura de vendas no ar?',
      opcoes: [
        ['✖', 'Já tentei de tudo, mas sempre trava em alguma parte.'],
        ['↺', 'Já coloquei, mas foi um sofrimento e não quero repetir.'],
        ['■', 'Ainda não. Meu produto tá parado, esperando.']
      ] },

    { tipo: 'pergunta', chave: 'tempo', ficha: 'ETAPA 1.5 · CONTEXTO',
      titulo: 'Há quanto tempo você tem esse produto ou essa ideia esperando pra sair do papel?',
      opcoes: [
        ['◇', 'Tá na minha cabeça, pronto. Só falta tirar do papel e colocar pra vender.'],
        ['▦', 'Já terminei há meses, mas ele segue parado.'],
        ['▼', 'Mais de um ano nisso. Me incomoda todo dia.']
      ] },

    { tipo: 'som' },

    { tipo: 'video', ficha: 'ETAPA 2 · O PROBLEMA',
      titulo: 'Antes de mais nada, olha isso:',
      provaAcima: true,
      prova: 'PROVA · take rápido (5-8s) de um agente montando algo na tela',
      video: 'VÍDEO 1 · corte da VSL: mecanismo do problema (5 competências + cilada), 40-60s',
      legenda: 'Sair dessa cilada de vez mudaria o seu jogo?',
      opcoes: [
        ['▲', 'Mudaria tudo. É exatamente isso que me trava.'],
        ['◎', 'Talvez, mas já tentei muita coisa e não creio fácil.']
      ] },

    { tipo: 'pergunta', chave: 'dor', ficha: 'ETAPA 3 · A TRAVA',
      titulo: 'O que mais te trava hoje?',
      opcoes: [
        ['⚙', 'A parte técnica: página, funil, checkout que não integra.'],
        ['✖', 'Já gastei com ferramenta, agência ou curso, e não saiu do papel.'],
        ['●', 'Tenho o conhecimento, mas não dou conta de fazer tudo sozinho.'],
        ['✔', 'Na verdade a minha estrutura já tá no ar e vendendo bem.']
      ],
      saidaEm: 3 },

    { tipo: 'pergunta', chave: 'crenca', ficha: 'ETAPA 3.5 · SINCERIDADE',
      titulo: 'Sendo bem sincero: você ainda acredita que consegue colocar isso no ar?',
      opcoes: [
        ['▽', 'Sinceramente? Já quase desisti dessa parte.'],
        ['◎', 'Acredito, mas não sei mais por onde começar.'],
        ['▲', 'Acredito, só me falta a ferramenta certa.']
      ] },

    { tipo: 'video', ficha: 'ETAPA 4 · A SOLUÇÃO',
      titulo: 'Seja qual for a sua trava, ela tem o mesmo motivo. E tem solução.',
      video: 'VÍDEO 2 · corte da VSL: mecanismo da solução (exército + tráfego com Victor), 40-60s',
      prova: 'PROVA · takes dos agentes: comando WhatsApp, copy, página, checkout',
      legenda: 'Isso é diferente de tudo que você já tentou. E você acabou de ver funcionando.',
      continuar: true },

    { tipo: 'pergunta', chave: 'sonho', ficha: 'ETAPA 5 · O SONHO',
      titulo: 'Se a sua estrutura estivesse no ar hoje, funcionando, o que mudava pra você?',
      opcoes: [
        ['►', 'Eu finalmente venderia o que já sei que é bom.'],
        ['✚', 'Eu pararia de me sentir travado e incapaz.'],
        ['↺', 'Eu recuperaria o tempo e o dinheiro que já joguei fora.']
      ] },

    { tipo: 'pergunta', chave: 'urgencia', ficha: 'ETAPA 5.5 · URGÊNCIA',
      titulo: 'Se existisse um jeito de fazer isso ainda esse mês, você ia querer começar quando?',
      opcoes: [
        ['►', 'Agora. Já perdi tempo demais.'],
        ['▦', 'Essa semana, se fizer sentido pra mim.'],
        ['◎', 'Depende de ver funcionando primeiro.']
      ] },

    { tipo: 'video', ficha: 'ETAPA 6 · A OFERTA',
      titulo: 'É isso que você vai fazer na aula, com a minha ajuda, ao vivo.',
      video: 'VÍDEO 3 · corte da VSL: oferta + entregáveis + garantia, 40-60s',
      prova: 'PROVA · tela verde de COMPRA APROVADA',
      legenda: 'A estrutura no ar, funcionando. É o que você monta na aula.',
      continuar: true },

    { tipo: 'pergunta', chave: 'decisao', ficha: 'ETAPA 7 · DECISÃO',
      titulo: 'Você tá pronto pra parar de travar e colocar o seu produto no ar de uma vez?',
      opcoes: [
        ['★', 'Tô pronto. Quero fazer isso acontecer.'],
        ['✖', 'Ainda tenho dúvida.']
      ] },

    { tipo: 'loading' },
    { tipo: 'diagnostico' },
    { tipo: 'oferta' }
  ];

  var MENSAGENS_LOADING = [
    'Montando o seu plano com base nas suas respostas...',
    'Você não é o problema. Nunca foi.',
    'Tem um jeito de tirar o seu produto do papel sem você montar nada.',
    'E ele tá pronto pra você. Segue mais um passo.'
  ];

  /* As 3 linhas do diagnóstico, montadas com o que a pessoa respondeu */
  var LINHA_DOR = [
    'Você me disse que trava na parte técnica. É exatamente ali que o exército faz o trabalho pesado por você.',
    'Você já gastou e não saiu do papel. Dessa vez, você vê funcionar antes de gastar de novo.',
    'Você não precisa dar conta das cinco coisas sozinho. O exército assume o que te trava.'
  ];
  var LINHA_TEMPO = [
    'A sua ideia tá pronta na sua cabeça. Chegou a hora de ela virar estrutura no ar.',
    'O seu produto tá pronto há meses, esperando. Essa espera acaba na próxima aula.',
    'Faz mais de um ano que isso te incomoda. Imagina resolver isso essa semana.'
  ];
  var LINHA_URGENCIA = [
    'E você quer começar agora. Perfeito, é exatamente pra isso que essa aula existe.',
    'E você quer resolver essa semana. Dá tempo, se você entrar agora.',
    'E você quer ver funcionando antes. Justo. É exatamente o que você vai ver, ao vivo.'
  ];

  /* ======================================================================
     ESTADO
     ====================================================================== */
  var etapaAtual = 0;
  var respostas = {};
  var timers = [];

  var palco    = document.getElementById('palco');
  var capa     = document.getElementById('capa');

  function rastrear(evento, dados) {
    window.dataLayer = window.dataLayer || [];
    var payload = { event: evento, pagina: 'quiz' };
    for (var k in dados) { if (dados.hasOwnProperty(k)) payload[k] = dados[k]; }
    window.dataLayer.push(payload);
  }

  function limparTimers() {
    timers.forEach(function (t) { clearInterval(t); clearTimeout(t); });
    timers = [];
  }

  /* ======================================================================
     NAVEGAÇÃO
     ====================================================================== */
  function irPara(n) {
    limparTimers();
    etapaAtual = n;

    var trocar = function () {
      if (capa) { capa.remove(); capa = null; }

      var etapa = (n === -1) ? { tipo: 'saida' } : ETAPAS[n];
      palco.innerHTML = '';
      palco.appendChild(montar(etapa));

      window.scrollTo(0, 0);

      if (etapa.tipo === 'loading') rodarLoading();
      rastrear('quiz_etapa', { etapa: n, tipo: etapa.tipo });
    };

    /* A ficha atual é puxada para cima antes da próxima entrar por baixo */
    var atual = capa || palco.firstElementChild;
    if (atual && !REDUZIDO) {
      atual.classList.add('etapa--sair');
      timers.push(setTimeout(trocar, 200));
    } else {
      trocar();
    }
  }

  function proxima() { irPara(etapaAtual + 1); }

  /* ======================================================================
     MONTAGEM DAS TELAS
     ====================================================================== */
  function montar(etapa) {
    var secao = document.createElement('section');
    secao.className = 'etapa';

    switch (etapa.tipo) {
      case 'pergunta':    montarPergunta(secao, etapa); break;
      case 'som':         montarSom(secao); break;
      case 'video':       montarVideo(secao, etapa); break;
      case 'loading':     montarLoading(secao); break;
      case 'diagnostico': montarDiagnostico(secao); break;
      case 'oferta':      montarOferta(secao); break;
      case 'saida':       montarSaida(secao); break;
    }
    return secao;
  }

  /* ---------- Pergunta: toca na opção e avança sozinho ---------- */
  function montarPergunta(secao, etapa) {
    secao.innerHTML =
      '<h2>' + etapa.titulo + '</h2>' +
      '<div class="opcoes"></div>';
    secao.querySelector('.opcoes').appendChild(montarOpcoes(etapa));
  }

  function montarOpcoes(etapa) {
    var frag = document.createDocumentFragment();

    etapa.opcoes.forEach(function (opcao, i) {
      var botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'opcao';
      botao.innerHTML =
        '<span class="opcao__icone">' + opcao[0] + '</span>' +
        '<span>' + opcao[1] + '</span>';

      botao.addEventListener('click', function () {
        rastrear('quiz_resposta', { chave: etapa.chave || etapa.ficha, escolha: i });

        /* Feedback: a resposta é "anotada no dossiê" antes da ficha virar */
        if (botao.parentElement) botao.parentElement.style.pointerEvents = 'none';
        botao.classList.add('opcao--marcada');
        var icone = botao.querySelector('.opcao__icone');
        if (icone) icone.textContent = '✔';
        if (navigator.vibrate) navigator.vibrate(8);

        var seguir = function () {
          /* A opção de saída: quem já tem estrutura no ar não é o nosso avatar */
          if (etapa.saidaEm === i) { irPara(-1); return; }

          if (etapa.chave) respostas[etapa.chave] = i;
          proxima();
        };
        timers.push(setTimeout(seguir, REDUZIDO ? 0 : 300));
      });

      frag.appendChild(botao);
    });

    return frag;
  }

  /* ---------- Tela "Ligue o som", antes do primeiro vídeo ---------- */
  function montarSom(secao) {
    secao.className = 'etapa etapa--centro';
    secao.innerHTML =
      '<p class="icone-som">◎</p>' +
      '<h2>Ligue o som do seu celular.</h2>' +
      '<p class="voz">O que vem agora é em vídeo. Sem áudio, não faz sentido.</p>' +
      '<button class="botao" type="button">ESTOU PRONTO ►</button>';
    secao.querySelector('button').addEventListener('click', proxima);
  }

  /* ---------- Vídeo: a ação só libera depois de alguns segundos ---------- */
  function montarVideo(secao, etapa) {
    var provaHTML = etapa.prova
      ? '<div class="player player--prova"><span class="player__aviso">' + etapa.prova + '</span></div>'
      : '';

    secao.innerHTML =
      '<h2>' + etapa.titulo + '</h2>' +
      (etapa.provaAcima ? provaHTML : '') +
      '<div class="vsl">' +
        '<span class="vsl__som">◎ LIGUE O SOM</span>' +
        '<div class="player"><span class="player__aviso">' + etapa.video + '</span></div>' +
      '</div>' +
      (etapa.provaAcima ? '' : provaHTML) +
      '<p class="voz legenda">' + etapa.legenda + '</p>' +
      '<div class="acao" hidden></div>' +
      '<p class="espera"><span class="espera__num">' + SEGUNDOS_LIBERAR + '</span>s · assista antes de seguir</p>';

    var acao  = secao.querySelector('.acao');
    var aviso = secao.querySelector('.espera');
    var num   = secao.querySelector('.espera__num');

    if (etapa.continuar) {
      var seguir = document.createElement('button');
      seguir.type = 'button';
      seguir.className = 'botao';
      seguir.textContent = 'CONTINUAR ►';
      seguir.addEventListener('click', proxima);
      acao.appendChild(seguir);
    } else {
      acao.className = 'acao opcoes';
      acao.appendChild(montarOpcoes(etapa));
    }

    /* Conta regressiva: some quando zera e a ação aparece */
    var restam = SEGUNDOS_LIBERAR;
    var tique = setInterval(function () {
      restam -= 1;
      if (restam <= 0) {
        clearInterval(tique);
        aviso.remove();
        acao.hidden = false;
      } else {
        num.textContent = restam;
      }
    }, 1000);
    timers.push(tique);
  }

  /* ---------- Loading: o dossiê sendo montado, frase a frase ---------- */
  /* A única ficha em tinta. Cada frase é datilografada e ganha um respiro de
     leitura; a barra enche linear no tempo real (nada de barra falsa). */
  function montarLoading(secao) {
    secao.className = 'etapa etapa--centro etapa--loading';
    secao.innerHTML =
      '<img class="carga__foto" src="/.netlify/images?url=/images/exercito-agentes.png&w=360&q=75" width="180" height="120" alt="Ilustração do exército de agentes em formação">' +
      '<div class="carga"><div class="carga__preenche" id="carga-preenche"></div></div>' +
      '<p class="voz carga__msg" id="carga-msg"></p>' +
      '<p class="carga__fim" id="carga-fim" hidden><span class="carimbo carimbo--oliva bate">✔ ACESSO LIBERADO</span></p>';
  }

  function rodarLoading() {
    var barraCarga = document.getElementById('carga-preenche');
    var msg = document.getElementById('carga-msg');
    var TOTAL = 8000;

    barraCarga.style.transition = 'width ' + (TOTAL / 1000) + 's linear';
    timers.push(setTimeout(function () { barraCarga.style.width = '100%'; }, 50));

    var idx = 0;
    var proximaFrase = function () {
      if (idx >= MENSAGENS_LOADING.length) {
        var fim = document.getElementById('carga-fim');
        if (fim) fim.hidden = false;
        timers.push(setTimeout(proxima, 900));
        return;
      }
      var texto = MENSAGENS_LOADING[idx];
      idx += 1;

      if (REDUZIDO) {
        msg.textContent = texto;
        timers.push(setTimeout(proximaFrase, 2000));
        return;
      }

      /* Datilografia: ~22ms por caractere + respiro para ler */
      var pos = 0;
      var digita = setInterval(function () {
        pos += 1;
        msg.textContent = texto.slice(0, pos) + (pos < texto.length ? '▌' : '');
        if (pos >= texto.length) {
          clearInterval(digita);
          timers.push(setTimeout(proximaFrase, 850));
        }
      }, 22);
      timers.push(digita);
    };
    proximaFrase();
  }

  /* ---------- Diagnóstico: as 3 linhas montadas com as respostas ---------- */
  function montarDiagnostico(secao) {
    var linhas = [
      LINHA_DOR[respostas.dor || 0],
      LINHA_TEMPO[respostas.tempo || 0],
      LINHA_URGENCIA[respostas.urgencia || 0]
    ];

    secao.innerHTML =
      '<p class="liberado">✔ ACESSO LIBERADO</p>' +
      '<p class="ficha">O SEU DIAGNÓSTICO, COM BASE NO QUE VOCÊ RESPONDEU:</p>' +
      '<div class="diagnostico">' +
        linhas.map(function (l) { return '<p class="diagnostico__linha">' + l + '</p>'; }).join('') +
      '</div>' +
      '<p><strong>A boa notícia:</strong> tudo isso se resolve em uma aula ao vivo de 2 horas. Você resolve o que tenta há meses (ou anos). Nessas 2 horas, você vai:</p>' +
      '<p class="voz">' +
        '► Ver o exército montar AO VIVO uma estrutura completa, do zero ao ar.<br>' +
        '► Receber o mapa da Operação (o passo a passo).<br>' +
        '► Ganhar a aula de tráfego comigo, inclusa.<br>' +
        '► Sair comandando o seu primeiro agente, ao vivo.' +
      '</p>' +
      '<div class="acao"><button class="botao" type="button">VER A CONDIÇÃO DE FUNDADOR ►</button></div>';

    secao.querySelector('button').addEventListener('click', proxima);
  }

  /* ---------- Oferta: fim do funil, direto no checkout ---------- */
  function montarOferta(secao) {
    secao.className = 'etapa etapa--centro';
    secao.innerHTML =
      '<div class="recap">' +
        '<div>► Demonstração<br>ao vivo</div>' +
        '<div>► Mapa da<br>Operação</div>' +
        '<div>► Aula de<br>tráfego</div>' +
        '<div>► Agente<br>liberado</div>' +
      '</div>' +
      '<p class="voz de-por">Valor normal da aula: <s>R$ 99</s></p>' +
      '<p class="ficha ficha--carimbo">O SEU PREÇO DE FUNDADOR</p>' +
      '<p class="preco">R$ 19</p>' +
      '<p class="preco__nota">Uma estrutura dessas, montada por agência, custa por volta de <strong>R$ 5.000</strong>. Aqui você aprende a fazer sozinho por R$ 19.</p>' +
      '<p class="voz escassez">Turma limitada. Preço de fundador dessa primeira turma. 7 dias de garantia total.</p>' +
      '<a class="botao botao--carimbo" id="checkout">GARANTIR MINHA VAGA COMO FUNDADOR ►</a>';

    var botao = secao.querySelector('#checkout');

    if (CHECKOUT_URL) {
      botao.href = CHECKOUT_URL;
      botao.target = '_blank';
      botao.rel = 'noopener';
    } else {
      var nota = document.createElement('p');
      nota.className = 'micro';
      nota.textContent = '[LINK DO CHECKOUT · configurar CHECKOUT_URL no script.js]';
      secao.appendChild(nota);
    }

    botao.addEventListener('click', function () {
      rastrear('checkout_clicado', { origem: 'quiz-oferta' });
    });

    /* A sala acende no momento da decisão */
    document.body.classList.add('mesa-clara');

    /* O CTA respira; o preço conta de 99 a 19 e aterrissa (ancoragem real) */
    if (!REDUZIDO) {
      botao.classList.add('respira');
      var precoEl = secao.querySelector('.preco');
      if (precoEl) {
        var inicio = performance.now();
        var passo = function (agora) {
          var p = Math.min((agora - inicio) / 900, 1);
          var suave = 1 - Math.pow(1 - p, 3);
          precoEl.textContent = 'R$ ' + Math.round(99 - 80 * suave);
          if (p < 1) requestAnimationFrame(passo);
          else precoEl.classList.add('pulso');
        };
        requestAnimationFrame(passo);
      }
    }

    rastrear('quiz_oferta_vista', respostas);
  }

  /* ---------- Saída: quem já resolveu não leva oferta empurrada ---------- */
  function montarSaida(secao) {
    secao.className = 'etapa etapa--centro';
    secao.innerHTML =
      '<span class="carimbo carimbo--oliva carimbo--torto-esq">MISSÃO JÁ CUMPRIDA</span>' +
      '<h2>Que bom que a sua estrutura já tá no ar.</h2>' +
      '<p class="voz">Então isso aqui não é pra você agora, e eu não vou te empurrar nada. Segue arrasando. Se um dia quiser escalar com os agentes, a gente se fala.</p>';

    rastrear('quiz_saida', {});
  }

  /* ======================================================================
     ARRANQUE
     ====================================================================== */
  document.getElementById('comecar').addEventListener('click', function () {
    irPara(1);
  });

  /* Primeiro sinal de vida: o CONFIDENCIAL bate meio segundo depois do load */
  if (!REDUZIDO) {
    timers.push(setTimeout(function () {
      var c = document.querySelector('.etapa--capa .carimbo');
      if (c) c.classList.add('bate');
    }, 400));
  }

  rastrear('quiz_capa_vista', {});
})();
