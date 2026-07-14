---
description: ref-funis
---

# Referência: Modelos de Funil

O mapa dos funis de venda do mercado digital, e qual deles este kit constrói. Consultada pelo workflow `/mapear`.

Existe uma separação rígida nesta referência, e ela não pode ser quebrada:

- **Seções 2 e 3** — os DOIS modelos que o kit constrói. São os únicos que o `/mapear` pode recomendar.
- **Seção 5** — funis que existem no mercado, funcionam, e o kit NÃO constrói. Estão aqui para o aluno entender o terreno e saber por que a recomendação dele é a que é. NUNCA recomende um deles.

---

## 1. Dois modelos, e uma única exceção

Quase todo funil deste kit termina do mesmo jeito: **a pessoa clica num botão e compra no checkout.**

O que muda entre os dois modelos não é o destino — é o que convence a pessoa antes do botão:

| | O que convence a pessoa a comprar |
|---|---|
| **Lançamento pago** | Um evento ao vivo, para o qual ela pagou um ingresso |
| **Perpétuo** | A própria página de vendas (VSL ou copy longa) |

**A única exceção é o lançamento pago com produto de ticket alto (R$1.000+).** Aí o botão do fim do evento não leva ao checkout: leva a um **formulário de aplicação**, e a venda fecha numa call. Em todos os outros cinco casos, o destino é o checkout.

Escolher o modelo é decisão de estratégia, não de tecnologia: ela define quantas páginas você vai construir e o que cada uma diz. Escolher depois de construir é a origem do retrabalho — por isso o `/mapear` roda no fim da estratégia, antes de qualquer linha de código.

---

## 2. Lançamento pago (evento pago) — O PADRÃO

```
Anúncio → Página de vendas do ingresso (R$19–97) → Checkout →
Evento ao vivo (1 a 3 aulas) → Oferta do produto no fim do evento →
Página de vendas do produto → Checkout (ou aplicação/call, se ticket alto)
```

Você vende um ingresso barato para um evento ao vivo. No fim do evento, oferece o produto principal.

**Por que é o padrão deste kit:**

1. **O ingresso liquida o tráfego.** A venda do ingresso paga (total ou parcialmente) a verba de anúncio. Você não fica no vermelho esperando a venda acontecer.
2. **Você junta uma lista de COMPRADORES, não de curiosos.** Quem paga R$ 27 para assistir uma aula tem intenção real. Lista de e-mail grátis está cheia de gente que nunca vai comprar nada.
3. **O evento ao vivo faz a venda que a página sozinha não faria.** Ele constrói confiança, quebra objeção em tempo real e sustenta ticket maior.
4. **São duas vendas diretas em sequência** — exatamente o que este kit constrói. Nenhuma peça nova é necessária.

**Funciona em qualquer faixa de preço.** Em low e médio ticket, o fim do evento manda direto para o checkout. Em **ticket alto (R$1.000+)**, manda para um formulário de aplicação e a venda fecha numa call — nessa faixa, o evento serve para qualificar e encher a agenda, não para fechar no botão.

**Quando NÃO usar:** quando o aluno não pode ou não quer aparecer ao vivo. Aí vá para o perpétuo.

**Como o kit monta:** rode a cadeia de construção duas vezes — uma para a página do ingresso, outra para a página do produto. Em ticket alto, a segunda página termina em formulário de aplicação (use a skill `forms`) em vez de link de checkout. O evento em si acontece em Zoom, YouTube ao vivo ou similar; o kit não monta a sala.

---

## 3. Perpétuo (tráfego direto)

```
Anúncio → Página de vendas (VSL ou copy longa) → Checkout (com order bump) → Upsell → (Downsell)
```

Venda contínua, sem data e sem evento. Os anúncios ficam ligados e a página vende sozinha, todo dia.

**Quando usar:** o aluno quer escala contínua, não quer depender de estar ao vivo, ou já validou a oferta e quer transformá-la em máquina.

**O peso está todo na página.** Sem evento, ela faz sozinha todo o trabalho de convencimento. Quanto maior o ticket, mais longa e mais provada ela precisa ser.

**Como o kit monta:** uma página de vendas.

---

## 4. A matriz: modelo × faixa de preço

Seis combinações possíveis. Cinco terminam em checkout; só uma termina em call. O que muda é o peso da página, a verba e o que esperar.

### Lançamento pago

| Faixa | Como fica | Destino do botão |
|---|---|---|
| **Low (R$27–97)** | Ingresso barato → evento → produto. O caminho mais curto e mais barato de testar. A página do produto pode ser enxuta: o evento já vendeu. | Checkout |
| **Médio (R$197–997)** | Mesmo caminho. A página do produto reforça o que o evento prometeu: garantia, prova, quebra de objeção. | Checkout |
| **Alto (R$1.000+)** | Mesmo caminho, mas o evento **qualifica** em vez de fechar. Quem se interessa se candidata, e a venda acontece na conversa. A segunda página é de aplicação, não de vendas. | Formulário de aplicação → call |

### Perpétuo (tráfego direto)

Nas três faixas, o botão leva ao **checkout**.

| Faixa | Como fica |
|---|---|
| **Low (R$27–97)** | Página direta ao ponto. Aqui o order bump e o upsell são o que fazem o funil pagar o próprio tráfego — o produto de entrada não precisa dar lucro, precisa gerar cliente barato. Ver `ref-oferta-funil`. |
| **Médio (R$197–997)** | Página mais longa, com prova social e quebra de objeção. Costuma pedir VSL. |
| **Alto (R$1.000+)** | O caso mais difícil: a página tem que fazer sozinha o trabalho que um evento faria. Exige VSL forte, prova pesada, garantia robusta e verba de teste maior. **Na dúvida, prefira o lançamento pago nesta faixa.** |

---

## 5. Funis que este kit NÃO constrói

Todos funcionam no mercado. Nenhum é recomendável AQUI, porque exigem peças que a cadeia de construção não tem: **página de captura, sequência de e-mails, área de aluno ou automação de nutrição**.

Ao explicar qualquer um deles, diga o que é, quando faz sentido, e feche com a verdade: *"este kit não monta captura nem e-mail, então não é o caminho aqui."*

**Lançamento clássico (interno) — o "3 aulas".**
Página de captura → sequência de aquecimento → 3 aulas gratuitas (CPLs) → carrinho aberto por 5 a 7 dias → fechamento. O modelo mais conhecido do mercado brasileiro. Fatura alto, mas depende de lista, de e-mail e de muita produção — e todo o tráfego é custo puro até o carrinho abrir.

**Lançamento semente.**
Lista pequena, aulas ao vivo, produto ainda não existe: você vende primeiro e produz depois. Bom para validar antes de investir, mas depende de já ter audiência própria.

**Lançamento externo.**
Afiliados e parceiros trazem a lista para o seu lançamento. Depende inteiramente de relacionamento com quem já tem audiência.

**Webinário perpétuo (evergreen).**
Inscrição gratuita → webinário automatizado → oferta. Exige captura e automação.

**Desafio (challenge) de 5 dias.**
Inscrição → tarefas diárias por e-mail ou WhatsApp → oferta no fim. Exige captura e sequência.

**Isca digital (lead magnet).**
Material grátis → captura de e-mail → nutrição → oferta. É a base de vários dos outros. Exige captura e e-mail.

> Nota: **funil de aplicação/call**, sozinho, também não é um modelo deste kit. Ele existe aqui só como o desfecho do lançamento pago em ticket alto (seção 2) — nunca como um funil frio, sem evento antes.

---

## 6. Como recomendar (a lógica do `/mapear`)

Três perguntas decidem, nesta ordem:

1. **O aluno topa fazer um evento ao vivo?**
2. **Qual a faixa de preço do produto?** (vem de `produto/oferta.md`)
3. **Ele tem verba de tráfego para testar?**

A decisão:

- **Padrão, na maioria dos casos → Lançamento pago.** É o default deste kit, em qualquer faixa de preço.
- **Não quer ou não pode ficar ao vivo, ou quer venda contínua sem data → Perpétuo.**
- **Ticket alto e o aluno hesita entre os dois → Lançamento pago.** No perpétuo, a página teria que fazer sozinha o trabalho que o evento faz.
- **Ticket alto no lançamento pago → o desfecho é aplicação/call**, não checkout. Registre isso: muda a segunda página que a Fase 2 vai construir.

**Regra:** sempre explique por que descartou o outro modelo. O aluno precisa entender a escolha, não só recebê-la.

---

## Como usar esta referência
- `/mapear` → mapear o terreno, recomendar o modelo e salvar `produto/funil.md`.
- Cruza com `ref-precificacao` (a faixa de preço muda o peso da página) e `ref-oferta-funil` (order bump, upsell e downsell entram dentro do modelo escolhido).
- O modelo escolhido determina **quantas páginas** a Fase 2 vai construir: lançamento pago = duas (ingresso + produto), perpétuo = uma.
- O desfecho escolhido aqui é o que o `/checkout` vai ligar no botão: link de pagamento ou formulário de aplicação.
