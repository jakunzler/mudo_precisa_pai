import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Heart, 
  Users, 
  Target, 
  BookOpen, 
  ArrowRight,
  Baby,
  Brain
} from 'lucide-react';

const HomeContainer = styled.div`
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

const FeaturesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled(motion.div)`
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

const StatsSection = styled(Section)`
  background: #F8FAFC;
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);

  h3 {
    font-size: 2.5rem;
    color: #1E3A8A;
    margin-bottom: 0.5rem;
  }

  p {
    color: #6B7280;
    font-weight: 500;
  }
`;

const EventsSection = styled(Section)`
  background: white;
`;

const EventsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const EventCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const EventImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #1E3A8A 0%, #059669 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
`;

const EventContent = styled.div`
  padding: 1.5rem;

  h3 {
    color: #1E3A8A;
    margin-bottom: 1rem;
  }

  p {
    color: #6B7280;
    margin-bottom: 1rem;
  }
`;

const EventMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #6B7280;
  font-size: 0.9rem;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #1E3A8A 0%, #059669 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
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

const Home = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: Heart,
      title: 'Conscientização',
      description: 'Promovemos a importância da paternidade responsável e ativa na sociedade moderna.'
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Construímos uma rede de apoio para pais e famílias em todo o Brasil.'
    },
    {
      icon: BookOpen,
      title: 'Educação',
      description: 'Oferecemos recursos e conhecimento para pais desenvolverem suas habilidades.'
    },
    {
      icon: Target,
      title: 'Impacto Social',
      description: 'Trabalhamos para transformar a realidade das famílias brasileiras.'
    },
    {
      icon: Baby,
      title: 'Famílias Atendidas',
      description: 'Atendemos famílias em todo o Brasil.'
    },
    {
      icon: Brain,
      title: 'Atendimento Psicossocial',
      description: 'Oferecemos atendimento psicossocial para pais e famílias.'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Pais Impactados' },
    { number: '50+', label: 'Parceiros' },
    { number: '100+', label: 'Eventos Realizados' },
    { number: '95%', label: 'Satisfação' }
  ];

  const events = [
    {
      title: 'O Mundo Precisa de Um Pai',
      description: 'Aprenda técnicas práticas para ser um pai mais presente e responsável.',
      date: '16 e 17 de Agosto de 2025',
      location: 'Igreja Cristã Evangélica Boas Novas - Taguatinga DF',
      time: '19:00 - 21:00'
    },
    {
      title: 'Palestra: Educação Paterna',
      description: 'Porque nos resta então reunir o que de mais perdão, amor e graça, encontrados nos atributos do Pai Celestial. ',
      date: '17 de Agosto de 2025',
      location: 'https://www.youtube.com/watch?v=xoXiorwVoJg',
      time: '10:00 e 19:00'
    },
    {
      title: 'Cuidando de Quem Cuida',
      description: 'Os padrões de relacionamento atuais tem raízes nas primeiras experiências de afeto da vida.',
      date: '13 de Setembro de 2025',
      location: 'Edifício London Eye',
      time: '8:00 - 18:00'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Início - O Mundo Precisa de um Pai</title>
        <meta name="description" content="Conheça o movimento que está transformando a paternidade no Brasil através de conscientização, educação e apoio." />
      </Helmet>

      <HomeContainer>
        <HeroSection>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transformando a Paternidade
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Junte-se ao movimento que está mudando a forma como vemos e praticamos a paternidade no Brasil.
          </motion.p>
          <CTAButton
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/sponsorship'}
          >
            Participe Agora
            <ArrowRight size={20} />
          </CTAButton>
        </HeroSection>

        <Section>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nossos Pilares
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Trabalhamos em quatro pilares fundamentais para transformar a paternidade no Brasil
          </SectionSubtitle>
          
          <FeaturesGrid
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <feature.icon />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Section>

        <StatsSection>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nossos Números
          </SectionTitle>
          
          <StatsGrid
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </StatCard>
            ))}
          </StatsGrid>
        </StatsSection>

        <EventsSection>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nossos Eventos
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Participe dos nossos eventos e workshops sobre paternidade
          </SectionSubtitle>
          
          <EventsGrid
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {events.map((event, index) => (
              <EventCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <EventImage>
                  <BookOpen size={24} />
                </EventImage>
                <EventContent>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <EventMeta>
                    <BookOpen size={16} />
                    <span>{event.date}</span>
                  </EventMeta>
                  <EventMeta>
                    <Target size={16} />
                    {event.location.includes('http') ? (
                      <a href={event.location} target="_blank" rel="noopener noreferrer">
                        <span>Link</span>
                      </a>
                    ) : (
                      <span>{event.location}</span>
                    )}
                  </EventMeta>
                  <EventMeta>
                    <Heart size={16} />
                    <span>{event.time}</span>
                  </EventMeta>
                </EventContent>
              </EventCard>
            ))}
          </EventsGrid>
        </EventsSection>
      </HomeContainer>
    </>
  );
};

export default Home; 