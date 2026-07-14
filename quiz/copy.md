# Copy — Quiz · Operação Estrutura no Ar

Fonte: aba **8) QUIZ** do doc de estratégia. Visual: marca Dossiê de Guerra ([/marca/marca.md](../marca/marca.md)).
Modelo de referência: `inlead.digital/novo-metodo-de-vendas-automaticas`.

**A lógica do funil:** a pessoa vem do anúncio, responde perguntas curtas que fisgam a dor dela, e
entre as perguntas assiste pedaços da VSL (problema, solução, oferta) mais a demonstração dos
agentes funcionando. Cada clique é um micro-compromisso que aquece. No fim, botão direto pro
checkout. Sem VSL longa no fim, sem página de vendas intermediária. **O quiz É a venda.**

---

## As 15 telas, na ordem

| # | Tela | O que acontece |
|---|---|---|
| 0 | Capa | Título + incentivo. Botão "QUERO ENTENDER EM 3 MINUTOS" |
| 1 | Situação | Você já tentou colocar a sua estrutura de vendas no ar? (3 opções) |
| 2 | Contexto | Há quanto tempo esse produto espera pra sair do papel? (3 opções) → **alimenta a linha 2 do diagnóstico** |
| 3 | Ligue o som | Tela dedicada antes do primeiro vídeo. Botão "ESTOU PRONTO" |
| 4 | Vídeo 1 · O problema | Prova (take rápido) acima + corte da VSL + 2 opções |
| 5 | A trava | O que mais te trava hoje? (4 opções) → **linha 1 do diagnóstico** · a 4ª opção é a **SAÍDA** |
| 6 | Sinceridade | Você ainda acredita que consegue colocar isso no ar? (3 opções) |
| 7 | Vídeo 2 · A solução | Corte da VSL + prova (takes dos agentes) abaixo + Continuar |
| 8 | O sonho | Se a estrutura estivesse no ar hoje, o que mudava? (3 opções) |
| 9 | Urgência | Quando você ia querer começar? (3 opções) → **linha 3 do diagnóstico** |
| 10 | Vídeo 3 · A oferta | Corte da VSL + prova (COMPRA APROVADA) abaixo + Continuar |
| 11 | Decisão | Tá pronto pra colocar o produto no ar de uma vez? (2 opções) |
| 12 | Loading | 4,5s. Barra enchendo + 4 frases |
| 13 | Diagnóstico | ACESSO LIBERADO + as 3 linhas personalizadas |
| 14 | Oferta | Recap + R$ 99 riscado + R$ 19 + checkout |
| — | Saída | Só pra quem clicou a opção de saída na tela 5 |

## Capa

**Selo:** OPERAÇÃO ESTRUTURA NO AR

**Título:** Enquanto todo mundo trava na parte técnica, tem especialista colocando a estrutura de
vendas no ar sem montar uma única peça.

**Incentivo:** Quem responder até o final vê a demonstração completa do **EXÉRCITO DE AGENTES**
montando uma estrutura do zero ao ar.

**Botão:** QUERO ENTENDER EM 3 MINUTOS → · *A demonstração está a poucas perguntas de distância.*

## Vídeos e provas (os slots)

Cada tela de vídeo tem dois espaços. **A montagem final depende desses dois assets** — são os
mesmos da VSL e da página:

| Tela | Vídeo (corte da VSL) | Prova (take dos agentes) |
|---|---|---|
| 4 | Mecanismo do problema (Bloco 2): as 5 competências + a cilada. 40-60s | Take rápido de 5-8s, um agente montando algo. Compra a atenção |
| 7 | Mecanismo da solução (Bloco 4): o exército + o tráfego com o Victor. 40-60s | Os takes principais: comando WhatsApp, copy, página, checkout |
| 10 | Oferta + entregáveis + garantia (Bloco 6). 40-60s | A tela verde de COMPRA APROVADA. O clímax da prova |

A ação da tela (opções ou "Continuar") **só libera depois de 8 segundos**, pra incentivar assistir.
Ajuste em `SEGUNDOS_LIBERAR`, no topo do [script.js](script.js).

## O diagnóstico (tela 13)

As 3 linhas trocam conforme o que a pessoa respondeu. É o momento de maior conexão — ela lê e sente
"isso sou eu". Por isso vêm em destaque, com barra vermelha à esquerda.

**Linha 1 — pela TRAVA (tela 5):**
- trava na parte técnica → "Você me disse que trava na parte técnica. É exatamente ali que o exército faz o trabalho pesado por você."
- já gastei e não saiu do papel → "Você já gastou e não saiu do papel. Dessa vez, você vê funcionar antes de gastar de novo."
- não dou conta sozinho → "Você não precisa dar conta das cinco coisas sozinho. O exército assume o que te trava."

**Linha 2 — pelo TEMPO (tela 2):**
- na cabeça, só falta tirar do papel → "A sua ideia tá pronta na sua cabeça. Chegou a hora de ela virar estrutura no ar."
- terminei há meses, segue parado → "O seu produto tá pronto há meses, esperando. Essa espera acaba na próxima aula."
- mais de um ano → "Faz mais de um ano que isso te incomoda. Imagina resolver isso essa semana."

**Linha 3 — pela URGÊNCIA (tela 9):**
- agora, já perdi tempo demais → "E você quer começar agora. Perfeito, é exatamente pra isso que essa aula existe."
- essa semana → "E você quer resolver essa semana. Dá tempo, se você entrar agora."
- depende de ver funcionando → "E você quer ver funcionando antes. Justo. É exatamente o que você vai ver, ao vivo."

Depois das 3 linhas: **A boa notícia:** tudo isso se resolve em uma aula ao vivo de 2 horas.
Nessas 2 horas você vai ver o exército montar ao vivo, receber o mapa da Operação, ganhar a aula
de tráfego comigo e sair comandando o seu primeiro agente.

## Loading (tela 12)

Barra de 4,5 segundos. As frases sobem em sequência, uma substituindo a outra:

1. "Montando o seu plano com base nas suas respostas..."
2. "Você não é o problema. Nunca foi."
3. "Tem um jeito de tirar o seu produto do papel sem você montar nada."
4. "E ele tá pronto pra você. Segue mais um passo."

Tom: alívio e reconhecimento, **não** hype de guru. É verdade sussurrada, não grito. Loading curto
de propósito: tempo suficiente pra criar o momento, curto o bastante pra não irritar o cético.

## Oferta (tela 14)

Recap em 4 cards: Demonstração ao vivo · Mapa da Operação · Aula de tráfego · Agente liberado

Valor normal da aula: ~~R$ 99~~ · **O seu preço de fundador: R$ 19**

Uma estrutura dessas, montada por agência, custa por volta de R$ 5.000. Aqui você aprende a fazer
sozinho por R$ 19. *Turma limitada. Preço de fundador dessa primeira turma. 7 dias de garantia total.*

**Botão:** GARANTIR MINHA VAGA COMO FUNDADOR →

## Tela de saída

Só pra quem respondeu "minha estrutura já tá no ar e vendendo bem" na tela 5.

> Que bom que a sua estrutura já tá no ar. Então isso aqui não é pra você agora, e eu não vou te
> empurrar nada. Segue arrasando. Se um dia quiser escalar com os agentes, a gente se fala.

Sem oferta, sem empurrão. Coerente com o anti-guru: não vende pra quem não precisa.

---

## Onde mexer

| O quê | Onde |
|---|---|
| Link do checkout | `CHECKOUT_URL` no topo de [script.js](script.js) |
| Tempo até liberar a ação nos vídeos | `SEGUNDOS_LIBERAR` no topo de [script.js](script.js) |
| Embeds de vídeo e provas | os `.player` de cada etapa de vídeo — o texto do slot diz o que entra em cada um |
| Copy de qualquer etapa | o array `ETAPAS` no [script.js](script.js) |

**Testar outro preço (R$ 49 / R$ 69):** o doc prevê 3 quizzes em paralelo, mudando só o preço e o
link do checkout. Duplique a pasta, troque os dois, suba os dois.
