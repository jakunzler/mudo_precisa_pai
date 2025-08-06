# Configuração do EmailJS para Formulários de Contato

## 📧 Como Configurar o EmailJS

### 1. Criar Conta no EmailJS
1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Faça login na sua conta

### 2. Configurar Serviço de Email
1. No dashboard, vá em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta
5. **Anote o Service ID** (ex: `service_abc123`)

### 3. Criar Template de Email
1. Vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template com o seguinte HTML:

```html
<h2>Nova Mensagem - O Mundo Precisa de um Pai</h2>

<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>E-mail:</strong> {{from_email}}</p>
<p><strong>Mensagem:</strong></p>
<p>{{message}}</p>

<hr>
<p><em>Mensagem enviada através do formulário de contato do site.</em></p>
```

4. Configure o assunto: `Nova mensagem de {{from_name}} - O Mundo Precisa de um Pai`
5. Configure o destinatário: `decarvalhopai7@gmail.com`
6. **Anote o Template ID** (ex: `template_xyz789`)

### 4. Obter Public Key
1. Vá em **"Account"** → **"API Keys"**
2. **Anote a Public Key** (ex: `user_abc123def456`)

### 5. Configurar no Projeto
1. Abra o arquivo `sistemas/web/src/config/emailjs.js`
2. Substitua os valores pelos seus:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123', // Seu Service ID
  TEMPLATE_ID: 'template_xyz789', // Seu Template ID
  PUBLIC_KEY: 'user_abc123def456', // Sua Public Key
  TO_EMAIL: 'decarvalhopai7@gmail.com',
  DEFAULT_SUBJECT: 'Nova mensagem - O Mundo Precisa de um Pai'
};
```

### 6. Testar o Formulário
1. Faça o deploy da aplicação: `./scripts/deploy-direct.sh`
2. Acesse a página de contato: `/contact`
3. Preencha e envie um formulário de teste
4. Verifique se o email foi recebido em `decarvalhopai7@gmail.com`

## 🔧 Configurações Avançadas

### Personalizar Template
Você pode personalizar o template HTML para incluir:
- Logo da organização
- Estilos CSS
- Informações adicionais
- Links para redes sociais

### Configurar Múltiplos Destinatários
Para enviar para múltiplos emails, modifique o template:
```html
<p><strong>Para:</strong> decarvalhopai7@gmail.com, outro@email.com</p>
```

### Adicionar Validações
O formulário já inclui validações básicas:
- Nome obrigatório (mínimo 2 caracteres)
- Email válido
- Mensagem obrigatória (mínimo 10 caracteres)

## 🚨 Solução de Problemas

### Email não está sendo enviado
1. Verifique se todos os IDs estão corretos
2. Confirme se o serviço de email está ativo
3. Verifique os logs no console do navegador

### Erro de configuração
Se aparecer "EmailJS não configurado":
1. Verifique se os valores no `emailjs.js` foram substituídos
2. Confirme se não há espaços extras nos IDs

### Limite de emails gratuitos
O plano gratuito do EmailJS permite:
- 200 emails por mês
- Para mais emails, considere o plano pago

## 📱 Responsividade

O formulário já está totalmente responsivo e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)
- Mobile pequeno (< 320px)

## 🔒 Segurança

- O EmailJS usa HTTPS para todas as comunicações
- As chaves são públicas e seguras para uso no frontend
- Não há dados sensíveis expostos

## 📞 Suporte

Se precisar de ajuda:
1. Consulte a documentação do EmailJS
2. Verifique os logs no console do navegador
3. Teste com diferentes navegadores
4. Entre em contato: decarvalhopai7@gmail.com 