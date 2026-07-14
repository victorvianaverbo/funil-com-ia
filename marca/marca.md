# Operação Estrutura no Ar — Manual da Marca

Direção visual escolhida: **Dossiê de Guerra** (direção 03 do estudo de marca).
Um manual de campo desclassificado dos anos 60: papel envelhecido, tinta preta de
máquina de escrever, carimbo vermelho, verde militar.

O código está em [tokens.css](tokens.css) — toda página do funil importa esse arquivo
e usa só as variáveis dele. Não existe cor nem fonte solta no CSS das páginas.

---

## Por que essa direção

O mercado de infoproduto é todo escuro, neon e gradiente. Página clara com cara de
documento militar não se parece com nada no feed, e isso é o ponto: no scroll, ela
não é lida como "mais um anúncio de guru".

A estética também trabalha a favor da promessa. Um dossiê não promete — ele registra o
que já aconteceu. É exatamente a postura da oferta: *não é promessa, é pra você ver
funcionando*.

---

## Paleta

| Cor | Hex | Onde entra |
|---|---|---|
| Papel | `#E6E1D3` | Fundo padrão de todas as páginas |
| Papel sombra | `#DED8C6` | Hover, blocos de destaque sobre o papel |
| Papel linha | `#C4BDA8` | Divisórias e bordas leves |
| Tinta | `#1C1A15` | Texto principal, botões, seções invertidas |
| Tinta suave | `#3A362C` | Corpo de texto secundário |
| Carimbo | `#A83226` | Urgência, alerta, ênfase. Nunca em bloco grande |
| Oliva escuro | `#3D5230` | Preço, garantia, links, aprovação |
| Oliva claro | `#7EA86A` | Verde sobre fundo escuro ("COMPRA APROVADA") |
| Grafite | `#6B6552` / `#8F8871` | Legendas, códigos de ficha, metadados |

O vermelho de carimbo é tempero, não base. Ele marca o que é urgente (CONFIDENCIAL,
turma limitada, "o problema nunca foi você"). Se ele começar a aparecer em todo lugar,
perde a função.

## Tipografia

- **Saira Stencil One** — logo e títulos. É o estêncil pintado na caixa de suprimento.
- **Special Elite** — corpo com voz. É a máquina de escrever: fala com o leitor, conta a história.
- **IBM Plex Mono** — dados frios. Códigos de ficha, badges, metadados, selos.
- **Saira** — leitura corrida. Onde o texto precisa sumir e só ser lido.

A regra de uso é essa divisão de papéis. Special Elite é a voz do autor; IBM Plex Mono
é o carimbo da máquina; Saira é o texto neutro. Misturar isso embaralha a hierarquia.

## Logo

- **Principal:** `ESTRUTURA NO AR` em Saira Stencil One, duas linhas, centralizado
- **Monograma:** `E.N.A.`
- **Carimbo / avatar:** `EA` em círculo de traço, rotacionado -6°
- **Horizontal:** `ESTRUTURA NO AR ●` (ponto vermelho ao fim)

## Tom de voz

- Documento desclassificado: revela o que escondiam de você
- Anti-guru por natureza. Papel e fato, não neon e hype
- Vocabulário da casa: dossiê, briefing, ficha, plano, arquivo, evidência, operação, missão
- A frase que resume tudo: **"Isto não é promessa. É procedimento."**

Escreve como quem entrega um relatório, não como quem vende. As seções da página de
vendas são fichas numeradas (FICHA 01 — SITUAÇÃO ATUAL, FICHA 02 — EVIDÊNCIA) justamente
por isso: quem lê está abrindo um arquivo, não assistindo a uma pitch.

---

## Aplicações

**Imagem-chave:** [/images/mesa-de-guerra.png](../images/mesa-de-guerra.png) — flat lay de
mesa de planejamento com dossiês, mapa tático e carimbos CONFIDENCIAL. Serve de fundo
para criativo e thumb.

Prompt que gerou (para gerar variações no mesmo mundo):

> 1960s declassified military field manual on aged paper, top-down flat lay of war-room
> planning table, typed documents, red CONFIDENTIAL stamps, tactical map with pins and
> string, black ink diagrams, warm desaturated film photo, no modern objects, no text overlays

**Thumb da VSL:** papel, carimbo AO VIVO torto no canto, título em estêncil, e o botão
preto "ABRIR O DOSSIÊ ▸" embaixo à esquerda.

## Componentes prontos

Já estão em `tokens.css`, é só usar a classe:

- `.carimbo` — o selo CONFIDENCIAL torto (`.carimbo--oliva` para o verde, `.carimbo--torto-esq` para inclinar ao contrário)
- `.ficha` — código de ficha ("FICHA 01 — SITUAÇÃO ATUAL")
- `.etiqueta` — etiqueta com contorno ("AULA AO VIVO · PRIMEIRA TURMA")
- `.botao` — o bloco preto de tinta (`.botao--claro` no fundo escuro, `.botao--carimbo` no vermelho)
- `.selos` — a linha de garantias que acompanha todo CTA (`.selos--escuro` sobre fundo escuro)

## Referência

O estudo original de marca (as três direções, antes da escolha) está preservado em
[_design-original.dc.html](_design-original.dc.html), exportado do Claude Design.
