import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
    BookOpen,
    Download,
    ExternalLink,
    Star,
    Calendar,
    Tag
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: #34495e;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
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
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
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
  border: 2px solid #3498db;
  background: ${props => props.$active ? '#3498db' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#3498db'};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    background: #3498db;
    color: white;
    transform: translateY(-2px);
  }
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ResourceCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e1e8ed;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ResourceHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ResourceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const ResourceInfo = styled.div`
  flex: 1;
`;

const ResourceTitle = styled.h3`
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ResourceAuthor = styled.p`
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ResourceMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #7f8c8d;
  font-size: 0.8rem;
`;

const ResourceDescription = styled.p`
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ResourceTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const Tags = styled.span`
  background: #ecf0f1;
  color: #2c3e50;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ResourceActions = styled.div`
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
    background: #3498db;
    color: white;
    
    &:hover {
      background: #2980b9;
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
  color: #3498db;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #7f8c8d;
  font-size: 1rem;
`;

const Bibliography = () => {
  const categories = ['Todos', 'Paternidade', 'Família', 'Espiritualidade', 'Desenvolvimento Pessoal', 'Educação'];
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');
  const [searchTerm, setSearchTerm] = React.useState('');

  const resources = [
    {
      id: 1,
      title: 'O Poder da Paternidade',
      author: 'Dr. João Silva',
      type: 'Livro',
      year: '2023',
      rating: 4.8,
      description: 'Uma obra fundamental sobre o impacto transformador da paternidade ativa na sociedade moderna.',
      tags: ['Paternidade', 'Família', 'Desenvolvimento Pessoal'],
      downloadUrl: '#',
      externalUrl: '#',
      icon: <BookOpen />
    },
    {
      id: 2,
      title: 'Guia Prático para Pais',
      author: 'Maria Santos',
      type: 'E-book',
      year: '2023',
      rating: 4.6,
      description: 'Dicas práticas e estratégias para fortalecer o relacionamento pai-filho no dia a dia.',
      tags: ['Paternidade', 'Educação', 'Família'],
      downloadUrl: '#',
      externalUrl: '#',
      icon: <Download />
    },
    {
      id: 3,
      title: 'Família: Base da Sociedade',
      author: 'Prof. Carlos Mendes',
      type: 'Artigo Científico',
      year: '2022',
      rating: 4.7,
      description: 'Pesquisa sobre a importância da estrutura familiar na formação de cidadãos responsáveis.',
      tags: ['Família', 'Educação', 'Sociedade'],
      downloadUrl: '#',
      externalUrl: '#',
      icon: <ExternalLink />
    },
    {
      id: 4,
      title: 'Espiritualidade na Paternidade',
      author: 'Padre Antônio',
      type: 'Livro',
      year: '2023',
      rating: 4.9,
      description: 'Como a fé pode guiar e fortalecer o papel paterno na família e na comunidade.',
      tags: ['Espiritualidade', 'Paternidade', 'Família'],
      downloadUrl: '#',
      externalUrl: '#',
      icon: <BookOpen />
    },
    {
      id: 5,
      title: 'Workshop de Paternidade Consciente',
      author: 'Equipe Mundo Precisa de Pai',
      type: 'Material de Curso',
      year: '2023',
      rating: 4.8,
      description: 'Material completo do workshop sobre paternidade consciente e responsável.',
      tags: ['Paternidade', 'Educação', 'Workshop'],
      downloadUrl: '#',
      externalUrl: '#',
      icon: <Download />
    },
    {
      id: 6,
      title: 'Histórias de Transformação',
      author: 'Comunidade',
      type: 'Coletânea',
      year: '2023',
      rating: 4.7,
      description: 'Relatos inspiradores de pais que transformaram suas famílias e comunidades.',
      tags: ['Paternidade', 'Família', 'Inspiração'],
      downloadUrl: '#',
      externalUrl: '#',
      icon: <BookOpen />
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'Todos' || resource.tags.includes(selectedCategory);
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Bibliografia - O Mundo Precisa de um Pai</title>
        <meta name="description" content="Recursos literários, materiais educativos e referências sobre paternidade, família e desenvolvimento pessoal." />
      </Helmet>
      
      <Container>
        <Content>
          <Header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title>Biblioteca de Recursos</Title>
            <Subtitle>
              Explore nossa coleção de livros, artigos, materiais educativos e recursos 
              para fortalecer a paternidade e construir famílias mais sólidas.
            </Subtitle>
          </Header>

          <SearchSection>
            <SearchBar>
              <SearchInput
                type="text"
                placeholder="Buscar por título, autor ou conteúdo..."
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

          <ResourcesGrid>
            {filteredResources.map((resource, index) => (
              <ResourceCard
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ResourceHeader>
                  <ResourceIcon>
                    {resource.icon}
                  </ResourceIcon>
                  <ResourceInfo>
                    <ResourceTitle>{resource.title}</ResourceTitle>
                    <ResourceAuthor>por {resource.author}</ResourceAuthor>
                    <ResourceMeta>
                      <MetaItem>
                        <Tag size={14} />
                        {resource.type}
                      </MetaItem>
                      <MetaItem>
                        <Calendar size={14} />
                        {resource.year}
                      </MetaItem>
                      <MetaItem>
                        <Star size={14} />
                        {resource.rating}
                      </MetaItem>
                    </ResourceMeta>
                  </ResourceInfo>
                </ResourceHeader>

                <ResourceDescription>{resource.description}</ResourceDescription>

                <ResourceTags>
                  {resource.tags.map(tag => (
                    <Tags key={tag}>{tag}</Tags>
                  ))}
                </ResourceTags>

                <ResourceActions>
                  <ActionButton className="primary">
                    <Download size={16} />
                    Baixar
                  </ActionButton>
                  <ActionButton className="secondary">
                    <ExternalLink size={16} />
                    Ver Mais
                  </ActionButton>
                </ResourceActions>
              </ResourceCard>
            ))}
          </ResourcesGrid>

          <StatsSection>
            <h2>Nossa Biblioteca em Números</h2>
            <StatsGrid>
              <StatItem>
                <StatNumber>150+</StatNumber>
                <StatLabel>Recursos Disponíveis</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>25+</StatNumber>
                <StatLabel>Autores Colaboradores</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>10k+</StatNumber>
                <StatLabel>Downloads Realizados</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>4.8</StatNumber>
                <StatLabel>Avaliação Média</StatLabel>
              </StatItem>
            </StatsGrid>
          </StatsSection>
        </Content>
      </Container>
    </>
  );
};

export default Bibliography;
