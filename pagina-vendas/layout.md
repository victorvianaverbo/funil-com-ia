# Especificação de Layout - Funil de Vendas com IA - Evento

Este documento detalha o design, estrutura e comportamento interativo de todas as seções da landing page do evento. Serve como guia absoluto de implementação para garantir alto valor estético, performance otimizada e fidelidade ao direcionamento criativo.

---

## Seção 1: Hero (Apresentação Principal)

### Arquetipo e Constraints
- **Arquetipo**: Split Assimétrico (60/40) — Foco visual esquerdo no conteúdo textual e chamada de ação imediata; lado direito reservado para o dashboard simulando a inteligência artificial em tempo real.
- **Constraints**: 
  - *Gradiente Mesh* (Cor): Mesh gradient no background.
  - *Mixed Weights* (Tipografia): Headline com contrastes de peso (bold 800 vs. light 300).
  - *Glassmorphism* (Efeitos): Card do dashboard com blur extremo.
  - *Hover Lift & Glow* (Interação): Botão de inscrição e dashboard interagindo no hover.
- **Justificativa**: Esta combinação traz um visual tecnológico refinado e futurista logo na primeira dobra (hero), o que aumenta a percepção de valor do produto digital de IA.

### Conteúdo
- **Pretitle**: "Aceleração com Inteligência Artificial"
- **Headline**: "Coloque seu produto digital no ar em apenas duas horas"
- **Subheadline**: "Aprenda a usar inteligência artificial para construir seu funil de vendas completo e começar a vender imediatamente, sem precisar entender de programação ou design."
- **CTA**: "Garantir meu ingresso agora"

### Layout
- **Estrutura**: Grid bidimensional com `display: grid; grid-template-columns: 1.3fr 0.9fr; gap: 80px; align-items: center;`.
- **Dimensões**: Altura mínima de `min-height: 100vh;`. Padding vertical de `160px` no topo e `80px` na base.
- **Limites**: Largura máxima do container de `max-width: 1200px` centralizado com `margin: 0 auto`.

### Tipografia
- **Pretitle**: `font-family: var(--font-body); font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.2em; color: var(--accent-cyan);`
- **Headline**: `font-family: var(--font-heading); font-size: clamp(2.8rem, 5.5vw, 4.5rem); font-weight: 800; line-height: 1.05; letter-spacing: -0.03em;`
- **Subheadline**: `font-family: var(--font-body); font-size: clamp(1.05rem, 2vw, 1.25rem); line-height: 1.6; color: var(--text-secondary); max-width: 580px;`
- **CTA Text**: `font-family: var(--font-body); font-weight: 600; font-size: 1rem;`

### Cores
- **Fundo da Seção**: `#030014` com orbs de mesh gradiente.
- **Headline**: Degradê linear `linear-gradient(135deg, #f8fafc 30%, #a5b4fc 100%)`.
- **Destaque ("apenas duas horas")**: Degradê linear `linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)`.
- **Botão CTA**: Background `linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)`, cor do texto `#000000`. Hover com box-shadow de `0 10px 30px rgba(0, 242, 254, 0.3)`.

### Elementos Visuais
- **Orbs do Mesh Gradient**:
  - Orb 1 (Roxo): `width: 600px; height: 600px; background: #7000ff; filter: blur(120px); opacity: 0.15; top: -200px; left: -100px;`
  - Orb 2 (Azul): `width: 500px; height: 500px; background: #4facfe; filter: blur(120px); opacity: 0.15; top: 200px; right: -100px;`
- **Dashboard Card**: Card de `width: 100%; max-width: 440px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); backdrop-filter: blur(20px); border-radius: 20px;`.
- **Status Dot**: Ponto verde `#00ff87` com animação pulsar.

### Animações
- **Carregamento (Instântaneo/Sem AOS)**: O Hero não utiliza AOS para evitar CLS e atraso na visualização.
- **Animações de Loop**:
  - Pulse Dot: Animação CSS `@keyframes pulse { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 255, 135, 0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(0, 255, 135, 0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 255, 135, 0); } }` rodando continuamente (2s loop).
  - Progress Fill: Animação CSS `@keyframes fillProgress { 0% { width: 50%; } 100% { width: 85%; } }` rodando continuamente (4s loop alternado).
  - Spin Icon: Animação de rotação linear infinita (3s) no ícone de deploy.

### Interatividade
- **CTA Hover**: `transform: translateY(-3px); box-shadow: 0 10px 30px rgba(0, 242, 254, 0.3); transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);`.
- **Dashboard Hover**: `transform: translateY(-5px) rotate(1deg); border-color: rgba(0, 242, 254, 0.25); box-shadow: 0 30px 60px rgba(0, 242, 254, 0.08);`.

### Responsividade
- **Breakpoint 1024px**: A estrutura passa de grid bilateral para coluna única `grid-template-columns: 1fr; text-align: center; gap: 60px;`. O conteúdo textual e o dashboard são alinhados centralizados horizontalmente.
- **Breakpoint 768px**: Altura do hero reduzida para se adaptar à tela móvel (`padding-top: 120px; padding-bottom: 80px;`). A headline reduz seu tamanho proporcionalmente através da função `clamp()`.

---

## Seção 2: O Problema (A Dor do Público)

### Arquetipo e Constraints
- **Arquetipo**: Bento Box Grid — Três blocos assimétricos distribuindo as dores do produtor digital (técnica, design e copy).
- **Constraints**: 
  - *Asymmetric Padding* (Layout): Bento box com paddings laterais e verticais variados.
  - *Glassmorphism* (Efeitos): Fundo do Bento Box com vidro fosco de alta reflexão.
  - *Hover Lift* (Interação): Cards que sobem sutilmente ao receber o mouse.
- **Justificativa**: Evita a tradicional lista de problemas com bullets chatos. Em vez disso, categoriza os pontos fracos de forma visualmente rica e de fácil escaneamento.

### Conteúdo
- **Seção Tag**: "O Obstáculo"
- **Título**: "Por que você ainda não começou a vender o seu produto digital?"
- **Card 1 (A Barreira Técnica)**: "Configuração de servidores, DNS, hospedagem e integrações complexas. A burocracia técnica costuma matar as melhores ideias antes do primeiro visitante acessar o site."
- **Card 2 (O Desafio do Design)**: "Sua página precisa passar credibilidade imediata. Um layout genérico, desalinhado ou mal planejado afasta potenciais clientes e destrói sua taxa de conversão em segundos."
- **Card 3 (Acelerador de Dor)**: "O tempo passa e o seu projeto continua apenas no papel. Você não precisa de meses de trabalho ou de investir milhares de reais em agências de tecnologia. Você só precisa da inteligência artificial trabalhando da forma correta para você."

### Layout
- **Estrutura**: Grid de 3 colunas `display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;`.
- **Card 1 (Técnica)**: `grid-column: span 1;`
- **Card 2 (Design)**: `grid-column: span 2;` (Layout interno dividido em 50/50 com flexbox).
- **Card 3 (Acelerador)**: `grid-column: span 3;` (Layout horizontal centralizado).
- **Dimensões**: Padding vertical de `120px 20px`.

### Tipografia
- **Título**: `font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; line-height: 1.15; text-align: center;`
- **Card Heading**: `font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; margin-bottom: 16px;`
- **Card Text**: `font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);`
- **Card 3 Text (Lead)**: `font-size: clamp(1.15rem, 2vw, 1.45rem); font-weight: 500; line-height: 1.5; color: var(--text-primary);`
- **Card 3 Highlight**: `font-family: var(--font-heading); font-size: clamp(1.35rem, 2.5vw, 1.8rem); font-weight: 700;`

### Cores
- **Borders**: `border: 1px solid rgba(255, 255, 255, 0.08)`.
- **Card 3 Gradient**: Background linear `linear-gradient(90deg, rgba(3,0,20,1) 0%, rgba(112,0,255,0.06) 50%, rgba(0,242,254,0.03) 100%)`.
- **Card 3 Highlight Text**: Gradiente `linear-gradient(135deg, #00f2fe 0%, #00ff87 100%)`.

### Elementos Visuais
- **Wireframe Mockup (Card 2)**: Container simulando layout de desenvolvimento com bordas tracejadas.
  - Linhas de wireframe com gradiente cinza-translúcido (`rgba(255, 255, 255, 0.05)`).
  - Bloco em evidência com gradiente cyan suave (`rgba(0, 242, 254, 0.03)`).

### Animações
- **Scroll Reveal**: Utiliza `data-aos="fade-up"` com atraso progressivo:
  - Título principal: `data-aos-delay="0"`
  - Card 1: `data-aos-delay="100"`
  - Card 2: `data-aos-delay="200"`
  - Card 3: `data-aos-delay="300"`

### Interatividade
- **Hover nos Cards**: `transform: translateY(-5px); border-color: rgba(0, 242, 254, 0.25); box-shadow: 0 20px 40px rgba(0, 242, 254, 0.03); transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);`.

### Responsividade
- **Breakpoint 1024px**: Grid passa a `grid-template-columns: 1fr;`. Todos os cards passam para `grid-column: span 3;`. O layout dividido do Card 2 muda para coluna única empilhada.
- **Breakpoint 768px**: Padding reduzido para `80px 20px`. Redução no tamanho das fontes de lead do Bento Box.

---

## Seção 3: A Solução (A Proposta do Evento)

### Arquetipo e Constraints
- **Arquetipo**: Split Vertical (50/50) — Uma dobra dividida igualmente entre o grande argumento da transformação na esquerda e um mockup visual interativo da "máquina de páginas" na direita.
- **Constraints**: 
  - *Diagonal Divider* (Layout): Transição entre as seções feita com corte diagonal angulado.
  - *Selective Color* (Cor): Tons monocromáticos escuros com apenas um elemento gráfico em verde-neon brilhante para atrair o olho.
  - *Scale In* (Movimento): O mockup visual cresce ligeiramente ao entrar em tela.
- **Justificativa**: O split 50/50 clássico ajuda a digerir a promessa principal do evento com peso visual igual entre texto e imagem demonstrativa.

### Conteúdo
- **Título**: "O método prático para tirar seu projeto do papel ainda hoje"
- **Texto Descritivo**: "Neste evento focado em execução, você vai ver o passo a passo exato para colocar sua estrutura de vendas na internet. Em apenas duas horas de aplicação, você terá o funil de vendas do seu produto digital pronto para receber clientes. Sem mistérios, sem enrolação e focado 100% no que gera vendas."
- **CTA Secundário**: "Quero colocar meu produto no ar"

### Layout
- **Estrutura**: `display: flex; justify-content: space-between; align-items: center; gap: 60px;`.
- **Dimensões**: Padding vertical de `120px 20px`. Secção com `clip-path: polygon(0 4vw, 100% 0, 100% 100%, 0 calc(100% - 4vw))` para o efeito inclinado.

### Tipografia
- **Título**: `font-family: var(--font-heading); font-size: clamp(2rem, 3.8vw, 2.8rem); font-weight: 700; line-height: 1.15; margin-bottom: 24px;`
- **Texto**: `font-size: 1.1rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 32px;`

### Cores
- **Fundo**: `#07041a` (um tom de roxo ainda mais escuro e sólido).
- **Elemento Verde Destaque**: `#00ff87`
- **CTA Secundário**: Botão com borda degradê `border: 1px solid rgba(0, 242, 254, 0.5)` e background transparente. No hover, background se torna `rgba(0, 242, 254, 0.05)`.

### Elementos Visuais
- **Mockup "Máquina de Vendas"**:
  - Uma área interativa representando uma página de vendas sendo construída peça por peça pelo assistente de IA.
  - Renderizado com linhas de código flutuantes simulando desenvolvimento automatizado.

### Animações
- **Mockup Scale In**: Efeito `data-aos="zoom-in-up"` com duração de `900ms` e trigger em 15% do scroll do usuário.
- **Linhas de Código**: Pequenas linhas de texto simuladas que sobem e desaparecem em loop (fade-in + translate-y + fade-out).

### Interatividade
- **CTA Hover**: Efeito hover de borda com luz neon suave e deslocamento lateral de 3px da seta interna.

### Responsividade
- **Breakpoint 1024px**: Mudança na direção do flexbox para vertical `flex-direction: column; text-align: center;`. O mockup passa a ficar abaixo do texto descritivo.

---

## Seção 4: Benefícios (O Que o Aluno Vai Dominar)

### Arquetipo e Constraints
- **Arquetipo**: Editorial Layout — Estrutura inspirada em revistas, com tipografia gigante sobreposta e conteúdo dividido assimetricamente.
- **Constraints**: 
  - *Headline >150px* (Tipografia): Texto gigante decorativo no background.
  - *Stagger Animation* (Movimento): Revelação em cascata dos cards de benefícios.
  - *Hover Glow* (Interação): Iluminação dinâmica na borda do card selecionado.
- **Justificativa**: Substitui os tradicionais grids simétricos de ícones chatos por um fluxo editorial fluído e premium que prende a atenção.

### Conteúdo
- **Título**: "O que você vai dominar neste evento prático"
- **Background Text**: "IA"
- **Item 1**: "Criação rápida de copy altamente persuasiva focada em vendas diretas"
- **Item 2**: "Geração de layouts profissionais e design moderno sem precisar contratar designers"
- **Item 3**: "Publicação do seu site no ar com servidor gratuito e alta performance de carregamento"
- **Item 4**: "Configuração do rastreamento de tráfego para rodar anúncios no mesmo dia"

### Layout
- **Estrutura**: Grid assimétrico com `display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 48px;`.
- **Lado Esquerdo**: Título e o texto gigante de fundo.
- **Lado Direito**: Lista vertical de 4 cards de benefícios dispostos em padrão alternado de margem (`margin-left: 20px` nos itens pares).

### Tipografia
- **Título**: `font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; line-height: 1.1; sticky; top: 120px;`
- **Background Text ("IA")**: `font-family: var(--font-heading); font-size: 240px; font-weight: 900; color: rgba(255, 255, 255, 0.015); position: absolute; left: -20px; top: 10px; pointer-events: none;`
- **Benefit Card Title**: `font-family: var(--font-heading); font-size: 1.25rem; font-weight: 600; color: var(--text-primary);`

### Cores
- **Card Background**: `rgba(255, 255, 255, 0.02)` com bordas sutis `rgba(255, 255, 255, 0.06)`.
- **Card Hover Glow**: Borda se acende com `#00f2fe`.

### Elementos Visuais
- Pequenos marcadores geométricos brilhantes (pequenos cubos ou losangos em gradiente cyan-magenta) substituindo marcadores de lista tradicionais.

### Animações
- **Stagger Reveal**: Cards utilizam `data-aos="fade-left"` com atrasos sequenciais (`data-aos-delay="100"`, `200`, `300`, `400`).

### Interatividade
- **Card Hover**: Aumento do brilho do gradiente interno, aumento sutil do tamanho do elemento (`scale(1.01)`) e borda acesa.

### Responsividade
- **Breakpoint 1024px**: Grid muda para coluna única vertical. O título gigante do background ("IA") é movido para o topo centralizado.
- **Breakpoint 768px**: A margem alternada (`margin-left: 20px`) é zerada para alinhar perfeitamente todos os cards em celulares.

---

## Seção 5: Como Funciona (O Cronograma)

### Arquetipo e Constraints
- **Arquetipo**: Timeline Progressiva com Scroll Storytelling — O usuário navega pela linha do tempo das 2 horas e os elementos se revelam dinamicamente.
- **Constraints**: 
  - *Sticky Element* (Layout): Barra lateral com indicação de tempo travada na tela.
  - *Draw SVG* (Movimento): Linha do cronograma que acende à medida que o scroll avança.
  - *Mixed Fonts* (Tipografia): Numerais gigantes em fonte Mono em contraste com textos do cronograma em General Sans.
- **Justificativa**: Torna a leitura do cronograma divertida e fluida, demonstrando visualmente o progresso linear do workshop de duas horas.

### Conteúdo
- **Título**: "O Cronograma do Evento"
- **Bloco 1 (Primeira Hora)**: "Criação da oferta, persona, narrativa de vendas e geração da copy da landing page utilizando inteligência artificial"
- **Bloco 2 (Segunda Hora)**: "Definição da identidade visual, desenvolvimento rápido da página e publicação do seu site com rastreamento ativo"

### Layout
- **Estrutura**: Grid vertical de duas dobras principais. Cada dobra tem `display: grid; grid-template-columns: 200px 1fr; gap: 40px; min-height: 40vh;`.
- **Timeline Path**: Linha vertical que cruza as dobras no centro da coluna de 200px.

### Tipografia
- **Hora (1ª e 2ª)**: `font-family: 'JetBrains Mono', monospace; font-size: 5rem; font-weight: 800; color: rgba(255, 255, 255, 0.05);`
- **Título do Bloco**: `font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; margin-bottom: 12px; color: var(--accent-cyan);`
- **Conteúdo do Bloco**: `font-size: 1.05rem; line-height: 1.6; color: var(--text-secondary);`

### Cores
- **Linha Inativa**: `rgba(255, 255, 255, 0.05)`.
- **Linha Ativa (Progressiva)**: Gradient `linear-gradient(to bottom, #00f2fe, #4facfe)`.

### Elementos Visuais
- **SVG Line**: Uma linha contínua que cruza toda a seção verticalmente.
- **Glow Nodes**: Círculos conectores na linha da timeline que brilham intensamente quando ativos na tela.

### Animações
- **Timeline Draw**: O preenchimento da linha é controlado pela visibilidade do viewport através de CSS scroll-driven animations (se suportado pelo navegador) ou via transição suave no scroll gerenciada com classes ativadas pelo scroll.

### Interatividade
- Conforme cada bloco fica visível no centro do viewport, o numeral correspondente (ex: "Hora 1") muda de opacidade `0.05` para `1` e adquire um glow gradiente de cor.

### Responsividade
- **Breakpoint 768px**: A coluna da esquerda de 200px é eliminada. A linha vertical do SVG passa para a extrema esquerda e os textos se ajustam com padding esquerdo correspondente, mantendo o visual legível.

---

## Seção 6: Depoimentos (Prova Social)

### Arquetipo e Constraints
- **Arquetipo**: Drag Horizontal Carousel — Um carrossel de cards horizontais de depoimentos que o usuário arrasta manualmente no desktop ou desliza no mobile.
- **Constraints**: 
  - *Drag Horizontal* (Interação): Área interativa deslizável.
  - *Noise Texture* (Efeitos): Camada fina de ruído nas caixas de texto.
  - *Card Stack* (Layout): Empilhamento tridimensional com profundidade ao arrastar.
- **Justificativa**: Quebra a rigidez do grid de depoimentos tradicional e estimula a interação do usuário ao explorar as histórias de sucesso.

### Conteúdo
- **Depoimento 1 (André Souza)**: "Eu estava há três semanas tentando criar minha página de vendas no WordPress. Assisti ao método e em menos de duas horas minha página estava no ar e pronta para receber tráfego. O resultado visual e a velocidade do site ficaram fantásticos."
- **Depoimento 2 (Mariana Costa)**: "O maior diferencial é que a inteligência artificial faz o trabalho pesado de copy e design. Consegui lançar meu primeiro infoproduto sem ter que gastar nada com programador. Recomendo muito o evento."

### Layout
- **Estrutura**: Container flexbox horizontal `display: flex; gap: 32px; padding: 20px; overflow-x: auto; scroll-snap-type: x mandatory;`.
- **Cards**: `flex: 0 0 450px; scroll-snap-align: center; border-radius: 20px; padding: 32px;`

### Tipografia
- **Texto do Depoimento**: `font-family: var(--font-body); font-style: italic; font-size: 1.05rem; line-height: 1.6; color: var(--text-primary); margin-bottom: 24px;`
- **Nome do Autor**: `font-family: var(--font-heading); font-size: 1.1rem; font-weight: 600; color: var(--accent-cyan);`

### Cores
- **Card Background**: `rgba(255, 255, 255, 0.02)`.
- **Card Border**: `1px solid rgba(255,255,255,0.06)`.
- **Noise overlay**: `rgba(0, 0, 0, 0.25)`.

### Elementos Visuais
- **Noise Texture Layer**: Aplicado via CSS background image de ruído sutil de granulação.
- **Ícone de Aspas**: SVG gigante flutuante de aspas em opacidade muito reduzida (`0.03`) no canto superior direito de cada card.

### Animações
- **Reveal no Scroll**: Entrada lateral suave de todo o container de depoimentos com `data-aos="fade-up"`.

### Interatividade
- **Cursor customizado**: Ao passar o mouse por cima do carrossel, o cursor padrão muda para uma forma circular escrita "ARRASTAR" ou uma seta bilateral.
- **Hover no Card**: Reduz levemente a opacidade dos cards vizinhos em `0.6` para destacar o card sob o cursor.

### Responsividade
- **Breakpoint 768px**: A largura dos cards diminui de `450px` para `85vw` para se ajustar confortavelmente a telas de celulares sem cortes bruscos, aproveitando o scroll touch nativo.

---

## Seção 7: FAQ (Dúvidas Frequentes)

### Arquetipo e Constraints
- **Arquetipo**: Split Assimétrico (30/70) com Reveal on Demand — Painel esquerdo fixo com títulos e painel direito dinâmico contendo as perguntas expansíveis.
- **Constraints**: 
  - *Reveal on Demand* (Interação): Accordions avançados com transições fluidas de altura máxima.
  - *Hover Underline* (Interação): Link que preenche ou expande uma linha abaixo da pergunta.
  - *Low Contrast* (Cor): Layout calmo e de menor peso visual para focar nas respostas.
- **Justificativa**: Mantém as dúvidas organizadas de maneira minimalista, evitando poluição visual nas perguntas menos visualizadas.

### Conteúdo
- **Título**: "Dúvidas Frequentes"
- **FAQ 1**:
  - Pergunta: "Eu preciso ter conhecimento prévio em programação ou design?"
  - Resposta: "Não. O método foi desenhado especialmente para iniciantes. A inteligência artificial resolve toda a complexidade técnica e visual para você."
- **FAQ 2**:
  - Pergunta: "O evento será ao vivo ou gravado?"
  - Resposta: "O evento é focado em gravação prática de execução rápida, e você receberá acesso imediato a todas as aulas gravadas e materiais de apoio assim que garantir seu ingresso."
- **FAQ 3**:
  - Pergunta: "O que está incluso no ingresso?"
  - Resposta: "Você terá acesso ao treinamento em vídeo completo de duas horas, templates prontos de copy e o guia de publicação do seu site."
- **FAQ 4**:
  - Pergunta: "Como funciona o suporte caso eu tenha dúvidas?"
  - Resposta: "Você terá acesso à nossa comunidade exclusiva de alunos, onde poderá tirar dúvidas diretamente com os instrutores e outros produtores da comunidade."

### Layout
- **Estrutura**: Grid bidimensional `display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 60px;`.
- **Accordion Item**: Cada pergunta fica dentro de uma caixa com `border-bottom: 1px solid rgba(255,255,255,0.06); padding: 24px 0;`.

### Tipografia
- **Título**: `font-family: var(--font-heading); font-size: clamp(2rem, 3.5vw, 2.5rem); font-weight: 700; line-height: 1.1;`
- **Pergunta**: `font-family: var(--font-heading); font-size: 1.15rem; font-weight: 600; cursor: pointer; color: var(--text-primary);`
- **Resposta**: `font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin-top: 12px;`

### Cores
- **FAQ Background**: `#030014`.
- **Border**: `rgba(255, 255, 255, 0.05)`.
- **Resposta Ativa Text Color**: `#94a3b8`.

### Animações
- **Accordion Expand/Collapse**: Altura máxima animada (`max-height: 0` para `max-height: 500px` em `0.4s cubic-bezier(0.16, 1, 0.3, 1)`) acompanhado por uma suave transição de opacidade (`opacity: 0` para `opacity: 1`).
- **Indicator Rotate**: O ícone de sinal de mais (`+`) rotaciona `45deg` para virar um `x` quando a pergunta é aberta.

### Interatividade
- **Hover Underline**: Passar o mouse na pergunta expande um sublinhado a partir do centro.
- **Click to Expand**: Evento simples acionado via Javascript (ou check oculto de HTML puro) alternando a classe `.active` do card.

### Responsividade
- **Breakpoint 1024px**: Grid muda para coluna única vertical `grid-template-columns: 1fr;`. O título centralizado fica no topo e a lista de FAQ se expande ocupando 100% de largura.
- **Breakpoint 768px**: Paddings reduzidos de `24px` para `16px` para aumentar a área aproveitável de tela.
