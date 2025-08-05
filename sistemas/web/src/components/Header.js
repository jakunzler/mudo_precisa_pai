import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Users, Briefcase } from 'lucide-react';

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

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Roboto Slab', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1E3A8A;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #059669;
  }

  svg {
    width: 24px;
    height: 24px;
    color: #EA580C;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
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

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const MobileNavLink = styled(Link)`
  color: #1E3A8A;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #059669;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: #1E3A8A;
  cursor: pointer;
  padding: 0.5rem;
`;

const CTAButton = styled(Link)`
  background: linear-gradient(135deg, #1E3A8A 0%, #059669 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(30, 58, 138, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(30, 58, 138, 0.4);
  }

  @media (max-width: 768px) {
    display: none;
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

  const navItems = [
    { path: '/home', label: 'Início', icon: Heart },
    { path: '/about', label: 'Sobre', icon: Users },
    { path: '/sponsorship', label: 'Patrocínio', icon: Heart },
    { path: '/cowork', label: 'Colaboração', icon: Briefcase },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <HeaderContainer $scrolled={isScrolled}>
      <Nav>
        <Logo to="/">
          <Heart />
          O Mundo Precisa de um Pai
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
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <X size={24} />
            </CloseButton>
            
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <MobileNavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <IconComponent size={20} style={{ marginRight: '0.5rem' }} />
                  {item.label}
                </MobileNavLink>
              );
            })}
            
            <CTAButton to="/sponsorship" onClick={() => setIsMobileMenuOpen(false)}>
              Apoie o Movimento
            </CTAButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header; 