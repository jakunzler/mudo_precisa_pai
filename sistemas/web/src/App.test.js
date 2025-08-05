import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Mock do window.scrollTo para evitar warnings nos testes
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true,
});

// Mock do HelmetProvider para evitar warnings nos testes
jest.mock('react-helmet-async', () => ({
  HelmetProvider: ({ children }) => children,
  Helmet: () => null,
}));

// Mock do framer-motion para evitar problemas nos testes
jest.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p: 'p',
    span: 'span',
    button: 'button',
    a: 'a',
    img: 'img',
    section: 'section',
    article: 'article',
    header: 'header',
    footer: 'footer',
    nav: 'nav',
    ul: 'ul',
    li: 'li',
  },
  AnimatePresence: ({ children }) => children,
}));

// Mock de todos os componentes que usam styled-components com motion
jest.mock('./components/Header', () => {
  return function MockHeader() {
    return <header data-testid="header">Header</header>;
  };
});

jest.mock('./pages/LandingPage', () => {
  return function MockLandingPage() {
    return <div data-testid="landing-page">Landing Page</div>;
  };
});

jest.mock('./pages/Home', () => {
  return function MockHome() {
    return <div data-testid="home-page">Home Page</div>;
  };
});

jest.mock('./pages/About', () => {
  return function MockAbout() {
    return <div data-testid="about-page">About Page</div>;
  };
});

jest.mock('./pages/Sponsorship', () => {
  return function MockSponsorship() {
    return <div data-testid="sponsorship-page">Sponsorship Page</div>;
  };
});

jest.mock('./pages/Cowork', () => {
  return function MockCowork() {
    return <div data-testid="cowork-page">Cowork Page</div>;
  };
});

jest.mock('./components/Footer', () => {
  return function MockFooter() {
    return <footer data-testid="footer">Footer</footer>;
  };
});

// Importar App após os mocks
const App = require('./App').default;

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

test('renders app without crashing', () => {
  const { container } = renderWithRouter(<App />);
  expect(container).toBeInTheDocument();
});

test('app has basic structure', () => {
  renderWithRouter(<App />);
  expect(screen.getByTestId('header')).toBeInTheDocument();
  expect(screen.getByTestId('footer')).toBeInTheDocument();
}); 