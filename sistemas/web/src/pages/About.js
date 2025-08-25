import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Heart,
  Users,
  Target,
  Globe,
  Shield,
  Lightbulb
} from 'lucide-react';

const AboutContainer = styled.div`
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
    margin: 0 auto;
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

const ContentGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContentText = styled.div`
  h3 {
    color: #1E3A8A;
    margin-bottom: 1.5rem;
  }

  p {
    color: #6B7280;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  ul {
    color: #6B7280;
    line-height: 1.8;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const ContentImage = styled.div`
  background: linear-gradient(135deg, #1E3A8A 0%, #059669 100%);
  height: 400px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
  box-shadow: 0 20px 40px rgba(30, 58, 138, 0.2);
`;

const ValuesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
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
  }
`;

const TeamSection = styled(Section)`
  background: #F8FAFC;
`;

const TeamGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TeamCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    background: linear-gradient(135deg, #1E3A8A 0%, #059669 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 3rem;
  }

  h3 {
    color: #1E3A8A;
    margin-bottom: 0.5rem;
  }

  p {
    color: #6B7280;
    font-style: italic;
    margin-bottom: 1rem;
  }

  .description {
    color: #6B7280;
    line-height: 1.6;
  }
`;

const TimelineSection = styled(Section)`
  background: white;
`;

const Timeline = styled(motion.div)`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #1E3A8A;
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;

  &:nth-child(odd) {
    flex-direction: row;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 40px;
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 40px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    background: #1E3A8A;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineContent = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }

  h3 {
    color: #1E3A8A;
    margin-bottom: 0.5rem;
  }

  p {
    color: #6B7280;
    line-height: 1.6;
  }

  .date {
    color: #EA580C;
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const values = [
    {
      icon: Heart,
      title: 'Amor',
      description: 'Acreditamos que o amor é a base de toda paternidade saudável e responsável.'
    },
    {
      icon: Shield,
      title: 'Responsa-bilidade',
      description: 'Promovemos a responsabilidade paterna como pilar fundamental da família.'
    },
    {
      icon: Lightbulb,
      title: 'Educação',
      description: 'Educamos pais para desenvolverem suas habilidades e conhecimentos.'
    },
    {
      icon: Globe,
      title: 'Impacto Social',
      description: 'Buscamos transformar a sociedade através da paternidade consciente.'
    }
  ];

  const team = [
    {
      name: 'Ailton de Carvalho',
      role: 'Coordenador',
      description: 'Pai de três filhos, psicólogo e especialista em paternidade. Dedica sua vida a transformar a realidade dos pais brasileiros.'
    },
    {
      name: 'Jonas Augusto Kunzler',
      role: 'Coordenador de Tecnologia e Comunicação',
      description: 'Pai de três filhos, desenvolve soluções tecnológicas para o movimento.'
    },
    {
      name: 'Vittor Bruno Campos',
      role: 'Especialista em Comunicação',
      description: 'Pai de dois filhos, comunicador social, desenvolve estratégias para disseminar a importância da paternidade responsável.'
    }
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Fundação do Movimento',
      description: 'Nascimento da iniciativa com o objetivo de conscientizar sobre a importância da paternidade.'
    },
    {
      year: '2025',
      title: 'Primeiros Eventos',
      description: 'Realização dos primeiros workshops e encontros com pais em Goiânia.'
    },
    {
      year: '2025',
      title: 'Expansão Nacional',
      description: 'Ampliação das atividades para outras cidades brasileiras e criação de parcerias.'
    },
    {
      year: '2025',
      title: 'Reconhecimento',
      description: 'Prêmios e reconhecimentos por nosso trabalho em prol da paternidade consciente.'
    },
    {
      year: '2026',
      title: 'Futuro',
      description: 'Planejamento de novas iniciativas e expansão para outros países da América Latina.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sobre - O Mundo Precisa de um Pai</title>
        <meta name="description" content="Conheça nossa história, valores e missão de transformar a paternidade no Brasil." />
      </Helmet>

      <AboutContainer>
        <HeroSection>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nossa História
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            O movimento "O Mundo Precisa de um Pai" nasceu da convicção de que a paternidade 
            responsável é fundamental para o desenvolvimento saudável das crianças e da sociedade.
          </motion.p>
        </HeroSection>

        <Section>
          <ContentGrid
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <ContentText>
              <h3>Nossa Missão</h3>
              <p>
                Transformar a paternidade através da conscientização, educação e apoio, 
                criando um mundo onde todos os pais tenham as ferramentas e o conhecimento 
                para serem presentes, responsáveis e amorosos.
              </p>
              <p>
                Acreditamos que um pai presente e responsável pode mudar não apenas a vida 
                de seus filhos, mas também a sociedade como um todo.
              </p>
            </ContentText>
            <ContentImage>
              <Target />
            </ContentImage>
          </ContentGrid>
        </Section>

        <Section>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nossos Valores
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Guiamos nossas ações baseados em valores fundamentais que refletem nossa missão
          </SectionSubtitle>
          
          <ValuesGrid
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {values.map((value, index) => (
              <ValueCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <value.icon />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </ValueCard>
            ))}
          </ValuesGrid>
        </Section>

        <TeamSection>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nossa Equipe
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Conheça os profissionais dedicados que fazem este movimento acontecer
          </SectionSubtitle>
          
          <TeamGrid
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {team.map((member, index) => (
              <TeamCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div>
                  <Users />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="description">{member.description}</div>
              </TeamCard>
            ))}
          </TeamGrid>
        </TeamSection>

        <TimelineSection>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nossa Jornada
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Uma linha do tempo que mostra nossa evolução e conquistas ao longo dos anos
          </SectionSubtitle>
          
          <Timeline
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <TimelineContent>
                  <div className="date">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </AboutContainer>
    </>
  );
};

export default About; 