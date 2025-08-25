import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Share2, QrCode, Heart, X, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const WidgetContainer = styled(motion.div)`
  background: white;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 2px solid #e1e8ed;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }
`;

const WidgetHeader = styled.div`
  background: linear-gradient(135deg, #1E3A8A 0%, #059669 100%);
  color: white;
  padding: 2rem;
  text-align: center;
  position: relative;
`;

const HeaderTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const HeaderSubtitle = styled.p`
  opacity: 0.9;
  font-size: 1rem;
`;

const PixImageContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background: #f8f9fa;
`;

const PixImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const PixDetails = styled.div`
  padding: 2rem;
  background: white;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
  margin-bottom: 1rem;
  border: 1px solid #e1e8ed;
`;

const DetailLabel = styled.span`
  font-weight: 600;
  color: #2c3e50;
`;

const DetailValue = styled.span`
  color: #1E3A8A;
  font-weight: 500;
  font-family: 'Courier New', monospace;
`;

const CopyButton = styled.button`
  background: #1E3A8A;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #1e40af;
    transform: translateY(-2px);
  }
  
  &.copied {
    background: #059669;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 2rem 2rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 1rem 1.5rem;
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
    background: #1E3A8A;
    color: white;
    
    &:hover {
      background: #1e40af;
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

const Modal = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  margin-top: 50px;
  background: white;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;

const ModalHeader = styled.div`
  background: linear-gradient(135deg, #1E3A8A 0%, #059669 100%);
  color: white;
  padding: 2rem;
  border-radius: 20px 20px 0 0;
  text-align: center;
`;

const ModalTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
`;

const ModalSubtitle = styled.p`
  opacity: 0.9;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const InstructionStep = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
`;

const StepNumber = styled.div`
  background: #1E3A8A;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h4`
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const StepDescription = styled.p`
  color: #6B7280;
  line-height: 1.5;
  font-size: 0.9rem;
`;

const PixContributionWidget = ({ 
  title = "Contribua com PIX", 
  subtitle = "Ajude-nos a transformar a paternidade no Brasil",
  showImage = true,
  variant = "default" // default, compact, featured
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedName, setCopiedName] = useState(false);

  const pixData = {
    key: "(62) 998700425",
    name: "AILTON DE CARVALHO SOARES",
    keyType: "Telefone"
  };

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'key') {
        setCopiedKey(true);
        setTimeout(() => setCopiedKey(false), 2000);
      } else {
        setCopiedName(true);
        setTimeout(() => setCopiedName(false), 2000);
      }
      toast.success(`${type === 'key' ? 'Chave PIX' : 'Nome'} copiado!`);
    } catch (err) {
      toast.error('Erro ao copiar. Tente novamente.');
    }
  };

  const sharePix = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Contribua com o Movimento "O Mundo Precisa de um Pai"',
          text: `Chave PIX: ${pixData.key}\nNome: ${pixData.name}`,
          url: window.location.href
        });
      } catch (err) {
        // Usuário cancelou o compartilhamento
      }
    } else {
      // Fallback para navegadores que não suportam Web Share API
      copyToClipboard(`${pixData.key} - ${pixData.name}`, 'key');
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (variant === 'compact') {
    return (
      <WidgetContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <WidgetHeader>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderSubtitle>{subtitle}</HeaderSubtitle>
        </WidgetHeader>
        
        <PixDetails>
          <DetailItem>
            <DetailLabel>Chave PIX:</DetailLabel>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <DetailValue>{pixData.key}</DetailValue>
              <CopyButton
                onClick={() => copyToClipboard(pixData.key, 'key')}
                className={copiedKey ? 'copied' : ''}
              >
                {copiedKey ? <CheckCircle size={16} /> : <Copy size={16} />}
                {copiedKey ? 'Copiado!' : 'Copiar'}
              </CopyButton>
            </div>
          </DetailItem>
          
          <DetailItem>
            <DetailLabel>Nome:</DetailLabel>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <DetailValue>{pixData.name}</DetailValue>
              <CopyButton
                onClick={() => copyToClipboard(pixData.name, 'name')}
                className={copiedName ? 'copied' : ''}
              >
                {copiedName ? <CheckCircle size={16} /> : <Copy size={16} />}
                {copiedName ? 'Copiado!' : 'Copiar'}
              </CopyButton>
            </div>
          </DetailItem>
        </PixDetails>
        
        <ActionButtons>
          <ActionButton className="primary" onClick={openModal}>
            <QrCode size={16} />
            Ver QR Code
          </ActionButton>
          <ActionButton className="secondary" onClick={sharePix}>
            <Share2 size={16} />
            Compartilhar
          </ActionButton>
        </ActionButtons>
      </WidgetContainer>
    );
  }

  return (
    <>
      <WidgetContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <WidgetHeader>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderSubtitle>{subtitle}</HeaderSubtitle>
        </WidgetHeader>
        
        {showImage && (
          <PixImageContainer>
            <PixImage 
              src="/pix-contribution.jpg" 
              alt="Contribua com PIX - O Mundo Precisa de um Pai"
              onClick={openModal}
            />
            <p style={{ marginTop: '1rem', color: '#6B7280', fontSize: '0.9rem' }}>
              Clique na imagem para ver instruções detalhadas
            </p>
          </PixImageContainer>
        )}
        
        <PixDetails>
          <DetailItem>
            <DetailLabel>Chave PIX:</DetailLabel>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <DetailValue>{pixData.key}</DetailValue>
              <CopyButton
                onClick={() => copyToClipboard(pixData.key, 'key')}
                className={copiedKey ? 'copied' : ''}
              >
                {copiedKey ? <CheckCircle size={16} /> : <Copy size={16} />}
                {copiedKey ? 'Copiado!' : 'Copiar'}
              </CopyButton>
            </div>
          </DetailItem>
          
          <DetailItem>
            <DetailLabel>Nome:</DetailLabel>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <DetailValue>{pixData.name}</DetailValue>
              <CopyButton
                onClick={() => copyToClipboard(pixData.name, 'name')}
                className={copiedName ? 'copied' : ''}
              >
                {copiedName ? <CheckCircle size={16} /> : <Copy size={16} />}
                {copiedName ? 'Copiado!' : 'Copiar'}
              </CopyButton>
            </div>
          </DetailItem>
        </PixDetails>
        
        <ActionButtons>
          <ActionButton className="primary" onClick={openModal}>
            <QrCode size={16} />
            Ver Instruções
          </ActionButton>
          <ActionButton className="secondary" onClick={sharePix}>
            <Share2 size={16} />
            Compartilhar
          </ActionButton>
        </ActionButtons>
      </WidgetContainer>

      <AnimatePresence>
        {isModalOpen && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader>
                <ModalTitle>Como Contribuir com PIX</ModalTitle>
                <ModalSubtitle>Siga os passos para fazer sua contribuição</ModalSubtitle>
                <CloseButton onClick={closeModal}>
                  <X size={20} />
                </CloseButton>
              </ModalHeader>
              
              <ModalBody>
                <InstructionStep>
                  <StepNumber>1</StepNumber>
                  <StepContent>
                    <StepTitle>Abra seu app bancário</StepTitle>
                    <StepDescription>
                      Acesse o aplicativo do seu banco ou instituição financeira
                    </StepDescription>
                  </StepContent>
                </InstructionStep>
                
                <InstructionStep>
                  <StepNumber>2</StepNumber>
                  <StepContent>
                    <StepTitle>Selecione PIX</StepTitle>
                    <StepDescription>
                      Na tela principal, toque na opção "PIX" ou "Pagar"
                    </StepDescription>
                  </StepContent>
                </InstructionStep>
                
                <InstructionStep>
                  <StepNumber>3</StepNumber>
                  <StepContent>
                    <StepTitle>Escaneie o QR Code</StepTitle>
                    <StepDescription>
                      Use a câmera para escanear o código QR ou cole a chave PIX
                    </StepDescription>
                  </StepContent>
                </InstructionStep>
                
                <InstructionStep>
                  <StepNumber>4</StepNumber>
                  <StepContent>
                    <StepTitle>Confirme os dados</StepTitle>
                    <StepDescription>
                      Verifique se o nome "AILTON DE CARVALHO SOARES" aparece
                    </StepDescription>
                  </StepContent>
                </InstructionStep>
                
                <InstructionStep>
                  <StepNumber>5</StepNumber>
                  <StepContent>
                    <StepTitle>Digite o valor</StepTitle>
                    <StepDescription>
                      Insira o valor que deseja contribuir e confirme a transação
                    </StepDescription>
                  </StepContent>
                </InstructionStep>
                
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                  <ActionButton className="primary" onClick={closeModal}>
                    <Heart size={16} />
                    Entendi! Vou Contribuir
                  </ActionButton>
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default PixContributionWidget;
