import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import EMAILJS_CONFIG from '../config/emailjs';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(30, 58, 138, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin: 0 0.5rem;
  }
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #1E3A8A;
  font-size: clamp(1.5rem, 4vw, 2rem);

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #374151;
  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #E5E7EB;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #F9FAFB;

  &:focus {
    outline: none;
    border-color: #1E3A8A;
    background: white;
    box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
  }

  &.error {
    border-color: #EF4444;
    background: #FEF2F2;
  }

  @media (max-width: 480px) {
    padding: 0.625rem 0.875rem;
    font-size: 0.95rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #E5E7EB;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  background: #F9FAFB;

  &:focus {
    outline: none;
    border-color: #1E3A8A;
    background: white;
    box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
  }

  &.error {
    border-color: #EF4444;
    background: #FEF2F2;
  }

  @media (max-width: 480px) {
    padding: 0.625rem 0.875rem;
    font-size: 0.95rem;
    min-height: 100px;
  }
`;

const ErrorMessage = styled.span`
  color: #EF4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #1E3A8A 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(30, 58, 138, 0.3);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(30, 58, 138, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 480px) {
    padding: 0.875rem 1.5rem;
    font-size: 0.95rem;
  }
`;

const SuccessMessage = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: #D1FAE5;
  color: #065F46;
  border-radius: 10px;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const ErrorMessageContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: #FEE2E2;
  color: #991B1B;
  border-radius: 10px;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const ContactForm = ({ title = "Entre em Contato", showSuccessMessage = true }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Configuração do EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        subject: `${EMAILJS_CONFIG.DEFAULT_SUBJECT} - ${data.name}`
      };

      // Verificar se a configuração está correta
      if (EMAILJS_CONFIG.SERVICE_ID === 'service_id' || 
          EMAILJS_CONFIG.TEMPLATE_ID === 'template_id' || 
          EMAILJS_CONFIG.PUBLIC_KEY === 'public_key') {
        throw new Error('EmailJS não configurado. Configure o arquivo src/config/emailjs.js');
      }

      // Enviar email usando EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        reset();
        toast.success('Mensagem enviada com sucesso!');
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus('error');
      
      if (error.message.includes('EmailJS não configurado')) {
        toast.error('Formulário não configurado. Entre em contato diretamente.');
      } else {
        toast.error('Erro ao enviar mensagem. Tente novamente.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <FormTitle>{title}</FormTitle>
      
      {submitStatus === 'success' && showSuccessMessage && (
        <SuccessMessage
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <CheckCircle size={20} />
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </SuccessMessage>
      )}

      {submitStatus === 'error' && (
        <ErrorMessageContainer
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertCircle size={20} />
          Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.
        </ErrorMessageContainer>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label htmlFor="name">Nome Completo *</Label>
          <Input
            id="name"
            type="text"
            {...register('name', { 
              required: 'Nome é obrigatório',
              minLength: { value: 2, message: 'Nome deve ter pelo menos 2 caracteres' }
            })}
            className={errors.name ? 'error' : ''}
            placeholder="Seu nome completo"
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">E-mail *</Label>
          <Input
            id="email"
            type="email"
            {...register('email', { 
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'E-mail inválido'
              }
            })}
            className={errors.email ? 'error' : ''}
            placeholder="seu@email.com"
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Mensagem *</Label>
          <TextArea
            id="message"
            {...register('message', { 
              required: 'Mensagem é obrigatória',
              minLength: { value: 10, message: 'Mensagem deve ter pelo menos 10 caracteres' }
            })}
            className={errors.message ? 'error' : ''}
            placeholder="Digite sua mensagem aqui..."
          />
          {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
        </FormGroup>

        <SubmitButton
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Send size={20} />
              </motion.div>
              Enviando...
            </>
          ) : (
            <>
              <Send size={20} />
              Enviar Mensagem
            </>
          )}
        </SubmitButton>
      </form>

      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
          Ou envie um e-mail diretamente para:{' '}
          <a 
            href="mailto:decarvalhopai7@gmail.com"
            style={{ color: '#1E3A8A', fontWeight: '600' }}
          >
            decarvalhopai7@gmail.com
          </a>
        </p>
      </div>
    </FormContainer>
  );
};

export default ContactForm; 