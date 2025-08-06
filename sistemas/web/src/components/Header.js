import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Users, Briefcase, Mail } from 'lucide-react';

const HEADER_HEIGHT = 80;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1100;
  height: ${HEADER_HEIGHT}px;
  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(255, 255, 255, 0.97)' : 'rgba(255,255,255,0.92)'};
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(.4,0,.2,1);
  border-bottom: 1px solid rgba(30, 58, 138, 0.08);
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? '0 2px 8px rgba(30,58,138,0.06)' : 'none'};
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media (max-width: 1024px) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Roboto Slab', serif;
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 700;
  color: #1E3A8A;
  text-decoration: none;
  transition: color 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: #059669;
  }

  svg {
    width: clamp(20px, 4vw, 24px);
    height: clamp(20px, 4vw, 24px);
    color: #EA580C;
    flex-shrink: 0;
  }

  @media (max-width: 640px) {
    font-size: 1rem;
    gap: 0.25rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const LogoText = styled.span`
  @media (max-width: 640px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: clamp(1rem, 3vw, 2rem);
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  color: ${({ $active }) => $active ? '#1E3A8A' : '#4B5563'};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
  font-size: clamp(0.875rem, 2vw, 1rem);
  white-space: nowrap;

  &:hover {
    color: #1E3A8A;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ $active }) => $active ? '100%' : '0'};
    height: 2px;
    background: #1E3A8A;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #1E3A8A;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1002;
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1E3A8A 0%, #059669 50%, #EA580C 100%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;
`;

const MobileMenuContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);

  @media (max-width: 480px) {
    gap: 1.5rem;
    padding: 1.5rem;
    margin: 0 1rem;
  }
`;

const MobileNavLink = styled(Link)`
  color: #1E3A8A;
  text-decoration: none;
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  font-weight: 600;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
  width: 100%;
  justify-content: center;
  border-radius: 10px;
  background: rgba(30, 58, 138, 0.05);
  border: 1px solid rgba(30, 58, 138, 0.1);

  &:hover {
    color: #059669;
    background: rgba(30, 58, 138, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
    padding: 0.875rem 1.5rem;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  color: #1E3A8A;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 50%;
  z-index: 1002;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    background: white;
    transform: scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    top: 1rem;
    right: 1rem;
    padding: 0.5rem;
  }
`;

const CTAButton = styled(Link)`
  background: linear-gradient(135deg, #1E3A8A 0%, #059669 100%);
  color: white;
  padding: clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 3vw, 1.5rem);
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(30, 58, 138, 0.3);
  font-size: clamp(0.875rem, 2vw, 1rem);
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(30, 58, 138, 0.4);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileCTAButton = styled(CTAButton)`
  display: block;
  margin-top: 1rem;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  text-align: center;
  width: 100%;
  max-width: 300px;

  @media (max-width: 480px) {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu mobile quando mudar de rota
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevenir scroll quando menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { path: '/home', label: 'Início', icon: Heart },
    { path: '/about', label: 'Sobre', icon: Users },
    { path: '/sponsorship', label: 'Patrocínio', icon: Heart },
    { path: '/cowork', label: 'Colaboração', icon: Briefcase },
    { path: '/contact', label: 'Contato', icon: Mail },
  ];

  const isActive = (path) => location.pathname === path;

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer $scrolled={isScrolled}>
      <Nav>
        <Logo to="/">
          <Heart />
          <LogoText>O Mundo Precisa de um Pai</LogoText>
        </Logo>

        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              $active={isActive(item.path)}
            >
              {item.label}
            </NavLink>
          ))}
          <CTAButton to="/sponsorship">
            Apoie o Movimento
          </CTAButton>
        </NavLinks>

        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </MobileMenuButton>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton
              onClick={handleCloseMenu}
              aria-label="Fechar menu"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <X size={20} />
            </CloseButton>
            
            <MobileMenuContent
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <MobileNavLink
                    key={item.path}
                    to={item.path}
                    onClick={handleCloseMenu}
                    as={motion.div}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <IconComponent size={20} />
                    {item.label}
                  </MobileNavLink>
                );
              })}
              
              <MobileCTAButton 
                to="/sponsorship" 
                onClick={handleCloseMenu}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                Apoie o Movimento
              </MobileCTAButton>
            </MobileMenuContent>
          </MobileMenuOverlay>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header; 