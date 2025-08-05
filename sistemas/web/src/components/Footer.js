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
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const FooterSection = styled.div`
  h3 {
    color: white;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 1rem;
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

    &:hover {
      color: white;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.8);

  svg {
    width: 16px;
    height: 16px;
    color: #EA580C;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #EA580C;
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Roboto Slab', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;

  svg {
    width: 24px;
    height: 24px;
    color: #EA580C;
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
            <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon size={20} />
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon size={20} />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIcon size={20} />
            </SocialLink>
            <SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <YoutubeIcon size={20} />
            </SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={20} />
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
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Recursos</h3>
          <FooterLinks>
            <li><Link to="/bibliografia">Bibliografia</Link></li>
            <li><Link to="/eventos">Eventos</Link></li>
            <li><Link to="/mentoria">Mentoria</Link></li>
            <li><Link to="/comunidade">Comunidade</Link></li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Contato</h3>
          <ContactInfo>
            <MailIcon />
            <span>contato@omundoprecisadeumpai.org</span>
          </ContactInfo>
          <ContactInfo>
            <PhoneIcon />
            <span>(62) 99999-9999</span>
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