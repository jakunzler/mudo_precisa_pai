import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
    User,
    Star,
    MessageCircle,
    Calendar,
    ArrowRight,
    Heart
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
  color: white;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.9;
`;

const SearchSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
`;

const SearchBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  border: 2px solid #e1e8ed;
  border-radius: 50px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #11998e;
    box-shadow: 0 0 0 3px rgba(17, 153, 142, 0.1);
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: 2px solid #11998e;
  background: ${props => props.$active ? '#11998e' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#11998e'};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    background: #11998e;
    color: white;
    transform: translateY(-2px);
  }
`;

const MentorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const MentorCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e1e8ed;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const MentorHeader = styled.div`
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  padding: 2rem;
  color: white;
  text-align: center;
  position: relative;
`;

const MentorAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  border: 4px solid rgba(255, 255, 255, 0.3);
`;

const MentorName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const MentorTitle = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 1rem;
`;

const MentorRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
`;

const MentorContent = styled.div`
  padding: 2rem;
`;

const MentorDescription = styled.p`
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const MentorExpertise = styled.div`
  margin-bottom: 1.5rem;
`;

const ExpertiseTitle = styled.h4`
  color: #2c3e50;
  font-size: 1rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
`;

const ExpertiseTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: #ecf0f1;
  color: #2c3e50;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const MentorStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
`;

const StatNumber = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #11998e;
  margin-bottom: 0.3rem;
`;

const StatLabel = styled.div`
  color: #7f8c8d;
  font-size: 0.8rem;
`;

const MentorActions = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &.primary {
    background: #11998e;
    color: white;
    
    &:hover {
      background: #0d7a6f;
      transform: translateY(-2px);
    }
  }
  
  &.secondary {
    background: #ecf0f1;
    color: #2c3e50;
    
    &:hover {
      background: #d5dbdb;
      transform: translateY(-2px);
    }
  }
  
  &.icon {
    flex: none;
    width: 50px;
    height: 50px;
    padding: 0;
    border-radius: 50%;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const FeaturedSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
`;

const FeaturedTitle = styled.h2`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const FeaturedMentor = styled(motion.div)`
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: white;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const FeaturedContent = styled.div`
  position: relative;
  z-index: 1;
`;

const FeaturedMentorName = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const FeaturedMentorDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const StatsSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StatItemLarge = styled.div`
  text-align: center;
`;

const StatNumberLarge = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #11998e;
  margin-bottom: 0.5rem;
`;

const StatLabelLarge = styled.div`
  color: #7f8c8d;
  font-size: 1rem;
`;

const Mentoring = () => {
  const categories = ['Todos', 'Paternidade', 'Família', 'Educação', 'Espiritualidade', 'Desenvolvimento Pessoal'];
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const mentors = [
    {
      id: 1,
      name: 'Dr. Carlos Mendes',
      title: 'Psicólogo Clínico e Especialista em Família',
      rating: 4.9,
      description: 'Especialista em terapia familiar com mais de 15 anos de experiência. Ajuda pais a desenvolverem relacionamentos mais saudáveis com seus filhos.',
      expertise: ['Paternidade', 'Terapia Familiar', 'Comunicação'],
      sessions: 150,
      experience: '15 anos',
      availability: 'Disponível',
      featured: true
    },
    {
      id: 2,
      name: 'Maria Santos',
      title: 'Coach de Paternidade e Educadora',
      rating: 4.8,
      description: 'Coach certificada que trabalha com pais para melhorar suas habilidades parentais e criar ambientes familiares mais harmoniosos.',
      expertise: ['Coaching', 'Educação', 'Disciplina Positiva'],
      sessions: 120,
      experience: '8 anos',
      availability: 'Disponível'
    },
    {
      id: 3,
      name: 'Padre Antônio Silva',
      title: 'Capelão e Conselheiro Espiritual',
      rating: 4.9,
      description: 'Oferece orientação espiritual e conselhos baseados em valores cristãos para fortalecer o papel paterno na família.',
      expertise: ['Espiritualidade', 'Valores', 'Fé'],
      sessions: 200,
      experience: '20 anos',
      availability: 'Disponível'
    },
    {
      id: 4,
      name: 'Prof. João Oliveira',
      title: 'Pedagogo e Especialista em Educação Infantil',
      rating: 4.7,
      description: 'Especialista em desenvolvimento infantil que orienta pais sobre as melhores práticas educativas para cada fase da vida.',
      expertise: ['Educação Infantil', 'Desenvolvimento', 'Aprendizagem'],
      sessions: 90,
      experience: '12 anos',
      availability: 'Disponível'
    },
    {
      id: 5,
      name: 'Roberto Costa',
      title: 'Empresário e Pai de 3 Filhos',
      rating: 4.8,
      description: 'Pai experiente que compartilha suas vivências e estratégias práticas para conciliar carreira e paternidade.',
      expertise: ['Carreira', 'Paternidade Prática', 'Equilíbrio'],
      sessions: 80,
      experience: '18 anos',
      availability: 'Disponível'
    },
    {
      id: 6,
      name: 'Dr. Fernando Lima',
      title: 'Médico e Especialista em Saúde Mental',
      rating: 4.6,
      description: 'Médico psiquiatra que trabalha com pais para lidar com questões de saúde mental e bem-estar emocional.',
      expertise: ['Saúde Mental', 'Bem-estar', 'Psiquiatria'],
      sessions: 110,
      experience: '10 anos',
      availability: 'Disponível'
    }
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesCategory = selectedCategory === 'Todos' || mentor.expertise.includes(selectedCategory);
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredMentor = mentors.find(mentor => mentor.featured);

  return (
    <>
      <Helmet>
        <title>Mentoria - O Mundo Precisa de um Pai</title>
        <meta name="description" content="Conecte-se com mentores experientes para receber orientação personalizada sobre paternidade, família e desenvolvimento pessoal." />
      </Helmet>
      
      <Container>
        <Content>
          <Header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title>Programa de Mentoria</Title>
            <Subtitle>
              Conecte-se com mentores experientes e receba orientação personalizada 
              para fortalecer sua jornada como pai e líder familiar.
            </Subtitle>
          </Header>

          {featuredMentor && (
            <FeaturedSection>
              <FeaturedTitle>Mentor em Destaque</FeaturedTitle>
              <FeaturedMentor
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <FeaturedContent>
                  <FeaturedMentorName>{featuredMentor.name}</FeaturedMentorName>
                  <FeaturedMentorDescription>{featuredMentor.description}</FeaturedMentorDescription>
                  <ActionButton className="primary">
                    Agendar Sessão
                    <ArrowRight size={16} />
                  </ActionButton>
                </FeaturedContent>
              </FeaturedMentor>
            </FeaturedSection>
          )}

          <SearchSection>
            <SearchBar>
              <SearchInput
                type="text"
                placeholder="Buscar mentores..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchBar>
            
            <FilterContainer>
              {categories.map(category => (
                <FilterButton
                  key={category}
                  $active={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </FilterButton>
              ))}
            </FilterContainer>
          </SearchSection>

          <MentorsGrid>
            {filteredMentors.filter(mentor => !mentor.featured).map((mentor, index) => (
              <MentorCard
                key={mentor.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MentorHeader>
                  <MentorAvatar>
                    <User />
                  </MentorAvatar>
                  <MentorName>{mentor.name}</MentorName>
                  <MentorTitle>{mentor.title}</MentorTitle>
                  <MentorRating>
                    <Star size={16} />
                    {mentor.rating}
                  </MentorRating>
                </MentorHeader>
                
                <MentorContent>
                  <MentorDescription>{mentor.description}</MentorDescription>
                  
                  <MentorExpertise>
                    <ExpertiseTitle>Especialidades:</ExpertiseTitle>
                    <ExpertiseTags>
                      {mentor.expertise.map(skill => (
                        <Tag key={skill}>{skill}</Tag>
                      ))}
                    </ExpertiseTags>
                  </MentorExpertise>

                  <MentorStats>
                    <StatItem>
                      <StatNumber>{mentor.sessions}</StatNumber>
                      <StatLabel>Sessões</StatLabel>
                    </StatItem>
                    <StatItem>
                      <StatNumber>{mentor.experience}</StatNumber>
                      <StatLabel>Experiência</StatLabel>
                    </StatItem>
                    <StatItem>
                      <StatNumber>{mentor.availability === 'Disponível' ? '✓' : '✗'}</StatNumber>
                      <StatLabel>Disponível</StatLabel>
                    </StatItem>
                  </MentorStats>

                  <MentorActions>
                    <ActionButton className="primary">
                      <Calendar size={16} />
                      Agendar
                    </ActionButton>
                    <ActionButton className="icon">
                      <MessageCircle size={16} />
                    </ActionButton>
                    <ActionButton className="icon">
                      <Heart size={16} />
                    </ActionButton>
                  </MentorActions>
                </MentorContent>
              </MentorCard>
            ))}
          </MentorsGrid>

          <StatsSection>
            <h2>Nossa Mentoria em Números</h2>
            <StatsGrid>
              <StatItemLarge>
                <StatNumberLarge>25+</StatNumberLarge>
                <StatLabelLarge>Mentores Certificados</StatLabelLarge>
              </StatItemLarge>
              <StatItemLarge>
                <StatNumberLarge>1.2k+</StatNumberLarge>
                <StatLabelLarge>Sessões Realizadas</StatLabelLarge>
              </StatItemLarge>
              <StatItemLarge>
                <StatNumberLarge>95%</StatNumberLarge>
                <StatLabelLarge>Satisfação dos Pais</StatLabelLarge>
              </StatItemLarge>
              <StatItemLarge>
                <StatNumberLarge>4.8</StatNumberLarge>
                <StatLabelLarge>Avaliação Média</StatLabelLarge>
              </StatItemLarge>
            </StatsGrid>
          </StatsSection>
        </Content>
      </Container>
    </>
  );
};

export default Mentoring;
