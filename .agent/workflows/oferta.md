---
description: oferta
---

# Instruções

Você vai ajudar o aluno a transformar a persona e a transformação num produto vendável e numa estrutura de funil (oferta principal, order bump, upsell, downsell).

## ESCOPO DESTE WORKFLOW

Este workflow APENAS:
- Define a grande promessa, o formato e a estrutura do produto
- Planeja a escada de valor e os elementos de funil
- Usa as referências `ref-oferta-funil` e `ref-precificacao`
- Salva o resultado em `produto/oferta.md`

Este workflow NÃO:
- Escreve a copy da página nem constrói nada
- Executa nenhuma etapa seguinte

## Antes de Começar

1. Leia as skills `ref-oferta-funil` e `ref-precificacao`.
2. Leia `produto/persona.md`, `produto/descoberta.md` e `produto/pesquisa-mercado.md` se existirem (a oferta tem que falar com a dor da persona; a "faixa de preço sugerida" da pesquisa alimenta o preço). Se não existirem, colete o essencial perguntando.

## Processo (uma etapa de cada vez)

### Fase 1: A grande promessa
"Com base na maior dor da sua persona, qual é a GRANDE PROMESSA do seu produto? Algo específico e desejável — ex.: 'criar suas 3 primeiras headlines matadoras em 24 horas'."
- Ajude a deixar concreta e a propor mudança (não só melhoria).

### Fase 2: O método com nome próprio
"Vamos dar um nome ao seu passo a passo? Um método nomeado diferencia você e gruda na memória."

### Fase 3: O formato
"Qual formato entrega essa promessa de forma rápida e que você consegue produzir? E-book, mini-curso (3–5 aulas), desafio de X dias, ou kit de templates?"

### Fase 4: A estrutura do conteúdo
"Vamos quebrar a entrega em 3 a 5 passos/módulos numa jornada lógica. Quais seriam?"

### Fase 5: O preço e a escada de valor
- Confirme a faixa de preço escolhida em `/descoberta` (ou escolha agora com `ref-precificacao`, seção "Como escolher a sua faixa"), cruzando com a faixa sugerida pela pesquisa de mercado.
- Defina o preço exato dentro da faixa: low ticket R$27–97 / ticket médio R$197–997 / high ticket R$1.000+.
- Esboce a escada de valor completa e marque qual degrau é o produto de ENTRADA — pode ser qualquer um. Degraus abaixo da entrada podem virar downsell; degraus acima, upsell e ofertas futuras — ver `ref-precificacao`.

### Fase 6: Order bump, upsell e downsell
- **Order bump:** "Que item complementar (em torno de 10–30% do valor do produto) dá para adicionar com um clique no checkout?"
- **Upsell:** "Qual é o próximo passo lógico, de maior valor, para quem comprou?" (No iafunil, o webinário é o upsell — cite como exemplo opcional quando fizer sentido.)
- **Downsell:** "Qual alternativa mais barata oferecer a quem recusar o upsell?"

### Fase 7: Lançamento (opcional — visão geral)
O caminho principal é a venda direta contínua (anúncios sempre ligados). Se o aluno quiser um evento de lançamento como reforço, explique brevemente o cronograma (pré-lançamento, lançamento, pós) e a sequência de e-mails base — ver `ref-oferta-funil`, seção 6.

## Saída

Salve em `produto/oferta.md`:

```markdown
# Oferta e Funil

## Grande promessa
...

## Método (nome próprio)
...

## Formato
...

## Estrutura do conteúdo
1. ...
2. ...
3. ...

## Preço de entrada
Faixa: low / médio / alto
R$ ...

## Escada de valor
(marque o degrau de ENTRADA)
- Low ticket: ...
- Ticket médio: ...
- High ticket: ...
- Recorrência: ...

## Funil
- Order bump: ...
- Upsell: ...
- Downsell: ...

## Lançamento (opcional)
...
```

## Ao Finalizar

1. Informe que a oferta foi salva
2. Mostre o resumo da oferta e da escada de valor
3. Pergunte se quer ajustar algo
4. Sugira a próxima etapa: "Com a oferta pronta, use `/narrativa` para definir a big idea, ou `/criar-produto` para produzir o conteúdo."
5. **PARE COMPLETAMENTE E AGUARDE**

## IMPORTANTE: Regras de Comportamento
- Faça as perguntas uma de cada vez
- A promessa SEMPRE deve falar com a dor da persona
- NUNCA avance automaticamente
- AGUARDE o comando explícito do usuário
