---
description: "Ligue os botões ao seu link de pagamento e teste a primeira compra de verdade"
---

# Instruções

A página está construída, mas os botões não levam a lugar nenhum. Você vai conectar a página ao checkout real e garantir que a primeira venda pode acontecer.

Esta é a etapa em que a página deixa de ser uma peça bonita e vira uma estrutura que recebe dinheiro. Sem ela, todo o resto foi enfeite.

## ESCOPO DESTE WORKFLOW

Este workflow APENAS:
- Coleta a plataforma e o link de pagamento do produto
- Aponta TODOS os botões de CTA da página para o checkout
- Confere se o order bump e o upsell planejados no `/oferta` estão configurados na plataforma
- Conduz o teste de compra
- Salva o resultado em `produto/checkout.md`

Este workflow NÃO:
- Cria o produto na Hotmart/Kiwify (isso o aluno faz na plataforma; você o guia)
- Instala rastreamento (isso é o `/rastrear`)
- Publica o site (isso é o `/publicar`)
- Executa nenhuma etapa seguinte

## Antes de Começar

1. Leia `produto/funil.md` — ele diz qual é o **desfecho** desta página: link de checkout ou formulário de aplicação.
2. Leia `produto/oferta.md` — o preço, o order bump, o upsell e o downsell planejados saem de lá.
3. Identifique a pasta da página em que você está trabalhando (ex.: `pagina-vendas/`).

**Caso especial — desfecho por aplicação:** se `produto/funil.md` disser que o desfecho é **formulário de aplicação + call** (lançamento pago com ticket alto), esta página não tem link de checkout. Use a skill `forms` para montar o formulário de aplicação, pule as Etapas 1 a 3 e vá direto para a Etapa 5, adaptando o teste (em vez de compra teste, um envio teste do formulário).

## Etapa 1: Coletar o Link

Pergunte ao aluno, **uma de cada vez**:

1. "Em qual plataforma você criou o produto? Hotmart, Kiwify, Eduzz ou outra?"
2. "Me manda o link de pagamento do produto. É o link que abre a tela de compra — na Hotmart, você acha em Produtos > seu produto > Links de divulgação."

**Se o aluno ainda não criou o produto na plataforma**, não siga em frente. Guie ele: explique que precisa criar o produto lá, com o preço definido no `/oferta` (R$ X), e que o link só existe depois disso. Aguarde ele voltar com o link.

## Etapa 2: Conferir o Order Bump e o Upsell

O `/oferta` planejou order bump, upsell e downsell. Eles **não são criados pelo kit** — são configurados dentro da plataforma, e é exatamente aqui que o aluno esquece de fazer isso e deixa dinheiro na mesa.

Leia `produto/oferta.md` e confirme, item a item, o que foi planejado:

- "No `/oferta` a gente planejou um order bump de [X] por R$ [Y]. Você já configurou ele na plataforma?"
- "E o upsell de [Z]? Já está configurado?"
- "E o downsell?"

Para cada um que ainda não estiver pronto, explique em uma frase onde configurar na plataforma dele e o que vai acontecer se ele deixar para depois: o funil sobe sem o que aumentaria o ticket médio sem gastar mais um centavo de tráfego.

Se o aluno preferir subir sem esses elementos por enquanto, tudo bem — registre isso como pendência no arquivo de saída.

## Etapa 3: Ligar os Botões

Encontre **TODOS** os CTAs da página. Eles são links com a classe `btn-primary` (o hero costuma ter um, e existe pelo menos mais um no CTA final; páginas longas costumam ter três ou mais).

Busque no HTML por `btn-primary` e por qualquer `<a>` que funcione como botão de compra. **Não confie na memória: conte quantos existem e trate todos.**

Para cada um:
- Troque o `href` pelo link de pagamento
- Garanta `target="_blank"` e `rel="noopener"`

```html
<a href="LINK_DE_PAGAMENTO" target="_blank" rel="noopener" class="btn-primary">
```

**Nenhum botão pode ficar para trás.** Um CTA morto no meio da página é uma venda perdida sem que ninguém perceba — a pessoa clica, não acontece nada, e vai embora.

## Etapa 4: Validar

Antes de dizer que está pronto:

1. Conte os CTAs no HTML e confirme que **todos** receberam o link. Nenhum `href="#"`, nenhum vazio, nenhum placeholder.
2. Abra a página local (use a skill `local-server`) e **clique em cada botão**. Cada um tem que abrir o checkout, em nova aba.
3. Confira que o checkout que abriu é o produto certo, com o preço certo.

## Etapa 5: O Teste de Compra

Este é o único jeito de saber que a estrutura funciona de verdade.

Oriente o aluno a fazer uma **compra de teste** — a maioria das plataformas tem modo de teste ou cupom de 100%. Ele deve percorrer o caminho inteiro, como se fosse um cliente: clicar no botão, preencher, pagar, e chegar na tela de compra aprovada.

Peça que ele confirme:
- A compra foi **aprovada**
- O e-mail de acesso chegou
- O acesso ao produto funciona

Se qualquer um dos três falhar, o problema está na plataforma, não na página. Ajude ele a identificar onde travou antes de seguir.

## Saída

Salve em `produto/checkout.md`:

```markdown
# Checkout

## Plataforma
Hotmart / Kiwify / Eduzz / outra

## Link de pagamento
...

## Preço
R$ ...

## Elementos configurados na plataforma
- Order bump: configurado / pendente — ...
- Upsell: configurado / pendente — ...
- Downsell: configurado / pendente — ...

## CTAs da página
Quantidade: ...
Todos apontando para o checkout: sim / não

## Teste de compra
Data: ...
Resultado: aprovado / falhou
E-mail de acesso recebido: sim / não

## Pendências
...
```

## Ao Finalizar

1. Informe que o checkout foi conectado e diga **quantos botões** foram ligados
2. Informe o resultado do teste de compra
3. Liste as pendências, se houver (order bump ou upsell não configurados)
4. Sugira o próximo passo: "Com o checkout ligado, use `/rastrear` para instalar o rastreamento e depois `/publicar` para colocar no ar."
5. **PARE COMPLETAMENTE E AGUARDE**

## IMPORTANTE: Regras de Comportamento
- NUNCA invente ou adivinhe um link de pagamento. Se o aluno não tem, ele precisa criar o produto na plataforma primeiro
- NUNCA deixe um CTA sem link. Conte todos antes de confirmar
- NUNCA diga que está pronto sem ter clicado nos botões e visto o checkout abrir
- NUNCA pule o teste de compra — é ele que prova que a estrutura vende
- AGUARDE o comando explícito do usuário
