import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%);
  padding: 2rem 1rem;
  padding-top: calc(80px + 2rem);

  @media (max-width: 768px) {
    padding: 1.5rem 0.75rem;
    padding-top: calc(80px + 1.5rem);
  }

  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
    padding-top: calc(80px + 1rem);
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 6vw, 3rem);
  color: #1E3A8A;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: #6B7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ContactInfo = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(30, 58, 138, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ContactInfoTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #1E3A8A;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #F8FAFC;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: #F1F5F9;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    margin-bottom: 1rem;
  }
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #1E3A8A 0%, #059669 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.25rem;
  font-size: 0.95rem;
`;

const ContactValue = styled.div`
  color: #6B7280;
  font-size: 0.9rem;
  word-break: break-word;
`;

const MapContainer = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(30, 58, 138, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const MapTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  color: #1E3A8A;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6B7280;
  font-weight: 500;
  border: 2px dashed #D1D5DB;

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'E-mail',
      value: 'decarvalhopai7@gmail.com',
      link: 'mailto:decarvalhopai7@gmail.com'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (11) 99999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: MapPin,
      label: 'Endereço',
      value: 'São Paulo, SP - Brasil',
      link: null
    },
    {
      icon: Clock,
      label: 'Horário de Atendimento',
      value: 'Segunda a Sexta: 9h às 18h',
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contato - O Mundo Precisa de um Pai</title>
        <meta name="description" content="Entre em contato conosco para saber mais sobre o movimento O Mundo Precisa de um Pai." />
      </Helmet>

      <ContactContainer>
        <Content>
          <Header>
            <Title
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Entre em Contato
            </Title>
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Estamos aqui para ajudar. Entre em contato conosco e faça parte 
              do movimento que está transformando a paternidade.
            </Subtitle>
          </Header>

          <ContactGrid>
            <ContactInfo
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ContactInfoTitle>Informações de Contato</ContactInfoTitle>
              
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <ContactItem key={index}>
                    <ContactIcon>
                      <IconComponent size={20} />
                    </ContactIcon>
                    <ContactDetails>
                      <ContactLabel>{item.label}</ContactLabel>
                      {item.link ? (
                        <ContactValue>
                          <a 
                            href={item.link}
                            style={{ 
                              color: '#1E3A8A', 
                              textDecoration: 'none',
                              fontWeight: '500'
                            }}
                          >
                            {item.value}
                          </a>
                        </ContactValue>
                      ) : (
                        <ContactValue>{item.value}</ContactValue>
                      )}
                    </ContactDetails>
                  </ContactItem>
                );
              })}
            </ContactInfo>

            <MapContainer
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <MapTitle>Nossa Localização</MapTitle>
              <MapPlaceholder>
                <div style={{ textAlign: 'center' }}>
                  <MapPin size={48} style={{ marginBottom: '1rem', color: '#9CA3AF' }} />
                  <p>Mapa será adicionado aqui</p>
                  <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                    São Paulo, SP - Brasil
                  </p>
                </div>
              </MapPlaceholder>
            </MapContainer>
          </ContactGrid>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <ContactForm 
              title="Envie sua Mensagem"
              showSuccessMessage={true}
            />
          </motion.div>
        </Content>
      </ContactContainer>
    </>
  );
};

export default ContactPage; 