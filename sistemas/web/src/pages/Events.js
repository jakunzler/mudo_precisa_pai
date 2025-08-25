import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
    Calendar,
    MapPin,
    Clock,
    Users,
    Star,
    ArrowRight, Heart, Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
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
  border: 2px solid #667eea;
  background: ${props => props.$active ? '#667eea' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#667eea'};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
  }
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const EventCard = styled(motion.div)`
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

const EventImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  position: relative;
`;

const EventBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => {
    if (props.$type === 'online') return '#27ae60';
    if (props.$type === 'presencial') return '#e74c3c';
    if (props.$type === 'híbrido') return '#f39c12';
    return '#95a5a6';
  }};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const EventContent = styled.div`
  padding: 2rem;
`;

const EventTitle = styled.h3`
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.3;
`;

const EventDescription = styled.p`
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const EventMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #7f8c8d;
  font-size: 0.9rem;
`;

const EventTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
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

const EventActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  
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
    background: #667eea;
    color: white;
    
    &:hover {
      background: #5a6fd8;
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

const FeaturedEvent = styled(motion.div)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
`;

const FeaturedContent = styled.div`
  position: relative;
  z-index: 1;
`;

const FeaturedEventTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const FeaturedEventDescription = styled.p`
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

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #7f8c8d;
  font-size: 1rem;
`;

const Events = () => {
  const categories = ['Todos', 'Workshops', 'Palestras', 'Retiros', 'Conferências', 'Encontros'];
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const events = [
    {
      id: 1,
      title: 'Workshop de Paternidade Consciente',
      description: 'Um dia intensivo de reflexão e práticas para pais que desejam fortalecer seu papel na família.',
      type: 'presencial',
      date: '15 de Dezembro, 2024',
      time: '09:00 - 18:00',
      location: 'Centro de Eventos São Paulo',
      capacity: 50,
      registered: 35,
      tags: ['Workshop', 'Paternidade', 'Família'],
      featured: true,
      icon: <Calendar />
    },
    {
      id: 2,
      title: 'Palestra: O Papel do Pai na Educação',
      description: 'Como os pais podem contribuir ativamente para o desenvolvimento educacional de seus filhos.',
      type: 'online',
      date: '20 de Dezembro, 2024',
      time: '19:00 - 21:00',
      location: 'Zoom Meeting',
      capacity: 200,
      registered: 120,
      tags: ['Palestra', 'Educação', 'Online'],
      featured: false,
      icon: <Users />
    },
    {
      id: 3,
      title: 'Retiro de Pais e Filhos',
      description: 'Um fim de semana de conexão e fortalecimento dos laços familiares em meio à natureza.',
      type: 'presencial',
      date: '25-27 de Janeiro, 2025',
      time: 'Sexta 18:00 - Domingo 12:00',
      location: 'Sítio Recanto da Paz',
      capacity: 30,
      registered: 25,
      tags: ['Retiro', 'Família', 'Natureza'],
      featured: false,
      icon: <MapPin />
    },
    {
      id: 4,
      title: 'Conferência Nacional de Paternidade',
      description: 'O maior evento sobre paternidade do Brasil, com palestrantes nacionais e internacionais.',
      type: 'híbrido',
      date: '10-12 de Março, 2025',
      time: '09:00 - 18:00',
      location: 'Centro de Convenções + Online',
      capacity: 1000,
      registered: 650,
      tags: ['Conferência', 'Nacional', 'Híbrido'],
      featured: false,
      icon: <Star />
    },
    {
      id: 5,
      title: 'Encontro de Pais Solteiros',
      description: 'Um espaço de apoio e troca de experiências para pais que estão criando filhos sozinhos.',
      type: 'presencial',
      date: '5 de Fevereiro, 2025',
      time: '19:00 - 22:00',
      location: 'Centro Comunitário',
      capacity: 40,
      registered: 28,
      tags: ['Encontro', 'Apoio', 'Comunidade'],
      featured: false,
      icon: <Heart />
    },
    {
      id: 6,
      title: 'Webinar: Paternidade na Era Digital',
      description: 'Como equilibrar o uso da tecnologia e manter uma presença ativa na vida dos filhos.',
      type: 'online',
      date: '30 de Janeiro, 2025',
      time: '20:00 - 21:30',
      location: 'YouTube Live',
      capacity: 500,
      registered: 320,
      tags: ['Webinar', 'Tecnologia', 'Online'],
      featured: false,
      icon: <Share2 />
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'Todos' || event.tags.includes(selectedCategory);
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredEvent = events.find(event => event.featured);

  return (
    <>
      <Helmet>
        <title>Eventos - O Mundo Precisa de um Pai</title>
        <meta name="description" content="Participe de nossos eventos, workshops, palestras e encontros para fortalecer a paternidade e construir famílias mais sólidas." />
      </Helmet>
      
      <Container>
        <Content>
          <Header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title>Eventos e Encontros</Title>
            <Subtitle>
              Participe de nossos eventos para fortalecer a paternidade, 
              conectar-se com outros pais e transformar sua família.
            </Subtitle>
          </Header>

          {featuredEvent && (
            <FeaturedSection>
              <FeaturedTitle>Evento em Destaque</FeaturedTitle>
              <FeaturedEvent
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <FeaturedContent>
                  <FeaturedEventTitle>{featuredEvent.title}</FeaturedEventTitle>
                  <FeaturedEventDescription>{featuredEvent.description}</FeaturedEventDescription>
                  <ActionButton className="primary">
                    Inscrever-se
                    <ArrowRight size={16} />
                  </ActionButton>
                </FeaturedContent>
              </FeaturedEvent>
            </FeaturedSection>
          )}

          <SearchSection>
            <SearchBar>
              <SearchInput
                type="text"
                placeholder="Buscar eventos..."
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

          <EventsGrid>
            {filteredEvents.filter(event => !event.featured).map((event, index) => (
              <EventCard
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <EventImage>
                  {event.icon}
                  <EventBadge $type={event.type}>
                    {event.type}
                  </EventBadge>
                </EventImage>
                
                <EventContent>
                  <EventTitle>{event.title}</EventTitle>
                  <EventDescription>{event.description}</EventDescription>
                  
                  <EventMeta>
                    <MetaItem>
                      <Calendar size={16} />
                      {event.date}
                    </MetaItem>
                    <MetaItem>
                      <Clock size={16} />
                      {event.time}
                    </MetaItem>
                    <MetaItem>
                      <MapPin size={16} />
                      {event.location}
                    </MetaItem>
                    <MetaItem>
                      <Users size={16} />
                      {event.registered}/{event.capacity} inscritos
                    </MetaItem>
                  </EventMeta>

                  <EventTags>
                    {event.tags.map(tag => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </EventTags>

                  <EventActions>
                    <ActionButton className="primary">
                      Inscrever-se
                      <ArrowRight size={16} />
                    </ActionButton>
                    <ActionButton className="icon">
                      <Heart size={16} />
                    </ActionButton>
                    <ActionButton className="icon">
                      <Share2 size={16} />
                    </ActionButton>
                  </EventActions>
                </EventContent>
              </EventCard>
            ))}
          </EventsGrid>

          <StatsSection>
            <h2>Nossos Eventos em Números</h2>
            <StatsGrid>
              <StatItem>
                <StatNumber>50+</StatNumber>
                <StatLabel>Eventos Realizados</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>5k+</StatNumber>
                <StatLabel>Participantes</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>15</StatNumber>
                <StatLabel>Cidades Atendidas</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>4.9</StatNumber>
                <StatLabel>Avaliação Média</StatLabel>
              </StatItem>
            </StatsGrid>
          </StatsSection>
        </Content>
      </Container>
    </>
  );
};

export default Events;
