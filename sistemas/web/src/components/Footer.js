import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { 
  Heart, 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon, 
  FacebookIcon, 
  InstagramIcon, 
  TwitterIcon, 
  YoutubeIcon,
  LinkedinIcon
} from 'lucide-react';

const FooterContainer = styled.footer`
  background: #1E3A8A;
  color: white;
  padding: 4rem 2rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.75rem 1.5rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: white;
    margin-bottom: 1.5rem;
    font-size: clamp(1rem, 3vw, 1.2rem);
    font-weight: 600;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: clamp(0.875rem, 2vw, 1rem);
  }

  @media (max-width: 480px) {
    text-align: center;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.75rem;
  }

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: clamp(0.875rem, 2vw, 1rem);

    &:hover {
      color: white;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.875rem, 2vw, 1rem);

  svg {
    width: 16px;
    height: 16px;
    color: #EA580C;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    justify-content: center;
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(35px, 8vw, 40px);
  height: clamp(35px, 8vw, 40px);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #EA580C;
    transform: translateY(-2px);
  }

  svg {
    width: clamp(16px, 4vw, 20px);
    height: clamp(16px, 4vw, 20px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: clamp(0.8rem, 2vw, 0.9rem);

  p {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    padding-top: 1.5rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Roboto Slab', serif;
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;

  svg {
    width: clamp(20px, 4vw, 24px);
    height: clamp(20px, 4vw, 24px);
    color: #EA580C;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo>
            <Heart />
            O Mundo Precisa de um Pai
          </Logo>
          <p>
            Transformar a paternidade através da conscientização, educação e apoio, 
            criando um mundo onde todos os pais tenham as ferramentas e o conhecimento 
            para serem presentes, responsáveis e amorosos.
          </p>
          <SocialLinks>
            <SocialLink href="https://www.facebook.com/profile.php?id=61579395914994&locale=pt_BR" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/decarvalhopai7/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://x.com/decarvalhopai7" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://www.youtube.com/@decarvalhopai7" target="_blank" rel="noopener noreferrer">
              <YoutubeIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/ailton-de-carvalho-6b0691380/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Navegação</h3>
          <FooterLinks>
            <li><Link to="/home">Início</Link></li>
            <li><Link to="/about">Sobre</Link></li>
            <li><Link to="/sponsorship">Patrocínio</Link></li>
            <li><Link to="/cowork">Colaboração</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Recursos</h3>
          <FooterLinks>
            <li><Link to="/bibliography">Bibliografia</Link></li>
            <li><Link to="/events">Eventos</Link></li>
            <li><Link to="/mentoring">Mentoria</Link></li>
            <li><Link to="/community">Comunidade</Link></li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Contato</h3>
          <ContactInfo>
            <MailIcon />
            <span>decarvalhopai7@gmail.com</span>
          </ContactInfo>
          <ContactInfo>
            <PhoneIcon />
            <span>+55 (62) 999870-0425</span>
          </ContactInfo>
          <ContactInfo>
            <MapPinIcon />
            <span>Goiânia, GO - Brasil</span>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>
          © {currentYear} O Mundo Precisa de um Pai. Todos os direitos reservados.
        </p>
        <p>
          Desenvolvido com ❤️ para transformar a paternidade no Brasil
        </p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 