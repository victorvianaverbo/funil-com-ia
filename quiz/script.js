/* ==========================================================================
   QUIZ · Operação Estrutura no Ar (versão final)
   Copy: aba "8) QUIZ ~ FINAL" do doc "1) OPERAÇÃO - Greyk e Vitão".
   A capa (A e B) está estática no index.html. Daqui pra frente é este script.
   ========================================================================== */

/* --------------------------------------------------------------------------
   CONFIGURAÇÃO · o que você mexe
   -------------------------------------------------------------------------- */
var DATA_AULA = 'segunda, 28/09';
var HORA_AULA = '20h';

/* Checkout da Hyype (lote R$19). UTMs, sck e src são montados no fim. */
var CHECKOUT_BASE = 'https://checkout.hyype.com.br/9c806c70-7cd9-4a75-b1b6-32cfc93e8c08';

/* O botão CONTINUAR das telas de vídeo aparece depois disso. */
var SEGUNDOS_LIBERAR = 5;

/* Cortes da VSL no VTurb: cole aqui o código de incorporação INTEIRO
   (a tag <vturb-smartplayer> + o <script>). Vazio = quadro "vídeo em breve". */
var VIDEOS = {
  /* etapa 6 · a madrugada (~1 min, vertical) */
  corte1: '<vturb-smartplayer id="vid-6ab547375b0835fe519150cd" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"><div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 177.77777777777777% 0 0; z-index: 0; background-color: black;"></div></vturb-smartplayer> <script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/927617eb-9845-4e00-a7b2-72c63a904180/players/6ab547375b0835fe519150cd/v4/player.js", s.async=!0,document.head.appendChild(s); </script>',
  /* etapa 9 · o que a IA não faz aqui (~35 s, vertical) */
  corte2: '<vturb-smartplayer id="vid-6ab54711bbeaa2c0e813adc3" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"><div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 177.77777777777777% 0 0; z-index: 0; background-color: black;"></div></vturb-smartplayer> <script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/927617eb-9845-4e00-a7b2-72c63a904180/players/6ab54711bbeaa2c0e813adc3/v4/player.js", s.async=!0,document.head.appendChild(s); </script>'
};

(function () {
  'use strict';

  var REDUZIDO = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ======================================================================
     HELPERS DE HTML
     ====================================================================== */
  function citacao(texto, fonte) {
    return '<blockquote class="citacao">"' + texto + '"' +
      (fonte ? '<span class="citacao__fonte">' + fonte + '</span>' : '') + '</blockquote>';
  }
  function cit(texto) { return '<span class="cit">"' + texto + '"</span>'; }
  function tabela(cabecalho, linhas, opts) {
    opts = opts || {};
    var cls = 'tabela' + (cabecalho.length >= 3 ? ' tabela--3' : '');
    var html = '<div class="tabela-wrap"><table class="' + cls + '"><thead><tr>' +
      cabecalho.map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr></thead><tbody>';
    linhas.forEach(function (l, i) {
      var forte = opts.forte === i || (opts.forte === 'ultima' && i === linhas.length - 1);
      html += '<tr' + (forte ? ' class="forte"' : '') + '>' +
        l.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
    });
    html += '</tbody></table></div>';
    if (cabecalho.length >= 3) html += '<p class="tabela-dica">Deslize a tabela para o lado ►</p>';
    return html;
  }
  function lista(simbolo, itens) {
    return '<ul class="lista">' + itens.map(function (t) {
      return '<li><i aria-hidden="true">' + simbolo + '</i><span>' + t + '</span></li>';
    }).join('') + '</ul>';
  }
  function linhaDinamica(html) { return '<p class="linha-dinamica">' + html + '</p>'; }

  /* ======================================================================
     COPY DAS LINHAS DINÂMICAS
     ====================================================================== */
  var PRIORIDADE_TENTOU = ['agencia', 'ia', 'curso', 'ferramenta', 'nada'];
  var NOME_TENTOU = {
    agencia: 'Paguei alguém ou agência pra montar',
    ia: 'Usei ChatGPT ou outra IA',
    curso: 'Comprei curso de funil',
    ferramenta: 'Assinei ferramenta de página'
  };

  var LINHA1 = {
    agencia: 'Você já pagou alguém pra montar. O dinheiro saiu antes de você ver qualquer coisa pronta.',
    ia: 'Você já testou IA e saiu genérico. Ela escreveu o texto e deixou as outras 4 peças com você.',
    curso: 'Você fez curso e empacou na hora de fazer. Ele te deu a teoria das 5 e deixou as 5 com você.',
    ferramenta: 'Você assinou ferramenta e travou. Ela te deu uma tela em branco. As 5 peças continuaram suas.',
    nada: 'Você ainda não tentou. Chegou antes da cilada, e isso é vantagem.'
  };
  var LINHA2 = {
    copy: 'A sua maior trava é a copy. Na aula, você vê esse agente escrevendo ao vivo.',
    pagina: 'A sua maior trava é a página torta. Na aula, você vê esse agente montando a página ao vivo.',
    funil: 'A sua maior trava é a ordem do funil. Na aula, você vê esse agente organizando o funil ao vivo.',
    checkout: 'A sua maior trava é integrar o checkout. Na aula, você vê esse agente integrando ao vivo.',
    trafego: 'A sua maior trava é o tráfego. Essa parte não fica com IA: é a aula passo a passo, que já vem inclusa assim que você entrar.',
    naosei: 'Você não sabe qual peça trava. É o caso mais comum. Na aula você vê as 5 montando e enxerga onde tava o buraco.'
  };
  var LINHA3 = [
    'Você ainda não gastou com isso. Vai ver funcionando antes de gastar o primeiro real de verdade.',
    'Já saíram até R$500 tentando. Os R$19 da aula são o único valor dessa história que volta, se não servir.',
    'Já saíram até R$2 mil tentando. Os R$19 da aula são o único valor dessa história que volta, se não servir.',
    'Já saíram milhares tentando. Dá pra entender a desconfiança. Por isso aqui é ao vivo, com cronômetro e sem corte.',
    'Já saíram mais de R$10 mil. Você não precisa de mais uma promessa. Precisa ver.'
  ];
  var LINHA4 = [
    'E a primeira coisa que você faria é colocar o produto pra vender. Na aula você já sai com a primeira peça no ar.',
    'E a primeira coisa que você faria é tirar da gaveta a oferta que nunca saiu. Ela não ficou lá por ser ruim. Ficou por falta de peça.',
    'E a primeira coisa que você faria é ligar o tráfego sem medo. Hoje, com peça faltando, cada real de anúncio vira dinheiro queimado. Com as 5 no lugar, a conversa é outra.',
    'E a primeira coisa que você faria é parar de perder noite com isso. Em 2 horas você vê esse trabalho saindo das suas costas.'
  ];
  var LINHA_PROVA = [
    'Achou bom demais pra ser verdade? Desconfiar é o certo.',
    'Não é bom com tecnologia? Aqui, você não vai precisar ser.',
    'Já quebrou a cara? Então não acredita na gente. Assiste!',
    'Quer ver funcionando? É exatamente o que vai acontecer.'
  ];

  var DIAGNOSTICOS = {
    diag1: {
      nome: 'Produto pronto, estrutura parada',
      intro: '<p>O seu produto não é o problema.<br>O problema é o que falta em volta dele.</p>'
    },
    diag2: {
      nome: 'Conhecimento preso na cabeça',
      intro: '<p>O que você sabe já vale dinheiro.<br>Só ainda não virou produto, nem ganhou as 5 peças em volta.<br>' +
        'O exército começa antes da página: o agente de Narrativa pega o que tá na sua cabeça e transforma na ideia que vende.</p>'
    },
    diag3: {
      nome: 'Vontade sem alvo',
      intro: '<p>Antes das 5 peças, falta o alvo.<br>Montar estrutura sem saber o que vender é mirar no escuro.<br>' +
        'Esse é o trabalho do primeiro agente do exército, o de Descoberta: ele cruza o que você sabe fazer com dado de mercado e mostra o que dá pra vender.</p>'
    }
  };

  /* ======================================================================
     AS ETAPAS
     Fluxo principal em ordem; javende, renda e final só por salto (vai).
     ====================================================================== */
  var ETAPAS = [
    { id: 'estagio', tipo: 'pergunta', chave: 'estagio', ficha: 'Etapa 1 de 12',
      titulo: 'Em que pé tá o que você quer vender?',
      opcoes: [
        { s: '▦', t: 'Tenho o produto pronto', rota: 'diag1' },
        { s: '◎', t: 'Tenho o conhecimento na cabeça, mas ainda não virou produto', rota: 'diag2' },
        { s: '►', t: 'Quero vender, mas ainda não sei o quê', rota: 'diag3' },
        { s: '✓', t: 'Minha estrutura já tá no ar e vendendo', rota: 'javende', vai: 'javende' },
        { s: '$', t: 'Não tenho nada pra vender. Quero uma renda rápida', rota: 'renda', vai: 'renda' }
      ] },

    { id: 'tentou', tipo: 'multi', chave: 'tentou', ficha: 'Etapa 2 de 12',
      titulo: 'O que você já tentou pra colocar isso no ar?',
      micro: 'Pode marcar mais de uma.',
      opcoes: [
        { k: 'ferramenta', t: 'Assinei ferramenta de página' },
        { k: 'curso', t: 'Comprei curso de funil' },
        { k: 'ia', t: 'Usei ChatGPT ou outra IA' },
        { k: 'agencia', t: 'Paguei alguém ou agência pra montar' },
        { k: 'nada', t: 'Ainda não tentei nada', exclusiva: true }
      ] },

    { id: 'conta', tipo: 'revelacao', ficha: 'A conta que ninguém te mostrou',
      conteudo: function () {
        return citacao('Fiquei horas construindo meu site, mas não tenho resultado.', 'Frase real, de um fórum de marketing digital.') +
          '<p>Colocar um produto pra vender parece uma tarefa.<br><strong>São <span class="num">5</span>:</strong></p>' +
          tabela(['Peça', 'Quando falta, soa assim'], [
            ['Copy', cit('Tive que fazer muitos ajustes e no final não gerou nenhum resultado.')],
            ['Página', cit('Na hora de montar o design, fica tudo torto.')],
            ['Funil', cit('Fiquei horas construindo, mas não tenho resultado.')],
            ['Checkout', cit('Na prática, eu travo na hora de integrar o checkout com a página.')],
            ['Tráfego', cit('Uma loja no meio do mato que ninguém vai ter acesso.')]
          ]) +
          '<p><strong><span class="num">5 peças</span>. 5 profissões.</strong><br>Se falta uma, as outras quatro não vendem.</p>' +
          '<p>Te pediram as 5. Sozinho. Antes da primeira venda.<br><strong>Não é falta de capacidade. É matemática.</strong></p>';
      } },

    { id: 'peca', tipo: 'pergunta', chave: 'peca', ficha: 'Etapa 4 de 12',
      titulo: 'Qual dessas 5 mais te trava hoje?',
      opcoes: [
        { s: '✎', k: 'copy', t: 'A copy: não sei escrever o que vende' },
        { s: '▭', k: 'pagina', t: 'A página: fica feia, torta, com cara de amador' },
        { s: '⇢', k: 'funil', t: 'O funil: não sei a ordem até a compra' },
        { s: '▤', k: 'checkout', t: 'O checkout: travo na integração' },
        { s: '◉', k: 'trafego', t: 'O tráfego: acho complicado e tenho medo de queimar dinheiro' },
        { s: '?', k: 'naosei', t: 'Não sei qual. Só sei que não vende' }
      ] },

    { id: 'caminhos', tipo: 'revelacao', ficha: 'Os 4 caminhos que te venderam',
      conteudo: function (r) {
        var k = tentouPrincipal(r);
        var linha = k === 'nada'
          ? 'Você ainda não tentou. Olha a tabela antes de cair em qualquer um desses.'
          : 'Você marcou "' + NOME_TENTOU[k] + '". Procura ela na tabela. E olha a terceira coluna.';
        return linhaDinamica(linha) +
          tabela(['Caminho', 'O que te entrega', 'Quem faz as 5 peças'], [
            ['Ferramenta', 'Uma tela em branco', '<strong>Você</strong>'],
            ['Curso', 'A teoria das 5', '<strong>Você</strong>'],
            ['IA genérica', 'Um texto', '<strong>Você monta o resto</strong>'],
            ['Agência', 'As 5 feitas', 'Eles, de <span class="num">R$5 mil a R$15 mil</span>']
          ]) +
          '<p>Na boca de quem viveu:</p>' +
          lista('→', [
            '<strong>Ferramenta:</strong> ' + cit('Achei muito difícil.'),
            '<strong>IA genérica:</strong> ' + cit('Criar um site continua sendo mais complicado do que deveria.'),
            '<strong>Agência:</strong> mais de <span class="num">R$45 mil</span> investidos. <span class="num">R$3 mil</span> em vendas. ' + cit('Só gastando, só gastando.')
          ]) +
          '<p>Você trocou de ferramenta. De curso. De fornecedor.<br><strong>Não trocou de problema: as 5 peças continuavam com você.</strong></p>' +
          '<p>Isso tem nome: <strong>a cilada do faça você mesmo.</strong><br>E o problema nunca foi você.</p>';
      } },

    { id: 'video1', tipo: 'video', video: 'corte1', ficha: 'Assista',
      acima: '<h2>Quem te mostra isso também caiu nessa cilada.</h2>' +
        '<p class="suave">É o Greyk. Ele e o sócio, o Victor, vivem de marketing digital há mais de 6 anos.</p>',
      abaixo: '<p><strong>Se isso travava a gente, que vive disso, imagina você tentando sozinho.</strong></p>' },

    { id: 'gasto', tipo: 'pergunta', chave: 'gasto', ficha: 'Etapa 7 de 12',
      titulo: 'Somando ferramenta, curso e quem você pagou: quanto já saiu do seu bolso tentando?',
      opcoes: [
        { s: '0', t: 'Nada ainda' },
        { s: '$', t: 'Até R$500' },
        { s: '$$', t: 'De R$500 a R$2 mil' },
        { s: '$$$', t: 'De R$2 mil a R$10 mil' },
        { s: '!', t: 'Mais de R$10 mil' }
      ] },

    { id: 'exercito', tipo: 'revelacao', ficha: 'O exército',
      conteudo: function () {
        return citacao('Queria só dar o comando e aparecer pronto.') +
          '<p>Foi o que a gente mais ouviu na pesquisa. Foi o que a gente construiu.</p>' +
          tabela(['Agente', 'O que faz', 'O que você faz'], [
            ['Descoberta', 'Define nicho e avatar com dado de mercado', 'Responde'],
            ['Pesquisa', 'Acha o buraco da sua oferta', 'Dá o comando'],
            ['Narrativa', 'Cria a ideia que diferencia o seu produto', 'Dá o comando'],
            ['Copy', 'Escreve a página', 'Dá o comando'],
            ['Página', 'Monta com cara profissional', 'Dá o comando'],
            ['Funil', 'Organiza a ordem até a compra', 'Dá o comando'],
            ['Checkout', 'Integra o pagamento', 'Dá o comando'],
            ['Tráfego', 'Fica com gente. Não com IA', 'Assiste e repete o passo a passo']
          ], { forte: 'ultima' }) +
          '<p>Você fala em português normal.<br><strong>Igual mandar uma mensagem no WhatsApp.</strong></p>' +
          '<p>IA genérica chuta.<br>Esses agentes foram treinados com o padrão de centenas de lançamentos.<br>Montam em cima do que já vendeu.</p>';
      } },

    { id: 'video2', tipo: 'video', video: 'corte2', ficha: 'Assista',
      acima: '<h2>Tem uma peça que a gente não deixa com a IA.</h2>' +
        '<p class="suave">E o motivo é o seu dinheiro.</p>',
      abaixo: '<p><strong>4 agentes executam. O tráfego é passo a passo. Você comanda.</strong></p>' },

    { id: 'pensamento', tipo: 'pergunta', chave: 'pensamento', ficha: 'Etapa 10 de 12',
      titulo: 'Depois de ver isso, qual foi o seu primeiro pensamento?',
      opcoes: [
        { s: '?', t: 'Parece bom demais pra ser verdade' },
        { s: '✕', t: 'Não sou bom com tecnologia. Não vou conseguir' },
        { s: '!', t: 'Já quebrei a cara. Tô desconfiado' },
        { s: '►', t: 'Quero ver isso funcionando' }
      ] },

    { id: 'prova', tipo: 'revelacao', ficha: 'Você não precisa acreditar na gente',
      conteudo: function (r) {
        return linhaDinamica(LINHA_PROVA[r.pensamento || 0]) +
          '<p>Na aula, ao vivo, na sua frente:</p>' +
          lista('→', [
            'A gente digita o comando.',
            'O agente escreve a copy.',
            'A página monta.',
            'O funil se organiza.',
            'O checkout integra.',
            'Compra de teste: <strong>aprovada.</strong>'
          ]) +
          '<p>Cronômetro ligado do primeiro comando até a compra aprovada.<br>Sem corte. Sem edição.</p>' +
          '<p><strong>Se travar, trava na sua frente.</strong></p>';
      } },

    { id: 'depois', tipo: 'pergunta', chave: 'depois', ficha: 'Etapa 12 de 12',
      titulo: 'Se as 5 peças estivessem no lugar essa semana, o que você fazia primeiro?',
      opcoes: [
        { s: '►', t: 'Colocava o produto pra vender, finalmente' },
        { s: '▦', t: 'Tirava da gaveta a oferta que nunca saiu' },
        { s: '◉', t: 'Ligava o tráfego sem medo de queimar dinheiro' },
        { s: '☾', t: 'Parava de perder noite com isso' }
      ] },

    { id: 'diagnostico', tipo: 'diagnostico' },

    /* ---------- fora do fluxo ---------- */
    { id: 'javende', tipo: 'rota', oferta: true,
      conteudo: function () {
        return '<h2>A sua estrutura já vende. Então o seu gargalo é outro.</h2>' +
          '<p><strong>É a próxima oferta.</strong></p>' +
          '<p>Cada oferta nova pede tudo de novo:<br>copy nova, página nova, funil novo, checkout novo.</p>' +
          citacao('Estresse em lançamentos.') +
          citacao('Tinha que pagar pessoas pra fazer tudo pra mim.', 'Frases reais, de quem monta estrutura de venda.') +
          tabela(['A próxima oferta', 'Do jeito de hoje', 'Com o exército'], [
            ['Copy, página, funil e checkout', 'Você ou a equipe, peça por peça', '4 agentes, com o seu comando'],
            ['Tempo até o ar', 'Semanas', 'Horas'],
            ['Quantas ofertas você testa', 'Poucas. Cada uma custa caro', 'Mais. Cada uma sai rápido']
          ]) +
          '<p><strong>Quem testa mais oferta, vai achar a próxima que vende!</strong></p>' +
          '<p>Na aula, a gente abre a tela e solta o exército do zero até a compra aprovada.<br>' +
          'Ao vivo. Cronômetro ligado. Sem corte.<br>' +
          'Você vê com o próprio olho se ele encurta o caminho da sua próxima oferta.</p>';
      } },

    { id: 'renda', tipo: 'rota',
      conteudo: function () {
        return '<h2>Obrigado pela sinceridade. Então vou ser sincero também.</h2>' +
          '<p>Renda rápida, sem nada pra vender, não tem aqui.<br>E quem te prometer isso tá te vendendo a próxima cilada.</p>' +
          '<p>Mas repara numa coisa.<br>Quase todo mundo tem algo que outra pessoa pagaria pra aprender:<br>uma profissão, uma habilidade, uma experiência que você viveu.</p>' +
          '<p>É exatamente isso que o primeiro agente do exército faz, o de <strong>Descoberta</strong>:<br>' +
          'ele conversa com você, cruza o que você sabe com dado de mercado e mostra o que dá pra vender.</p>' +
          '<h3>Você tem alguma profissão, habilidade ou experiência?</h3>';
      },
      opcoes: [
        { s: '►', t: 'Tenho. Quero descobrir o que dá pra vender', vai: 'tentou' },
        { s: '✕', t: 'Não tenho nada disso', vai: 'final' }
      ] },

    { id: 'final', tipo: 'final' }
  ];

  /* Ordem do fluxo principal, para a barra de progresso */
  var FLUXO = ['estagio', 'tentou', 'conta', 'peca', 'caminhos', 'video1', 'gasto',
               'exercito', 'video2', 'pensamento', 'prova', 'depois', 'diagnostico'];

  /* ======================================================================
     ESTADO
     ====================================================================== */
  var atualId = null;
  var respostas = { angulo: (window.PAGE && window.PAGE.angulo) || 'aovivo' };
  var timers = [];

  var palco = document.getElementById('palco');
  var barra = document.getElementById('progresso-barra');

  function porId(id) {
    for (var i = 0; i < ETAPAS.length; i++) if (ETAPAS[i].id === id) return ETAPAS[i];
    return null;
  }

  function tentouPrincipal(r) {
    var t = r.tentou || [];
    for (var i = 0; i < PRIORIDADE_TENTOU.length; i++) {
      if (t.indexOf(PRIORIDADE_TENTOU[i]) !== -1) return PRIORIDADE_TENTOU[i];
    }
    return 'nada';
  }

  function rastrear(evento, dados) {
    dados = dados || {};
    window.dataLayer = window.dataLayer || [];
    var payload = { event: evento, pagina: 'quiz', rota: respostas.rota || '', angulo: respostas.angulo };
    for (var k in dados) { if (dados.hasOwnProperty(k)) payload[k] = dados[k]; }
    window.dataLayer.push(payload);
    if (typeof window.fbq === 'function') {
      try { window.fbq('trackCustom', evento, { rota: payload.rota, angulo: payload.angulo }); } catch (e) {}
    }
  }

  function limparTimers() {
    timers.forEach(function (t) { clearInterval(t); clearTimeout(t); });
    timers = [];
  }

  function atualizarProgresso(id) {
    if (!barra) return;
    var i = FLUXO.indexOf(id);
    var p;
    if (i !== -1) p = (i + 1) / FLUXO.length;
    else p = (id === 'javende' || id === 'final') ? 1 : 0.1;
    barra.style.width = Math.round(p * 100) + '%';
  }

  /* ======================================================================
     NAVEGAÇÃO
     ====================================================================== */
  function irPara(id) {
    limparTimers();
    atualId = id;

    var trocar = function () {
      document.querySelectorAll('.etapa--capa').forEach(function (c) { c.remove(); });
      var etapa = porId(id);
      palco.innerHTML = '';
      palco.appendChild(montar(etapa));
      window.scrollTo(0, 0);
      atualizarProgresso(id);
      var nome = id === 'diagnostico' ? 'Quiz_' + diagId() : 'Quiz_' + id;
      rastrear(nome);
    };

    var atual = palco.querySelector('.etapa');
    if (atual && !REDUZIDO) {
      atual.classList.add('etapa--sair');
      timers.push(setTimeout(trocar, 200));
    } else {
      trocar();
    }
  }

  function proxima() {
    var i = FLUXO.indexOf(atualId);
    irPara(FLUXO[i + 1]);
  }

  function diagId() {
    return respostas.rota === 'renda' ? 'diag3' : (respostas.rota || 'diag1');
  }

  /* ======================================================================
     MONTAGEM
     ====================================================================== */
  function montar(etapa) {
    var secao = document.createElement('section');
    secao.className = 'etapa';
    switch (etapa.tipo) {
      case 'pergunta':    montarPergunta(secao, etapa); break;
      case 'multi':       montarMulti(secao, etapa); break;
      case 'revelacao':   montarRevelacao(secao, etapa); break;
      case 'video':       montarVideo(secao, etapa); break;
      case 'diagnostico': montarDiagnostico(secao); break;
      case 'rota':        montarRota(secao, etapa); break;
      case 'final':       montarFinal(secao); break;
    }
    return secao;
  }

  function botaoContinuar(rotulo) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'botao';
    b.textContent = rotulo || 'CONTINUAR →';
    return b;
  }

  /* ---------- Pergunta de escolha única: toca e avança ---------- */
  function montarPergunta(secao, etapa) {
    secao.innerHTML =
      '<p class="ficha">' + etapa.ficha + '</p>' +
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
        '<span class="opcao__icone" aria-hidden="true">' + (opcao.s || '►') + '</span>' +
        '<span>' + opcao.t + '</span>';

      botao.addEventListener('click', function () {
        if (botao.parentElement) botao.parentElement.style.pointerEvents = 'none';
        botao.classList.add('opcao--marcada');
        botao.querySelector('.opcao__icone').textContent = '✓';
        if (navigator.vibrate) navigator.vibrate(8);

        if (etapa.chave) respostas[etapa.chave] = opcao.k !== undefined ? opcao.k : i;
        /* A rota renda que continua mantém rota=renda (vai no src do checkout) */
        if (opcao.rota) respostas.rota = opcao.rota;
        rastrear('Quiz_resposta', { chave: etapa.chave || etapa.id, escolha: opcao.k || i });

        timers.push(setTimeout(function () {
          if (opcao.vai) irPara(opcao.vai); else proxima();
        }, REDUZIDO ? 0 : 280));
      });
      frag.appendChild(botao);
    });
    return frag;
  }

  /* ---------- Múltipla escolha com opção exclusiva ---------- */
  function montarMulti(secao, etapa) {
    secao.innerHTML =
      '<p class="ficha">' + etapa.ficha + '</p>' +
      '<h2>' + etapa.titulo + '</h2>' +
      '<p class="suave">' + etapa.micro + '</p>' +
      '<div class="opcoes"></div>' +
      '<div class="acao" hidden></div>';

    var caixa = secao.querySelector('.opcoes');
    var acao = secao.querySelector('.acao');
    var marcadas = [];
    var botoes = {};

    function pintar() {
      etapa.opcoes.forEach(function (o) {
        var on = marcadas.indexOf(o.k) !== -1;
        botoes[o.k].classList.toggle('opcao--marcada', on);
        botoes[o.k].setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      acao.hidden = marcadas.length === 0;
    }

    etapa.opcoes.forEach(function (o) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'opcao';
      b.setAttribute('aria-pressed', 'false');
      b.innerHTML = '<span class="opcao__caixa" aria-hidden="true"></span><span>' + o.t + '</span>';
      b.addEventListener('click', function () {
        var pos = marcadas.indexOf(o.k);
        if (pos !== -1) {
          marcadas.splice(pos, 1);
        } else if (o.exclusiva) {
          marcadas = [o.k];
        } else {
          marcadas = marcadas.filter(function (k) {
            return !etapa.opcoes.some(function (x) { return x.k === k && x.exclusiva; });
          });
          marcadas.push(o.k);
        }
        pintar();
      });
      botoes[o.k] = b;
      caixa.appendChild(b);
    });

    var seguir = botaoContinuar();
    seguir.addEventListener('click', function () {
      respostas[etapa.chave] = marcadas.slice();
      rastrear('Quiz_resposta', { chave: etapa.chave, escolha: marcadas.join(',') });
      proxima();
    });
    acao.appendChild(seguir);
  }

  /* ---------- Revelação: texto + tabela + Continuar ---------- */
  function montarRevelacao(secao, etapa) {
    secao.innerHTML =
      '<p class="ficha">' + etapa.ficha + '</p>' +
      etapa.conteudo(respostas) +
      '<div class="acao"></div>';
    var b = botaoContinuar();
    b.addEventListener('click', proxima);
    secao.querySelector('.acao').appendChild(b);
  }

  /* ---------- Vídeo (VTurb): Continuar aparece depois de N segundos ---------- */
  function montarVideo(secao, etapa) {
    var embed = VIDEOS[etapa.video] || '';
    var idSlot = etapa.video === 'corte1' ? 'corte-1' : 'corte-2';

    secao.innerHTML =
      '<p class="ficha">' + etapa.ficha + '</p>' +
      etapa.acima +
      '<div class="player' + (embed ? '' : ' player--vazio') + '" id="' + idSlot + '">' +
        (embed ? '' : 'vídeo em breve') +
      '</div>' +
      etapa.abaixo +
      '<div class="acao" hidden></div>' +
      '<p class="espera">o botão aparece em instantes</p>';

    if (embed) injetarEmbed(secao.querySelector('#' + idSlot), embed);

    var acao = secao.querySelector('.acao');
    var b = botaoContinuar();
    b.addEventListener('click', proxima);
    acao.appendChild(b);

    timers.push(setTimeout(function () {
      var espera = secao.querySelector('.espera');
      if (espera) espera.remove();
      acao.hidden = false;
    }, SEGUNDOS_LIBERAR * 1000));
  }

  /* innerHTML não executa <script>: recria cada um para o player carregar */
  function injetarEmbed(alvo, html) {
    alvo.innerHTML = html;
    alvo.querySelectorAll('script').forEach(function (velho) {
      var novo = document.createElement('script');
      for (var i = 0; i < velho.attributes.length; i++) {
        novo.setAttribute(velho.attributes[i].name, velho.attributes[i].value);
      }
      novo.text = velho.text;
      velho.parentNode.replaceChild(novo, velho);
    });
  }

  /* ---------- Diagnóstico: nome + 4 linhas + oferta ---------- */
  function montarDiagnostico(secao) {
    var d = DIAGNOSTICOS[diagId()];
    var r = respostas;
    var linhas = [
      LINHA1[tentouPrincipal(r)],
      LINHA2[r.peca || 'naosei'],
      LINHA3[r.gasto || 0],
      LINHA4[r.depois || 0]
    ];
    secao.innerHTML =
      '<p class="liberado">✓ Seu diagnóstico</p>' +
      '<h1 class="diagnostico__nome">' + d.nome + '</h1>' +
      d.intro +
      '<p class="ficha">Com base no que você respondeu:</p>' +
      '<div class="diagnostico">' +
        linhas.map(function (l) { return '<p class="diagnostico__linha">' + l + '</p>'; }).join('') +
      '</div>' +
      blocoOferta(diagId());
  }

  /* ---------- Rotas fora do fluxo ---------- */
  function montarRota(secao, etapa) {
    secao.innerHTML = etapa.conteudo(respostas) +
      (etapa.oferta ? blocoOferta(etapa.id) : '') +
      (etapa.opcoes ? '<div class="opcoes"></div>' : '');
    if (etapa.opcoes) secao.querySelector('.opcoes').appendChild(montarOpcoes(etapa));
  }

  function montarFinal(secao) {
    secao.className = 'etapa etapa--final';
    secao.innerHTML =
      '<h2>Então essa aula não é pra você agora.</h2>' +
      '<p>Prefiro te dizer isso do que te vender algo que não vai te ajudar.</p>' +
      '<p class="suave">Se um dia você quiser levar o que sabe pro digital, volta aqui.</p>';
  }

  /* ---------- Bloco da oferta (igual em todos os resultados) ---------- */
  function blocoOferta(origem) {
    /* src: o caminho que gerou a compra. A renda que continuou vira "renda". */
    var src = respostas.rota === 'renda' ? 'renda' : origem;
    return '<div class="oferta">' +
      '<h2>Isso se resolve numa aula ao vivo de 2 horas.</h2>' +
      '<p class="oferta__data">Operação Estrutura no Ar · ' + DATA_AULA + ' · ' + HORA_AULA + '</p>' +
      '<ol class="entregas">' +
        '<li><span class="entregas__num">1</span><span><strong>A demonstração completa.</strong> O exército do zero ao ar, na sua frente.</span></li>' +
        '<li><span class="entregas__num">2</span><span><strong>O mapa da Operação.</strong> Cada etapa na ordem, de produto parado a estrutura no ar.</span></li>' +
        '<li><span class="entregas__num">3</span><span><strong>A aula de tráfego.</strong> Passo a passo pra copiar. Fica com você pra sempre.</span></li>' +
        '<li><span class="entregas__num">4</span><span><strong>Um agente liberado na hora.</strong> Você comanda e sai com a primeira peça no ar.</span></li>' +
      '</ol>' +
      tabela(['O que', 'Quanto custa', 'O que você vê antes de pagar'], [
        ['Agência', 'De R$5 mil a R$15 mil', 'Um orçamento'],
        ['Aula', '<span class="num">R$19</span>', 'O exército montando, ao vivo']
      ], { forte: 1 }) +
      '<div class="nao">' +
        '<p>✗ <strong>Não é promessa de dinheiro fácil.</strong> São as 5 peças no lugar, pro seu produto ter como vender.</p>' +
        '<p>✗ <strong>Não tem pegadinha no fim.</strong> No final eu abro o acesso ao exército inteiro, os 8 agentes na sua mão. ' +
        'E pra quem prefere não mexer em nada, tem um formulário: a gente escolhe uma pessoa por turma e entra como sócio, ' +
        'com a nossa equipe fazendo a operação inteira. Quem não quiser nenhum dos dois, sai com as 4 entregas garantidas.</p>' +
      '</div>' +
      '<p class="pior-cenario"><strong>O pior cenário:</strong> você assiste, não gosta e pede os R$19 de volta em até 7 dias. Sem pergunta.</p>' +
      '<a class="botao botao--checkout" data-cta="quiz" href="' + montarCheckout(src) + '">QUERO VER AO VIVO POR R$19</a>' +
      '<p class="micro">2 horas · ao vivo · 7 dias pra pedir o dinheiro de volta</p>' +
    '</div>';
  }

  function montarCheckout(src) {
    var url = new URL(CHECKOUT_BASE);
    var aqui = new URLSearchParams(window.location.search);
    url.searchParams.set('utm_source', aqui.get('utm_source') || 'iafunil');
    url.searchParams.set('utm_medium', aqui.get('utm_medium') || 'quiz');
    ['utm_campaign', 'utm_content', 'utm_term'].forEach(function (k) {
      if (aqui.get(k)) url.searchParams.set(k, aqui.get(k));
    });
    url.searchParams.set('sck', 'oea_quiz_' + src);
    url.searchParams.set('src', src);
    return url.toString();
  }

  /* ======================================================================
     INÍCIO
     ====================================================================== */
  document.querySelectorAll('.comecar').forEach(function (b) {
    b.addEventListener('click', function () {
      rastrear('Quiz_comecar');
      irPara('estagio');
    });
  });
})();
