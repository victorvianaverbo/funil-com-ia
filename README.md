# Funil de Vendas com IA — v2

Framework de agentes que leva o aluno do zero ao produto digital no ar, em modelo de **venda direta** (tráfego pago → página de vendas → checkout), em **qualquer faixa de preço** (low, médio ou alto ticket).

Comece digitando `/inicio`.

## O fluxo

**Fase 1 — Estratégia (só conversa, sem código):**

```
/descoberta → /pesquisa-mercado → /persona → /oferta → /narrativa → /criar-produto
```

Gera os arquivos de estratégia na pasta `produto/` (descoberta, pesquisa, persona, oferta, narrativa, roteiro do produto). Quem já tem produto definido pode começar direto em `/pesquisa-mercado`.

**Fase 2 — Construção e tráfego:**

```
/gerar-copy → /gerar-design → /gerar-layout → /desenvolver → /configurar-tracking → /publicar → /anuncios
```

Constrói a página de vendas (HTML/CSS/JS puro, deploy via Netlify), instala o rastreamento (Meta Pixel / Google Ads) e cria os anúncios (método RMBC).

**Auxiliares:** `/visualizar-local`, `/previsualizar`, `/otimizar`, `/debug`, `/inicio`.

## Skills de referência

Os workflows de estratégia consultam as bases de conhecimento em `.agent/skills/`:

- `ref-precificacao` — as 3 faixas de preço (low R$27–97, médio R$197–997, alto R$1.000+), como escolher a faixa, escada de valor e métricas (CPA/ACV e intermediárias)
- `ref-persona` — os 5 blocos da persona e o perfil de compra por faixa de preço
- `ref-oferta-funil` — promessa, formato, order bump, upsell, downsell (espinha dorsal: venda direta)
- `ref-copy-anuncios` — RMBC, Hook-Story-Offer, objeções, desejos e banco de modelos de copy
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
- **v2 (esta):** framework completo, generalizado de "só low ticket" para qualquer faixa de preço em venda direta. Webinário/lançamento permanecem como caminhos opcionais.
