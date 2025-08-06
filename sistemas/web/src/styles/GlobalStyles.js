import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
    color: #1a1a1a;
    background-color: #ffffff;
    padding-top: 80px;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Slab', serif;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
  }

  h2 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
  }

  h3 {
    font-size: clamp(1.5rem, 3.5vw, 2rem);
  }

  h4 {
    font-size: clamp(1.25rem, 3vw, 1.5rem);
  }

  h5 {
    font-size: clamp(1.125rem, 2.5vw, 1.25rem);
  }

  h6 {
    font-size: clamp(1rem, 2vw, 1rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(0.875rem, 2vw, 1rem);
    line-height: 1.7;
  }

  a {
    color: #1E3A8A;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #059669;
    }
  }

  button {
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #1E3A8A;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #059669;
  }

  /* Focus styles for accessibility */
  *:focus {
    outline: 2px solid #1E3A8A;
    outline-offset: 2px;
  }

  /* Selection styles */
  ::-moz-selection {
    background-color: #1E3A8A;
    color: white;
  }
  
  ::selection {
    background-color: #1E3A8A;
    color: white;
  }

  /* Container responsivo */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Grid responsivo */
  .grid {
    display: grid;
    gap: 2rem;
  }

  .grid-1 { grid-template-columns: 1fr; }
  .grid-2 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
  .grid-3 { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
  .grid-4 { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }

  /* Flexbox responsivo */
  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .items-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  /* Espaçamento responsivo */
  .space-y-1 > * + * { margin-top: 0.25rem; }
  .space-y-2 > * + * { margin-top: 0.5rem; }
  .space-y-4 > * + * { margin-top: 1rem; }
  .space-y-6 > * + * { margin-top: 1.5rem; }
  .space-y-8 > * + * { margin-top: 2rem; }

  .space-x-2 > * + * { margin-left: 0.5rem; }
  .space-x-4 > * + * { margin-left: 1rem; }
  .space-x-6 > * + * { margin-left: 1.5rem; }

  /* Padding responsivo */
  .p-2 { padding: 0.5rem; }
  .p-4 { padding: 1rem; }
  .p-6 { padding: 1.5rem; }
  .p-8 { padding: 2rem; }

  .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
  .px-4 { padding-left: 1rem; padding-right: 1rem; }
  .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
  .px-8 { padding-left: 2rem; padding-right: 2rem; }

  .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
  .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
  .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
  .py-8 { padding-top: 2rem; padding-bottom: 2rem; }

  /* Margin responsivo */
  .m-2 { margin: 0.5rem; }
  .m-4 { margin: 1rem; }
  .m-6 { margin: 1.5rem; }
  .m-8 { margin: 2rem; }

  .mx-auto { margin-left: auto; margin-right: auto; }
  .my-auto { margin-top: auto; margin-bottom: auto; }

  /* Texto responsivo */
  .text-center { text-align: center; }
  .text-left { text-align: left; }
  .text-right { text-align: right; }

  .text-sm { font-size: 0.875rem; }
  .text-base { font-size: 1rem; }
  .text-lg { font-size: 1.125rem; }
  .text-xl { font-size: 1.25rem; }
  .text-2xl { font-size: 1.5rem; }
  .text-3xl { font-size: 1.875rem; }
  .text-4xl { font-size: 2.25rem; }

  /* Breakpoints responsivos */
  @media (max-width: 1536px) {
    .container {
      max-width: 1280px;
    }
  }

  @media (max-width: 1280px) {
    .container {
      max-width: 1024px;
    }
  }

  @media (max-width: 1024px) {
    .container {
      max-width: 768px;
    }
    
    .grid-2 {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    
    .grid-3 {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    
    .grid-4 {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }

  @media (max-width: 768px) {
    .container {
      max-width: 640px;
      padding: 0 1rem;
    }
    
    .grid-2,
    .grid-3,
    .grid-4 {
      grid-template-columns: 1fr;
    }
    
    .flex {
      flex-direction: column;
    }
    
    .space-x-2 > * + *,
    .space-x-4 > * + *,
    .space-x-6 > * + * {
      margin-left: 0;
      margin-top: 0.5rem;
    }
  }

  @media (max-width: 640px) {
    .container {
      max-width: 100%;
      padding: 0 0.75rem;
    }
    
    .p-8 { padding: 1rem; }
    .px-8 { padding-left: 0.75rem; padding-right: 0.75rem; }
    .py-8 { padding-top: 1rem; padding-bottom: 1rem; }
    
    .m-8 { margin: 1rem; }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 0.5rem;
    }
    
    .p-6 { padding: 0.75rem; }
    .px-6 { padding-left: 0.5rem; padding-right: 0.5rem; }
    .py-6 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
    
    .m-6 { margin: 0.75rem; }
  }

  /* Utilitários para telas muito pequenas */
  @media (max-width: 360px) {
    html {
      font-size: 14px;
    }
    
    .container {
      padding: 0 0.25rem;
    }
  }

  /* Utilitários para telas muito grandes */
  @media (min-width: 1920px) {
    .container {
      max-width: 1400px;
    }
  }

  /* Melhorias para acessibilidade */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Melhorias para modo escuro (se implementado no futuro) */
  @media (prefers-color-scheme: dark) {
    /* Estilos para modo escuro podem ser adicionados aqui */
  }
`; 