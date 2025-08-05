import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BriefcaseIcon, 
  Users, 
  Heart, 
  Target,
  GlobeIcon,
  BookOpenIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from 'lucide-react';

const CoworkContainer = styled.div`
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

const OpportunitiesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const OpportunityCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

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
    margin-bottom: 1.5rem;
  }
`;

const RequirementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const RequirementItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: #6B7280;

  svg {
    color: #059669;
    width: 16px;
    height: 16px;
  }
`;

const ApplyButton = styled(motion.button)`
  background: linear-gradient(135deg, #1E3A8A 0%, #059669 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(30, 58, 138, 0.3);
  }
`;

const PartnershipSection = styled(Section)`
  background: #F8FAFC;
`;

const PartnershipGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const PartnershipCard = styled(motion.div)`
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

const Select = styled.select`
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

const Cowork = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const opportunities = [
    {
      icon: BriefcaseIcon,
      title: 'Voluntário',
      description: 'Ajude-nos a organizar eventos, workshops e atividades do movimento.',
      requirements: [
        'Disponibilidade de 4h/semana',
        'Interesse em paternidade',
        'Boa comunicação',
        'Trabalho em equipe'
      ]
    },
    {
      icon: BookOpenIcon,
      title: 'Educador',
      description: 'Compartilhe conhecimento através de palestras, workshops e mentorias.',
      requirements: [
        'Formação em áreas relacionadas',
        'Experiência em educação',
        'Boa oratória',
        'Disponibilidade para viagens'
      ]
    },
    {
      icon: Users,
      title: 'Mentor',
      description: 'Acompanhe pais em seu desenvolvimento pessoal e familiar.',
      requirements: [
        'Experiência como pai',
        'Formação em psicologia/coaching',
        'Disponibilidade para encontros',
        'Empatia e escuta ativa'
      ]
    },
    {
      icon: GlobeIcon,
      title: 'Embaixador',
      description: 'Represente o movimento em sua cidade ou região.',
      requirements: [
        'Liderança e iniciativa',
        'Rede de contatos local',
        'Disponibilidade para eventos',
        'Compromisso com a causa'
      ]
    }
  ];

  const partnerships = [
    {
      icon: Heart,
      title: 'Parcerias Institucionais',
      description: 'Trabalhe conosco em projetos de impacto social e educacional.'
    },
    {
      icon: Target,
      title: 'Projetos Específicos',
      description: 'Desenvolva iniciativas focadas em comunidades específicas.'
    },
    {
      icon: Heart,
      title: 'Apoio Técnico',
      description: 'Ofereça serviços e expertise para fortalecer nossas atividades.'
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
        <title>Colaboração - O Mundo Precisa de um Pai</title>
        <meta name="description" content="Junte-se à nossa equipe e faça parte da transformação da paternidade no Brasil." />
      </Helmet>

      <CoworkContainer>
        <HeroSection>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Colabore Conosco
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Faça parte da nossa equipe e ajude-nos a transformar a paternidade no Brasil. 
            Temos diversas oportunidades para você se envolver.
          </motion.p>
        </HeroSection>

        <Section>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Oportunidades de Colaboração
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Encontre a forma ideal de contribuir com o movimento
          </SectionSubtitle>
          
          <OpportunitiesGrid
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {opportunities.map((opportunity, index) => (
              <OpportunityCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <opportunity.icon />
                <h3>{opportunity.title}</h3>
                <p>{opportunity.description}</p>
                <RequirementsList>
                  {opportunity.requirements.map((requirement, reqIndex) => (
                    <RequirementItem key={reqIndex}>
                      <CheckCircleIcon />
                      {requirement}
                    </RequirementItem>
                  ))}
                </RequirementsList>
                <ApplyButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Candidatar-se
                  <ArrowRightIcon size={16} />
                </ApplyButton>
              </OpportunityCard>
            ))}
          </OpportunitiesGrid>
        </Section>

        <PartnershipSection>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Parcerias
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Instituições e empresas podem se juntar a nós para ampliar nosso impacto
          </SectionSubtitle>
          
          <PartnershipGrid
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {partnerships.map((partnership, index) => (
              <PartnershipCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <partnership.icon />
                <h3>{partnership.title}</h3>
                <p>{partnership.description}</p>
              </PartnershipCard>
            ))}
          </PartnershipGrid>
        </PartnershipSection>

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
            Interessado em colaborar? Preencha o formulário abaixo
          </SectionSubtitle>
          
          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FormGroup>
              <Label>Nome Completo</Label>
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
              <Label>Área de Interesse</Label>
              <Select required>
                <option value="">Selecione uma opção</option>
                <option value="voluntario">Voluntário</option>
                <option value="educador">Educador</option>
                <option value="mentor">Mentor</option>
                <option value="embaixador">Embaixador</option>
                <option value="parceria">Parceria Institucional</option>
                <option value="outro">Outro</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Experiência</Label>
              <TextArea placeholder="Conte-nos sobre sua experiência e motivação para colaborar..." />
            </FormGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar Candidatura
            </SubmitButton>
          </ContactForm>
        </ContactSection>
      </CoworkContainer>
    </>
  );
};

export default Cowork; 