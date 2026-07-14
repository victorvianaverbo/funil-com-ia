---
description: "Monte o retrato do seu cliente ideal: dores, desejos, objeções e linguagem"
---

# Instruções

Você vai ajudar o aluno a construir a persona compradora do produto dele — o retrato detalhado do cliente ideal.

## ESCOPO DESTE WORKFLOW

Este workflow APENAS:
- Conduz o aluno pelos 5 blocos da persona
- Usa a referência `ref-persona` como guia
- Salva o resultado em `produto/persona.md`

Este workflow NÃO:
- Cria a oferta, a copy ou o design
- Executa nenhuma etapa seguinte

## Antes de Começar

1. Leia a skill `ref-persona` (em `.agent/skills/ref-persona/SKILL.md`) para conduzir com os 5 blocos e os exemplos.
2. Se existir `produto/descoberta.md`, leia para reaproveitar o avatar já esboçado. Se não existir, siga mesmo assim com as perguntas.

## Processo

### Fase 1: Coleta (um bloco de cada vez)

Faça as perguntas **uma de cada vez**, aguardando a resposta antes da próxima. Cubra os 5 blocos:

1. **Perfil básico:** "Quem é essa pessoa? Idade, gênero, onde mora, escolaridade e o quanto ela já conhece do seu tema."
2. **Comportamento online:** "Onde ela passa o tempo na internet, como consome conteúdo e o que ela já costuma comprar?"
3. **Objetivos e necessidades:** "O que ela quer alcançar e que tipo de ajuda ela procura?"
4. **Desafios e dores:** "Qual o maior problema dela hoje? O que ela já tentou e não funcionou? O que tira o sono dela?"
5. **Motivações para comprar:** "O que move ela por dentro (sonho/medo) e o que faria ela dizer sim a uma oferta?"

### Fase 2: Linguagem do público

Se o aluno tiver dificuldade, oriente a pesquisar a linguagem real do público em comentários do YouTube, grupos de Facebook, Reddit e reviews de concorrentes. Anote frases exatas que o público usa — elas viram copy depois.

### Fase 3: Consolidação

Peça ao aluno para dar um **nome** à persona e escrever um parágrafo único que a resuma (use o exemplo "João Empreendedor" da `ref-persona` como referência de formato).

## Saída

Salve em `produto/persona.md`:

```markdown
# Persona Compradora

## Nome
...

## 1. Perfil básico
...

## 2. Comportamento online
...

## 3. Objetivos e necessidades
...

## 4. Desafios e dores
Principal dor: ...
Frustrações: ...

## 5. Motivações para comprar
...

## Resumo em uma frase
...

## Linguagem do público (frases reais)
- ...
```

## Ao Finalizar

1. Informe que a persona foi salva
2. Mostre o resumo da persona
3. Pergunte se quer ajustar algo
4. Sugira a próxima etapa: "Com a persona definida, use `/oferta` para montarmos o produto e a escada de valor que falam direto com ela."
5. **PARE COMPLETAMENTE E AGUARDE**

## IMPORTANTE: Regras de Comportamento
- Faça as perguntas uma de cada vez, não em bloco
- NUNCA invente dados sobre o público — extraia do aluno e da pesquisa
- NUNCA avance para a próxima etapa automaticamente
- AGUARDE o usuário digitar o próximo comando explicitamente
