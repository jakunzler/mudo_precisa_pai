import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
    Users,
    MessageCircle,
    Heart,
    Share2,
    BookOpen,
    Calendar,
    Award,
    TrendingUp,
    UserPlus,
    Shield
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
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
    border-color: #ff6b6b;
    box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
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
  border: 2px solid #ff6b6b;
  background: ${props => props.$active ? '#ff6b6b' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#ff6b6b'};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    background: #ff6b6b;
    color: white;
    transform: translateY(-2px);
  }
`;

const CommunityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const CommunityCard = styled(motion.div)`
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

const CommunityHeader = styled.div`
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
  padding: 2rem;
  color: white;
  text-align: center;
  position: relative;
`;

const CommunityIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.2);
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border: 3px solid rgba(255, 255, 255, 0.3);
`;

const CommunityName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const CommunityDescription = styled.p`
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.4;
`;

const CommunityContent = styled.div`
  padding: 2rem;
`;

const CommunityStats = styled.div`
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
  color: #ff6b6b;
  margin-bottom: 0.3rem;
`;

const StatLabel = styled.div`
  color: #7f8c8d;
  font-size: 0.8rem;
`;

const CommunityTags = styled.div`
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

const CommunityActions = styled.div`
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
    background: #ff6b6b;
    color: white;
    
    &:hover {
      background: #e55a5a;
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

const FeaturedCommunity = styled(motion.div)`
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
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

const FeaturedCommunityName = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const FeaturedCommunityDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ForumsSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
`;

const ForumsTitle = styled.h2`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ForumsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ForumCard = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid #e1e8ed;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ForumHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ForumIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`;

const ForumInfo = styled.div`
  flex: 1;
`;

const ForumName = styled.h4`
  color: #2c3e50;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  font-weight: 600;
`;

const ForumStats = styled.div`
  display: flex;
  gap: 1rem;
  color: #7f8c8d;
  font-size: 0.8rem;
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
  color: #ff6b6b;
  margin-bottom: 0.5rem;
`;

const StatLabelLarge = styled.div`
  color: #7f8c8d;
  font-size: 1rem;
`;

const Community = () => {
  const categories = ['Todos', 'Paternidade', 'Família', 'Educação', 'Espiritualidade', 'Apoio'];
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const communities = [
    {
      id: 1,
      name: 'Pais em Ação',
      description: 'Comunidade para pais que querem ser mais ativos e presentes na vida de seus filhos.',
      type: 'Geral',
      members: 2500,
      posts: 1200,
      activity: 'Alta',
      tags: ['Paternidade', 'Família', 'Atividade'],
      featured: true,
      icon: <Users />
    },
    {
      id: 2,
      name: 'Pais Solteiros Unidos',
      description: 'Apoio e troca de experiências para pais que estão criando filhos sozinhos.',
      type: 'Apoio',
      members: 800,
      posts: 450,
      activity: 'Média',
      tags: ['Apoio', 'Pais Solteiros', 'Comunidade'],
      featured: false,
      icon: <Heart />
    },
    {
      id: 3,
      name: 'Paternidade na Fé',
      description: 'Comunidade para pais que desejam fortalecer sua espiritualidade e valores cristãos.',
      type: 'Espiritualidade',
      members: 1200,
      posts: 800,
      activity: 'Alta',
      tags: ['Espiritualidade', 'Fé', 'Valores'],
      featured: false,
      icon: <Shield />
    },
    {
      id: 4,
      name: 'Pais Educadores',
      description: 'Foco na educação e desenvolvimento dos filhos, compartilhando métodos e experiências.',
      type: 'Educação',
      members: 1800,
      posts: 950,
      activity: 'Média',
      tags: ['Educação', 'Desenvolvimento', 'Aprendizagem'],
      featured: false,
      icon: <BookOpen />
    },
    {
      id: 5,
      name: 'Pais Empresários',
      description: 'Como conciliar carreira e paternidade, compartilhando estratégias e experiências.',
      type: 'Carreira',
      members: 650,
      posts: 320,
      activity: 'Média',
      tags: ['Carreira', 'Paternidade', 'Equilíbrio'],
      featured: false,
      icon: <TrendingUp />
    },
    {
      id: 6,
      name: 'Pais de Adolescentes',
      description: 'Desafios específicos da paternidade na adolescência e como lidar com essa fase.',
      type: 'Específico',
      members: 950,
      posts: 600,
      activity: 'Alta',
      tags: ['Adolescência', 'Desafios', 'Família'],
      featured: false,
      icon: <UserPlus />
    }
  ];

  const forums = [
    {
      id: 1,
      name: 'Dúvidas e Conselhos',
      description: 'Tire suas dúvidas e receba conselhos de outros pais',
      topics: 450,
      posts: 1200,
      icon: <MessageCircle />
    },
    {
      id: 2,
      name: 'Atividades com Filhos',
      description: 'Ideias e sugestões de atividades para fazer com os filhos',
      topics: 320,
      posts: 850,
      icon: <Calendar />
    },
    {
      id: 3,
      name: 'Desafios da Paternidade',
      description: 'Compartilhe e discuta os desafios que enfrenta como pai',
      topics: 280,
      posts: 720,
      icon: <Award />
    },
    {
      id: 4,
      name: 'Recursos e Materiais',
      description: 'Compartilhe livros, artigos e materiais úteis',
      topics: 200,
      posts: 550,
      icon: <BookOpen />
    }
  ];

  const filteredCommunities = communities.filter(community => {
    const matchesCategory = selectedCategory === 'Todos' || community.tags.includes(selectedCategory);
    const matchesSearch = community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         community.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredCommunity = communities.find(community => community.featured);

  return (
    <>
      <Helmet>
        <title>Comunidade - O Mundo Precisa de um Pai</title>
        <meta name="description" content="Conecte-se com outros pais, participe de fóruns e faça parte de uma comunidade que apoia e fortalece a paternidade." />
      </Helmet>
      
      <Container>
        <Content>
          <Header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title>Nossa Comunidade</Title>
            <Subtitle>
              Conecte-se com outros pais, participe de fóruns e faça parte de uma 
              comunidade que apoia e fortalece a paternidade.
            </Subtitle>
          </Header>

          {featuredCommunity && (
            <FeaturedSection>
              <FeaturedTitle>Comunidade em Destaque</FeaturedTitle>
              <FeaturedCommunity
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <FeaturedContent>
                  <FeaturedCommunityName>{featuredCommunity.name}</FeaturedCommunityName>
                  <FeaturedCommunityDescription>{featuredCommunity.description}</FeaturedCommunityDescription>
                  <ActionButton className="primary">
                    Participar
                    <Users size={16} />
                  </ActionButton>
                </FeaturedContent>
              </FeaturedCommunity>
            </FeaturedSection>
          )}

          <SearchSection>
            <SearchBar>
              <SearchInput
                type="text"
                placeholder="Buscar comunidades..."
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

          <CommunityGrid>
            {filteredCommunities.filter(community => !community.featured).map((community, index) => (
              <CommunityCard
                key={community.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CommunityHeader>
                  <CommunityIcon>
                    {community.icon}
                  </CommunityIcon>
                  <CommunityName>{community.name}</CommunityName>
                  <CommunityDescription>{community.description}</CommunityDescription>
                </CommunityHeader>
                
                <CommunityContent>
                  <CommunityStats>
                    <StatItem>
                      <StatNumber>{community.members}</StatNumber>
                      <StatLabel>Membros</StatLabel>
                    </StatItem>
                    <StatItem>
                      <StatNumber>{community.posts}</StatNumber>
                      <StatLabel>Posts</StatLabel>
                    </StatItem>
                    <StatItem>
                      <StatNumber>{community.activity}</StatNumber>
                      <StatLabel>Atividade</StatLabel>
                    </StatItem>
                  </CommunityStats>

                  <CommunityTags>
                    {community.tags.map(tag => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </CommunityTags>

                  <CommunityActions>
                    <ActionButton className="primary">
                      <Users size={16} />
                      Participar
                    </ActionButton>
                    <ActionButton className="icon">
                      <MessageCircle size={16} />
                    </ActionButton>
                    <ActionButton className="icon">
                      <Share2 size={16} />
                    </ActionButton>
                  </CommunityActions>
                </CommunityContent>
              </CommunityCard>
            ))}
          </CommunityGrid>

          <ForumsSection>
            <ForumsTitle>Fóruns de Discussão</ForumsTitle>
            <ForumsGrid>
              {forums.map(forum => (
                <ForumCard key={forum.id}>
                  <ForumHeader>
                    <ForumIcon>
                      {forum.icon}
                    </ForumIcon>
                    <ForumInfo>
                      <ForumName>{forum.name}</ForumName>
                      <ForumStats>
                        <span>{forum.topics} tópicos</span>
                        <span>{forum.posts} posts</span>
                      </ForumStats>
                    </ForumInfo>
                  </ForumHeader>
                  <p style={{ color: '#7f8c8d', fontSize: '0.9rem', lineHeight: '1.4' }}>
                    {forum.description}
                  </p>
                </ForumCard>
              ))}
            </ForumsGrid>
          </ForumsSection>

          <StatsSection>
            <h2>Nossa Comunidade em Números</h2>
            <StatsGrid>
              <StatItemLarge>
                <StatNumberLarge>8k+</StatNumberLarge>
                <StatLabelLarge>Membros Ativos</StatLabelLarge>
              </StatItemLarge>
              <StatItemLarge>
                <StatNumberLarge>6</StatNumberLarge>
                <StatLabelLarge>Comunidades</StatLabelLarge>
              </StatItemLarge>
              <StatItemLarge>
                <StatNumberLarge>4.2k+</StatNumberLarge>
                <StatLabelLarge>Posts Mensais</StatLabelLarge>
              </StatItemLarge>
              <StatItemLarge>
                <StatNumberLarge>95%</StatNumberLarge>
                <StatLabelLarge>Satisfação</StatLabelLarge>
              </StatItemLarge>
            </StatsGrid>
          </StatsSection>
        </Content>
      </Container>
    </>
  );
};

export default Community;
