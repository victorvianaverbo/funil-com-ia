---
description: ref-precificacao
---

# Referência: Precificação, Faixas de Preço e Escada de Valor

Base de conhecimento consultável pelos workflows de estratégia (`/bussola`, `/oferta`, `/mapear`). Define as faixas de preço do produto digital, como escolher a faixa certa para o aluno e como qualquer faixa se encaixa numa máquina de vendas que se auto-financia.

---

## O modelo de venda direta

O framework trabalha com **venda direta**: a pessoa clica num botão e compra no checkout. Isso vale em **qualquer faixa de preço** — o que muda é o tipo de página, o orçamento de teste e a expectativa de conversão.

O que muda é o que acontece ANTES do botão, e isso é decidido no `/mapear` (ver `ref-funis`):
- **Perpétuo:** anúncio → página de vendas → checkout.
- **Lançamento pago:** anúncio → página do ingresso → checkout → evento ao vivo → página do produto → checkout.

Única exceção ao checkout: **lançamento pago com ticket alto (R$1.000+)**, em que o fim do evento leva a um formulário de aplicação e a venda fecha numa call.

### Front-end vs back-end
- **Front-end:** o que você vende para quem NUNCA comprou de você. O produto de entrada vive aqui.
- **Back-end:** o que você vende para quem JÁ é cliente. É onde o lucro se multiplica (upsells, degraus maiores da escada, recorrência).

### Desejo vs necessidade
Quase ninguém compra infoproduto por necessidade — compra por desejo. O trabalho da oferta é ligar o produto a um desejo concreto e a uma transformação, não a uma "característica".

### O funil que se auto-alimenta
A lógica central: quanto menor o ticket, mais rápido o caixa gira e re-financia o tráfego; quanto maior o ticket, mais margem cada venda deixa.

- O cliente compra o produto de entrada.
- O valor recebido cobre (ou supera) o custo de aquisição.
- O caixa volta e é reinvestido em mais tráfego.
- Order bumps e upsells aumentam o valor de cada cliente (back-end).

> Em low ticket, o primeiro funil não precisa dar lucro: precisa chegar ao **equilíbrio** (pagar o próprio tráfego) — o lucro mora no back-end. Em ticket médio e alto, o lucro já deve aparecer no front-end, porque cada venda carrega margem maior.

---

## As 3 faixas de preço

### Low ticket (R$27–R$97)
- **Quando escolher:** primeiro produto, pouca ou nenhuma audiência, sem prova social, capital de tráfego pequeno.
- **Mentalidade:** porta de entrada — transforma desconhecidos em clientes ao menor risco possível; gera prova social e caixa rápido; equilíbrio vale mais que lucro imediato.
- **Página:** página de vendas curta e direta.
- **Comportamento de compra:** por impulso, à vista (ninguém parcela R$37); conversão típica de 1% a 3% em tráfego frio; CPA baixo; decisão de teste em poucos dias.

### Ticket médio (R$197–R$997)
- **Quando escolher:** já existe alguma prova social (depoimentos, cases) OU uma promessa muito forte e específica; capital de tráfego moderado.
- **Mentalidade:** o lucro já aparece no front-end; menos volume de vendas, mais qualificação do comprador.
- **Página:** página de vendas longa ou VSL; mais prova social e garantia explícita.
- **Comportamento de compra:** o cliente compara antes de comprar; conversão típica de 0,5% a 1,5%; parcelamento passa a importar; CPA maior; janela de teste de 1 a 2 semanas.

### High ticket (R$1.000+)
- **Quando escolher:** autoridade e prova social fortes, transformação de alto valor demonstrável, capital para sustentar semanas de teste sem retorno imediato.
- **Mentalidade:** poucas vendas valem o mês; cada lead vale caro; confiança pesa mais que urgência.
- **Página:** VSL ou página longa com muita prova, garantia robusta e parcelamento em 12x no checkout.
- **Comportamento de compra:** o cliente pesquisa o vendedor antes de comprar; conversão abaixo de 0,5%; CPA alto — julgue o funil por métricas intermediárias antes da venda.

> Acima de ~R$3.000, quase ninguém compra clicando num botão sem falar com alguém. Por isso, em ticket alto o kit recomenda o **lançamento pago com desfecho em aplicação/call**: a aula ao vivo qualifica e a venda fecha na conversa (ver `ref-funis`). A alternativa — perpétuo com VSL forte e parcelamento — é possível, mas exige CPA alto e teste longo.

Para roteiro de VSL (páginas de ticket médio/alto), existe a skill `vsl-builder` neste kit.

---

## Como escolher a sua faixa

Avalie os 4 ativos do aluno, um por um:

1. **Audiência:** já tem seguidores ou lista que confiam nele? (não → favorece low/médio)
2. **Prova social:** tem depoimentos, cases, resultados demonstráveis? (não → favorece low)
3. **Força da promessa:** a transformação justifica um preço alto de forma crível? (dor cara e urgente → permite subir de faixa)
4. **Capital de tráfego:** quanto pode investir em teste sem retorno imediato? (pouco → low; high ticket exige fôlego para semanas de teste)

**Regra de leitura:** na dúvida entre duas faixas, comece pela menor — subir o preço depois é mais fácil do que descer.

---

## A escada de valor

O cliente não fica parado num degrau — ele sobe. Os funis não são desconectados; formam uma escada:

1. **Lead (gratuito)** → entra com isca digital, e-book, aula gratuita.
2. **Low ticket (R$27–R$97)** → primeira compra de baixo risco.
3. **Ticket médio (R$197–R$997)** → curso/produto principal.
4. **High ticket (R$1.000+)** → mentoria, consultoria, programa premium.
5. **Continuidade (recorrente)** → assinatura, comunidade.

**O seu produto de ENTRADA pode ser qualquer degrau.** A escada continua existindo acima e abaixo dele: degraus abaixo da entrada podem virar downsell; degraus acima viram upsell e ofertas futuras.

Sobre o modelo de funil: a faixa de preço influencia a escolha, mas quem decide é o `/mapear` (ver `ref-funis`). O padrão do kit é o **lançamento pago** em qualquer faixa; o **perpétuo** entra quando o aluno não quer depender de estar ao vivo.

---

## Métricas essenciais

- **CPA (Custo Por Aquisição):** quanto custa fechar uma venda.
- **ACV (Valor Médio do Carrinho):** quanto, em média, cada cliente compra somando produto + order bumps + upsells.

**Regra de leitura:** se o ACV é maior que o CPA, o funil é lucrativo e pode escalar.

### Métricas intermediárias
Quanto maior o ticket, menos vendas por dia — e mais você decide pela saúde do funil olhando métricas intermediárias, antes de ter volume de vendas:

- **CTR** (taxa de cliques do anúncio)
- **Custo por clique**
- **Custo por checkout iniciado** (initiate checkout)

Em low ticket, a venda chega rápido e é o próprio termômetro. Em ticket médio/alto, julgue por essas métricas nas primeiras semanas.

### Exemplos de funil

**Exemplo em low ticket:**
- Produto de entrada: R$37 · Order bump 1: R$19 · Order bump 2: R$12 · Upsell 1: R$197 · Upsell 2: R$397 · Downsell: R$97
- Se CPA = R$44 e ACV = R$207 → lucro de ~R$163 por cliente.

**Exemplo em ticket médio:**
- Produto de entrada: R$497 · Order bump: R$97 · Upsell: R$997
- Se CPA = R$180 e ACV = R$610 → lucro de ~R$430 por cliente, com bem menos vendas por dia que no low ticket.

### Taxas de conversão de referência (médias de mercado)

| Etapa | Taxa |
|---|---|
| Funil de lead (gratuito) | ~20% |
| Funil de lead com confirmação (2 etapas) | ~15% |
| Conversão de venda em funil | 1% a 5% |
| Carta de vendas (tráfego direto — modelo perpétuo) | 1% a 3% |
| Venda do ingresso (lançamento pago) | 1% a 3% |
| Comparecimento ao evento ao vivo, entre quem pagou | 40% a 60% |
| Compra do produto no fim do evento, entre quem compareceu | 5% a 15% |

> No **lançamento pago**, o comparecimento é muito maior do que num webinário gratuito (onde fica na casa dos 10%), justamente porque a pessoa pagou pelo ingresso. É esse o ganho do modelo.

> Use como referência inicial, não como promessa. Cada nicho, faixa de preço e tráfego se comportam diferente — quanto maior o ticket, menor a conversão esperada.

---

## Exemplos de escada por nicho

Cada seta é um degrau da escada. **O produto de entrada pode ser qualquer um deles** — ex.: no nicho de copywriting, entrar direto pelo bootcamp de R$997 é válido se o aluno tem prova social para sustentar.

- **Copywriting:** "Headlines Matadoras" (R$37) → curso de copy (R$197–497) → bootcamp (R$997–1.997) → mentoria (R$3.000+) → comunidade.
- **Empreendedorismo digital:** "Primeiros Passos do Negócio Digital" (R$37) → curso completo (R$297–597) → mentoria em grupo (R$997–2.497) → mastermind (R$5.000+).
- **Redes sociais:** "Instagram: +Engajamento em 7 Dias" (R$37) → curso de algoritmo (R$197–497) → consultoria (R$997–2.997) → grupo de mentoria.
- **Afiliados:** "Primeiros Passos no Marketing de Afiliados" (R$37) → curso avançado (R$197–497) → treino de tráfego (R$997–2.497) → mentoria (R$3.000+).
- **Desenvolvimento pessoal:** "Mindset de Sucesso" (R$37) → curso de transformação (R$197–497) → workshop ao vivo (R$997–2.497) → coaching (R$3.000+).

---

## Como usar esta referência
- `/bussola` → seções "Como escolher a sua faixa" e "As 3 faixas de preço".
- `/oferta` → seções "As 3 faixas de preço", "A escada de valor" e "Exemplos de escada por nicho".
- `/mapear` → seção "Métricas essenciais" para dimensionar o orçamento de teste de tráfego por faixa.
