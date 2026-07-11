---
description: anuncios
---

# Instruções

Você vai ajudar o aluno a criar o primeiro anúncio do produto usando o método RMBC e a estrutura Hook-Story-Offer.

## ESCOPO DESTE WORKFLOW

Este workflow APENAS:
- Define o mecanismo único e o roteiro do anúncio
- Usa a referência `ref-copy-anuncios` (e `ref-precificacao` para orçamento de teste)
- Salva o resultado em `produto/anuncios.md`

Este workflow NÃO:
- Configura plataformas de tráfego nem o pixel (isso é `/configurar-tracking`)
- Executa nenhuma etapa seguinte

## Antes de Começar

Leia a skill `ref-copy-anuncios`. Leia também `produto/persona.md` e `produto/oferta.md` (o anúncio fala com a dor da persona e vende a oferta). Se não existirem, colete o essencial perguntando.

## Processo (uma etapa de cada vez)

### Fase 1: Mechanism (o diferencial)
"R (pesquisa) já fizemos na persona e no mercado. Agora o M: qual é o mecanismo único do seu produto — o 'segredo' que torna sua solução diferente e crível?"

### Fase 2: Brief (o roteiro)
Defina tom de voz e o grau de consciência do público que vai ver o anúncio (frio, morno, quente) — ver os 5 graus em `ref-copy-anuncios`.

### Fase 3: Copy — Hook-Story-Offer
Construa o roteiro de ~60s, uma parte de cada vez:
1. **Gancho (3s):** pergunta/afirmação que bate na maior dor da persona.
2. **Conexão (15s):** quem é o aluno e por que entende o problema.
3. **Oferta (30s):** a oferta enquadrada conforme a faixa de preço: em low ticket, atalho de baixo risco para o primeiro resultado; em ticket médio/alto, investimento justificado pela transformação, com prova e garantia — ver `ref-copy-anuncios`.
4. **CTA (12s):** chamada clara para clicar e comprar.

Lembre o aluno de quebrar as **3 objeções** (não é para mim / não dou conta / forças externas) e de conectar a um dos **5 desejos**.

### Fase 4: Variações de gancho
Oriente a criar 3 a 5 ganchos diferentes mantendo o mesmo corpo, para testar qual prende mais atenção.

### Fase 5: Orçamento de teste (por faixa de preço)
Explique a regra conforme a faixa do produto — ver `ref-precificacao` (CPA/ACV e métricas intermediárias):

- **Low ticket:** orçamento diário próximo ao valor do produto; meta é o equilíbrio (ACV >= CPA); decisão em poucos dias.
- **Ticket médio:** orçamento diário de ~30–50% do ticket; espere menos conversões por dia; janela de teste de 1 a 2 semanas; acompanhe o custo por checkout iniciado além do CPA.
- **High ticket:** CPA esperado alto (centenas de reais); a campanha pode passar dias sem venda e ainda estar saudável — decida por métricas intermediárias (CTR, custo por clique, custo por checkout iniciado) antes de julgar pela venda; janela de teste de 2 a 4 semanas; só entre se o aluno tiver capital para sustentá-la.

Regra geral para todas as faixas: buscar o **equilíbrio** (ACV >= CPA) antes de escalar.

## Saída

Salve em `produto/anuncios.md`:

```markdown
# Anúncios (RMBC)

## Mecanismo único
...

## Público / grau de consciência
...

## Roteiro principal (Hook-Story-Offer)
- Gancho (3s): ...
- Conexão (15s): ...
- Oferta (30s): ...
- CTA (12s): ...

## Variações de gancho
1. ...
2. ...
3. ...

## Plano de teste
Faixa de preço: low / médio / alto
Orçamento diário: R$ ...
CPA-alvo: R$ ...
Métrica intermediária de controle: ...
Janela de teste: ... dias
Métrica-alvo: equilíbrio (ACV >= CPA)
```

## Ao Finalizar

1. Informe que os anúncios foram salvos
2. Mostre o roteiro principal
3. Pergunte se quer ajustar algo
4. Se o tracking ainda NÃO estiver instalado na página, sugira: "Para rastrear conversões dos anúncios, use `/configurar-tracking`."
5. Se o funil estiver completo (página no ar + tracking instalado), informe que o funil está pronto e oriente o pós-lançamento: subir os anúncios no Gerenciador, acompanhar as métricas (CPA vs ACV, conforme a skill `ref-precificacao`) e voltar aqui para ajustar copy e anúncios com base nos resultados
6. **PARE COMPLETAMENTE E AGUARDE**

## IMPORTANTE: Regras de Comportamento
- Uma etapa de cada vez
- O gancho é o que mais importa — capriche e gere variações
- NUNCA avance automaticamente
- AGUARDE o comando explícito do usuário
