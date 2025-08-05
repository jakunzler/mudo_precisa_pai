# Frontend - O Mundo Precisa de um Pai

Frontend moderno em ReactJS para o movimento "O Mundo Precisa de um Pai", desenvolvido com as melhores práticas do mercado.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **React Router DOM** - Roteamento
- **Styled Components** - Estilização
- **Framer Motion** - Animações
- **React Icons** - Ícones
- **Lucide React** - Ícones modernos
- **React Helmet Async** - SEO
- **React Hook Form** - Formulários
- **React Hot Toast** - Notificações
- **React Intersection Observer** - Detecção de scroll

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.js       # Navegação principal
│   ├── Footer.js       # Rodapé
│   └── ScrollToTop.js  # Scroll automático
├── pages/              # Páginas da aplicação
│   ├── LandingPage.js  # Página inicial
│   ├── Home.js         # Página principal
│   ├── About.js        # Sobre o movimento
│   ├── Sponsorship.js  # Patrocínio
│   └── Cowork.js       # Colaboração
├── styles/             # Estilos globais
│   └── GlobalStyles.js # Estilos CSS globais
├── App.js              # Componente principal
└── index.js            # Ponto de entrada
```

## 🎨 Design System

### Cores
- **Azul Paterno**: `#1E3A8A` (primária)
- **Verde Esperança**: `#059669` (secundária)
- **Laranja Calor**: `#EA580C` (acento)
- **Cinza Neutro**: `#6B7280` (neutro)

### Tipografia
- **Títulos**: Roboto Slab (serif)
- **Corpo**: Inter (sans-serif)

### Componentes
- Header responsivo com navegação
- Footer com links e contatos
- Cards animados
- Botões com gradientes
- Formulários estilizados

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação
```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm start

# Build para produção
npm run build

# Executar testes
npm test
```

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
REACT_APP_API_URL=https://api.omundoprecisadeumpai.org
REACT_APP_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## 📱 Páginas Disponíveis

### 1. Landing Page (`/`)
- Hero section impactante
- Estatísticas animadas
- Call-to-action principal

### 2. Home (`/home`)
- Seção hero
- Pilares do movimento
- Estatísticas
- Próximos eventos

### 3. About (`/about`)
- História do movimento
- Valores e missão
- Equipe
- Timeline de conquistas

### 4. Sponsorship (`/sponsorship`)
- Planos de apoio
- Benefícios
- Formulário de contato

### 5. Cowork (`/cowork`)
- Oportunidades de colaboração
- Parcerias
- Formulário de candidatura

## 🎯 Funcionalidades

### Animações
- **Framer Motion** para transições suaves
- **Intersection Observer** para animações no scroll
- **Hover effects** em cards e botões

### Responsividade
- Design mobile-first
- Breakpoints: 768px, 1024px
- Navegação mobile com menu hambúrguer

### SEO
- **React Helmet Async** para meta tags
- **Open Graph** para redes sociais
- **Structured data** para busca

### Performance
- **Lazy loading** de componentes
- **Code splitting** automático
- **Optimized images** (quando implementadas)

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm start

# Build de produção
npm run build

# Testes
npm test

# Lint
npm run lint

# Lint com correção automática
npm run lint:fix

# Formatação de código
npm run format
```

## 📊 Métricas de Performance

### Lighthouse Score (estimado)
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🔧 Configurações

### ESLint
Configurado com regras para React e boas práticas:
- `react-app` (padrão Create React App)
- `prettier` para formatação

### Prettier
Configuração para formatação consistente:
- Single quotes
- Trailing comma
- Tab width: 2

### Browserslist
Suporte para:
- Chrome, Firefox, Safari (última versão)
- IE 11+ (produção)

## 🚀 Deploy

### Netlify
```bash
# Build
npm run build

# Deploy
netlify deploy --prod --dir=build
```

### Vercel
```bash
# Deploy automático
vercel --prod
```

### GitHub Pages
```bash
# Adicionar homepage no package.json
"homepage": "https://username.github.io/repo-name"

# Deploy
npm run deploy
```

## 📈 Analytics e Monitoramento

### Google Analytics
```javascript
// Implementar no index.html
gtag('config', 'GA_MEASUREMENT_ID');
```

### Error Tracking
```javascript
// Implementar Sentry ou similar
Sentry.init({
  dsn: "YOUR_DSN"
});
```

## 🔒 Segurança

### Headers de Segurança
```html
<!-- Implementar no servidor -->
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### HTTPS
- Forçar HTTPS em produção
- HSTS headers

## 📝 Próximos Passos

### Melhorias Planejadas
- [ ] Implementar PWA
- [ ] Adicionar testes unitários
- [ ] Implementar cache de API
- [ ] Adicionar dark mode
- [ ] Implementar i18n

### Otimizações
- [ ] Lazy loading de imagens
- [ ] Service worker
- [ ] Bundle analysis
- [ ] Performance monitoring

## 🤝 Contribuição

### Padrões de Código
- **ESLint** para linting
- **Prettier** para formatação
- **Conventional Commits** para commits

### Pull Request
1. Fork do repositório
2. Criar branch feature
3. Implementar mudanças
4. Executar testes
5. Criar PR com descrição clara

## 📞 Suporte

### Contatos
- **Desenvolvedor**: [Email]
- **Designer**: [Email]
- **Product Owner**: [Email]

### Documentação
- [React Docs](https://reactjs.org/docs/)
- [Styled Components](https://styled-components.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

*Desenvolvido com ❤️ para o movimento "O Mundo Precisa de um Pai"* 