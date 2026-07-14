---
description: "Escolha como você vai vender: aula ao vivo com ingresso ou anúncio direto para a página"
---

# Instruções

Você vai ajudar o aluno a escolher com qual modelo de funil ele vai lançar o produto: lançamento pago (evento pago) ou perpétuo (tráfego direto).

Esta é a última etapa da estratégia. Ela define **quantas páginas** a Fase 2 vai construir e **para onde o botão de compra vai apontar** — por isso ela acontece antes de qualquer linha de código.

## ESCOPO DESTE WORKFLOW

Este workflow APENAS:
- Explica os modelos de funil que existem no mercado
- Recomenda o modelo certo para o produto e a faixa de preço do aluno
- Define quantas páginas serão construídas e qual o desfecho de cada uma
- Usa as referências `ref-funis` e `ref-precificacao`
- Salva o resultado em `produto/funil.md`

Este workflow NÃO:
- Escreve copy, cria design nem constrói página
- Configura checkout (isso é o `/checkout`, na Fase 2)
- Executa nenhuma etapa seguinte

## Antes de Começar

1. Leia a skill `ref-funis` INTEIRA. Ela é a base de tudo aqui.
2. Leia `produto/oferta.md` (a faixa de preço e o preço exato saem de lá) e `produto/persona.md`. Se não existirem, colete o essencial perguntando.
3. Fixe a regra que governa este workflow: **você só pode recomendar os dois modelos que o kit constrói** — lançamento pago e perpétuo. Os outros funis do mercado (lançamento de 3 aulas, semente, desafio, isca digital) você EXPLICA se o aluno perguntar, mas NUNCA recomenda, porque o kit não monta página de captura nem sequência de e-mail. Recomendar o que não se entrega é largar o aluno na parte difícil.

## Processo (uma etapa de cada vez)

### Fase 1: Mostrar o terreno

Antes de perguntar qualquer coisa, explique em poucas linhas os dois caminhos possíveis, sem jargão:

- **Lançamento pago:** "Você vende um ingresso barato para uma aula ao vivo. Quem entra, entra porque pagou — então é gente de verdade, interessada. No fim da aula, você oferece o seu produto."
- **Perpétuo:** "Seu anúncio leva direto para uma página que vende sozinha, todo dia, sem você precisar aparecer ao vivo."

Diga também, com todas as letras, que existem outros modelos famosos no mercado (o lançamento de 3 aulas, o semente, o desafio) e que **este kit não monta esses** — eles precisam de página de captura e sequência de e-mail, que não fazem parte da cadeia. Melhor o aluno saber disso agora do que descobrir no meio do caminho.

### Fase 2: As três perguntas

Faça **uma de cada vez**:

1. "Você topa fazer uma aula ao vivo para vender o seu produto? Pode ser uma aula só, de uma ou duas horas."
2. Confirme a faixa de preço vinda de `produto/oferta.md`: "Seu produto está em R$ X, na faixa [low/médio/alto]. Confirma?"
3. "Quanto você consegue investir em anúncio para testar, sem depender do retorno imediato?"

### Fase 3: A recomendação

Use a lógica da seção 6 da `ref-funis`:

- **Padrão, na maioria dos casos → lançamento pago.** O ingresso paga o tráfego e você termina com uma lista de compradores, não de curiosos.
- **Não quer ou não pode ficar ao vivo, ou quer venda contínua sem data → perpétuo.**
- **Ticket alto e o aluno hesita → lançamento pago.** No perpétuo, a página teria que fazer sozinha o trabalho que o evento faz.

Apresente a recomendação assim:
1. Qual modelo, e **por quê** — ligando à faixa de preço e à resposta sobre o ao vivo.
2. **Por que você descartou o outro.** Isto não é opcional. O aluno precisa entender a escolha, não só recebê-la.
3. O desenho do funil, desenhado passo a passo, com o preço real dele nos lugares certos.

### Fase 4: O desfecho (para onde o botão aponta)

Aqui mora a única exceção do kit, e ela precisa ficar registrada:

- **Lançamento pago com ticket low ou médio, e perpétuo em qualquer faixa** → o botão leva ao **checkout**.
- **Lançamento pago com ticket alto (R$1.000+)** → o botão do fim do evento leva a um **formulário de aplicação**, e a venda fecha numa call. Explique: "Acima de mil reais, quase ninguém compra clicando num botão sem falar com alguém. A aula ao vivo serve para qualificar e encher a sua agenda — a venda fecha na conversa."

### Fase 5: Quantas páginas

Feche dizendo, em português claro, o que a Fase 2 vai construir:

- **Lançamento pago:** duas páginas. A do ingresso (que a gente constrói primeiro) e a do produto (depois do evento). "A gente roda a mesma sequência de construção duas vezes."
- **Perpétuo:** uma página só.

Deixe claro que a **sala do evento** (Zoom, YouTube ao vivo) não é montada pelo kit — o kit monta as páginas, o checkout e os anúncios.

## Saída

Salve em `produto/funil.md`:

```markdown
# Modelo de Funil

## Modelo escolhido
Lançamento pago (evento pago) / Perpétuo (tráfego direto)

## Por quê
...

## Por que o outro modelo foi descartado
...

## Desenho do funil
Anúncio → ... → ...

## Faixa de preço do produto
Faixa: low / médio / alto — R$ ...

## Desfecho (destino do botão)
Checkout / Formulário de aplicação + call

## Páginas a construir na Fase 2
1. ...
2. ...

## Observações
...
```

## Ao Finalizar

1. Informe que o modelo de funil foi salvo
2. Mostre o desenho do funil e quantas páginas serão construídas
3. Pergunte se quer ajustar algo
4. Sugira a próxima etapa: "Com o funil definido, use `/escrever` para começar a construir a primeira página."
5. **PARE COMPLETAMENTE E AGUARDE**

## IMPORTANTE: Regras de Comportamento
- Faça as perguntas uma de cada vez
- NUNCA recomende um funil que o kit não constrói, mesmo que o aluno insista. Explique o modelo, explique por que o kit não monta, e traga ele de volta para os dois caminhos possíveis
- SEMPRE explique por que descartou o outro modelo
- Na dúvida entre lançamento pago e perpétuo, fique com o lançamento pago
- NUNCA avance automaticamente
- AGUARDE o comando explícito do usuário
