import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import About from './pages/About';
import Sponsorship from './pages/Sponsorship';
import Cowork from './pages/Cowork';
import Contact from './pages/Contact';
import Bibliography from './pages/Bibliography';
import Events from './pages/Events';
import Mentoring from './pages/Mentoring';
import Community from './pages/Community';
import ScrollToTop from './components/ScrollToTop';
import FloatingContributionButton from './components/FloatingContributionButton';

function App() {
  return (
    <>
      <Helmet>
        <title>O Mundo Precisa de um Pai - Transformando a Paternidade</title>
        <meta name="description" content="Movimento dedicado à conscientização sobre a importância da paternidade responsável e ativa na sociedade moderna." />
        <meta name="keywords" content="paternidade, pai, família, educação, conscientização, movimento social" />
        <link rel="canonical" href="https://omundoprecisadeumpai.org" />
      </Helmet>
      
      <ScrollToTop />
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/cowork" element={<Cowork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bibliography" element={<Bibliography />} />
          <Route path="/events" element={<Events />} />
          <Route path="/mentoring" element={<Mentoring />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </main>
      
      <Footer />
      <FloatingContributionButton />
    </>
  );
}

export default App; 