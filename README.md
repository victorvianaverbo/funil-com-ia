# Funil de Vendas com IA — v2

Framework de agentes que leva o aluno do zero ao produto digital no ar, em modelo de **venda direta** (tráfego pago → página de vendas → checkout), em **qualquer faixa de preço** (low, médio ou alto ticket).

O kit constrói **dois modelos de funil**, e o `/mapear` escolhe qual:

- **Lançamento pago** (o padrão) — anúncio → página do ingresso → checkout → aula ao vivo → página do produto → checkout. O ingresso liquida o tráfego e você junta uma lista de compradores.
- **Perpétuo** — anúncio → página de vendas → checkout. Venda contínua, sem data e sem ao vivo.

Funis que exigem página de captura e sequência de e-mail (lançamento de 3 aulas, semente, desafio, isca digital) estão fora do escopo.

Comece digitando `/comecar`.

## O fluxo

**Fase 1 — Estratégia (só conversa, sem código):**

```
/bussola → /espionar → /persona → /oferta → /posicionar → /criar-produto → /mapear
```

Gera os arquivos de estratégia na pasta `produto/` (descoberta, pesquisa, persona, oferta, narrativa, roteiro do produto, funil). Quem já tem produto definido pode começar direto em `/espionar`.

O `/mapear` fecha a estratégia: é ele que define **quantas páginas** a Fase 2 vai construir e **para onde o botão aponta**.

**Fase 2 — Construção:**

```
/escrever → /design → /layout → /construir → /checkout → /rastrear → /publicar
```

Constrói a página de vendas (HTML/CSS/JS puro, deploy via Netlify), liga os botões ao checkout real e instala o rastreamento (Meta Pixel / Google Ads). No **lançamento pago**, esta fase roda duas vezes: uma para a página do ingresso, outra para a do produto.

**Auxiliares:** `/espiar`, `/ensaiar`, `/otimizar`, `/consertar`, `/comecar`.

## Skills de referência

Os workflows de estratégia consultam as bases de conhecimento em `.agent/skills/`:

- `ref-precificacao` — as 3 faixas de preço (low R$27–97, médio R$197–997, alto R$1.000+), como escolher a faixa, escada de valor e métricas (CPA/ACV e intermediárias)
- `ref-persona` — os 5 blocos da persona e o perfil de compra por faixa de preço
- `ref-oferta-funil` — promessa, formato, order bump, upsell, downsell
- `ref-funis` — os dois modelos de funil que o kit constrói (lançamento pago e perpétuo), a matriz modelo × faixa de preço, e os funis do mercado que o kit **não** constrói
- `ref-copy-anuncios` — RMBC, objeções, desejos e banco de modelos de copy (alimenta o `/escrever`)
- `vsl-builder` — roteiros de VSL para páginas de ticket médio/alto

Skills técnicas: `creative-reference` (design), `deploy`, `forms`, `local-server`, `optimize`, `tracking`.

## Estrutura do projeto

```
v2/
├── produto/           ← gerado pela Fase 1 (estratégia)
├── <nome-da-pagina>/  ← uma pasta por página; versão ativa na raiz, antigas em _backup_vN/
└── .agent/            ← o framework (rules, skills, workflows)
```

## Histórico

- **v1:** versão antiga — só a parte técnica de construção de páginas, sem a camada de estratégia.
- **v2:** framework completo, generalizado de "só low ticket" para qualquer faixa de preço em venda direta.
- **v3 (esta):** entram os agentes `/mapear` (escolhe o modelo: lançamento pago ou perpétuo) e `/checkout` (liga os botões da página ao link de pagamento e conduz o teste de compra). O lançamento pago passa a ser o modelo padrão do kit.
