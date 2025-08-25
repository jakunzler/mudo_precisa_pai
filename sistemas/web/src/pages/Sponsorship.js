import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Heart,
  Star,
  Crown,
  AwardIcon,
  Users,
  Target,
  CheckCircleIcon
} from 'lucide-react';
import PixContributionWidget from '../components/PixContributionWidget';

const SponsorshipContainer = styled.div`
  padding-top: 0;
`;

const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const HeroSection = styled(Section)`
  background: linear-gradient(135deg, #1E3A8A 0%, #059669 100%);
  color: white;
  text-align: center;
  padding: 8rem 2rem;

  h1 {
    color: white;
    margin-bottom: 1.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.3rem;
    max-width: 700px;
    margin: 0 auto 3rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 3rem;
  color: #1E3A8A;
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.2rem;
  color: #6B7280;
  max-width: 600px;
  margin: 0 auto 4rem;
`;

const PlansGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const PlanCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
  }

  ${({ featured }) => featured && `
    border: 3px solid #1E3A8A;
    transform: scale(1.05);
    
    &::before {
      content: 'Mais Popular';
      position: absolute;
      top: 1rem;
      right: -2rem;
      background: #1E3A8A;
      color: white;
      padding: 0.5rem 3rem;
      transform: rotate(45deg);
      font-size: 0.8rem;
      font-weight: 600;
    }
  `}
`;

const PlanIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  background: ${({ color }) => color};
`;

const PlanTitle = styled.h3`
  color: #1E3A8A;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const PlanPrice = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1E3A8A;
  margin-bottom: 1rem;

  span {
    font-size: 1rem;
    color: #6B7280;
  }
`;

const PlanDescription = styled.p`
  color: #6B7280;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  text-align: left;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: #6B7280;

  svg {
    color: #059669;
    width: 16px;
    height: 16px;
  }
`;

const PlanButton = styled(motion.button)`
  background: ${({ variant }) => 
    variant === 'primary' 
      ? 'linear-gradient(135deg, #1E3A8A 0%, #059669 100%)'
      : 'transparent'
  };
  color: ${({ variant }) => variant === 'primary' ? 'white' : '#1E3A8A'};
  border: ${({ variant }) => 
    variant === 'primary' ? 'none' : '2px solid #1E3A8A'
  };
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(30, 58, 138, 0.3);
  }
`;

const BenefitsSection = styled(Section)`
  background: #F8FAFC;
`;

const BenefitsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const BenefitCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;

  svg {
    width: 60px;
    height: 60px;
    color: #1E3A8A;
    margin-bottom: 1rem;
  }

  h3 {
    color: #1E3A8A;
    margin-bottom: 1rem;
  }

  p {
    color: #6B7280;
    line-height: 1.6;
  }
`;

const ContactSection = styled(Section)`
  background: white;
  text-align: center;
`;

const ContactForm = styled(motion.form)`
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 0.5rem;
  text-align: left;
`;

const Label = styled.label`
  color: #1E3A8A;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #E5E7EB;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1E3A8A;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid #E5E7EB;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1E3A8A;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, #1E3A8A 0%, #059669 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(30, 58, 138, 0.3);
  }
`;

const Sponsorship = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const plans = [
    {
      icon: Heart,
      title: 'Apoiador Básico',
      price: 'R$ 50',
      period: '/mês',
      description: 'Ideal para quem quer começar a apoiar o movimento',
      color: '#059669',
      benefits: [
        'Acesso a conteúdo exclusivo',
        'Newsletter mensal',
        'Participação em eventos online',
        'Certificado de apoiador'
      ],
      featured: false,
      variant: 'secondary'
    },
    {
      icon: Star,
      title: 'Apoiador Premium',
      price: 'R$ 100',
      period: '/mês',
      description: 'Para quem quer fazer a diferença de forma mais ativa',
      color: '#1E3A8A',
      benefits: [
        'Todos os benefícios do Básico',
        'Acesso a workshops exclusivos',
        'Mentoria individual',
        'Participação em eventos presenciais',
        'Kit do apoiador'
      ],
      featured: true,
      variant: 'primary'
    },
    {
      icon: Crown,
      title: 'Apoiador VIP',
      price: 'R$ 200',
      period: '/mês',
      description: 'Para empresas e pessoas que querem máximo impacto',
      color: '#EA580C',
      benefits: [
        'Todos os benefícios do Premium',
        'Acesso a eventos VIP',
        'Logo em materiais do movimento',
        'Relatórios de impacto',
        'Consultoria personalizada'
      ],
      featured: false,
      variant: 'secondary'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Impacto Direto',
      description: 'Seu apoio vai diretamente para programas que transformam vidas.'
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Faça parte de uma rede de pessoas comprometidas com a paternidade.'
    },
    {
      icon: AwardIcon,
      title: 'Reconhecimento',
      description: 'Receba certificados e reconhecimento por seu apoio ao movimento.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar lógica de envio do formulário
    console.log('Formulário enviado');
  };

  return (
    <>
      <Helmet>
        <title>Patrocínio - O Mundo Precisa de um Pai</title>
        <meta name="description" content="Apoie o movimento e faça parte da transformação da paternidade no Brasil." />
      </Helmet>

      <SponsorshipContainer>
        <HeroSection>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Apoie o Movimento
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Junte-se a nós na missão de transformar a paternidade no Brasil. 
            Seu apoio faz a diferença na vida de milhares de famílias.
          </motion.p>
        </HeroSection>

        <Section>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Planos de Apoio
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Escolha o plano que melhor se adequa ao seu perfil e ajude-nos a fazer a diferença
          </SectionSubtitle>
          
          <PlansGrid
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {plans.map((plan, index) => (
              <PlanCard
                key={index}
                featured={plan.featured}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <PlanIcon color={plan.color}>
                  <plan.icon />
                </PlanIcon>
                <PlanTitle>{plan.title}</PlanTitle>
                <PlanPrice>
                  {plan.price}<span>{plan.period}</span>
                </PlanPrice>
                <PlanDescription>{plan.description}</PlanDescription>
                <BenefitsList>
                  {plan.benefits.map((benefit, benefitIndex) => (
                    <BenefitItem key={benefitIndex}>
                      <CheckCircleIcon />
                      {benefit}
                    </BenefitItem>
                  ))}
                </BenefitsList>
                <PlanButton
                  variant={plan.variant}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Escolher Plano
                </PlanButton>
              </PlanCard>
            ))}
          </PlansGrid>
        </Section>

        <Section>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contribua com PIX
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Faça sua contribuição de forma rápida e segura através do PIX
          </SectionSubtitle>
          
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <PixContributionWidget 
              title="Contribua com PIX"
              subtitle="Ajude-nos a transformar a paternidade no Brasil"
              showImage={true}
            />
          </div>
        </Section>

        <BenefitsSection>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Por que Apoiar?
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Seu apoio tem um impacto real e mensurável na sociedade
          </SectionSubtitle>
          
          <BenefitsGrid
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <benefit.icon />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </BenefitsSection>

        <ContactSection>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Entre em Contato
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Quer saber mais sobre como apoiar? Entre em contato conosco
          </SectionSubtitle>
          
          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FormGroup>
              <Label>Nome</Label>
              <Input type="text" required />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" required />
            </FormGroup>
            <FormGroup>
              <Label>Telefone</Label>
              <Input type="tel" />
            </FormGroup>
            <FormGroup>
              <Label>Mensagem</Label>
              <TextArea placeholder="Conte-nos como você gostaria de apoiar o movimento..." />
            </FormGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar Mensagem
            </SubmitButton>
          </ContactForm>
        </ContactSection>
      </SponsorshipContainer>
    </>
  );
};

export default Sponsorship; 