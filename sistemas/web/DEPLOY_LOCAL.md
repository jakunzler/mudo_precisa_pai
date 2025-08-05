# 🚀 Deploy Local - Guia Rápido

## 📋 Pré-requisitos

- ✅ Docker instalado e rodando
- ✅ Node.js 18+ instalado
- ✅ npm ou yarn instalado

## 🚀 Deploy Local

### 1. Deploy Completo
```bash
npm run deploy:local
```
Este comando irá:
- ✅ Fazer build da aplicação React
- ✅ Criar imagem Docker otimizada
- ✅ Parar container anterior (se existir)
- ✅ Iniciar novo container na porta 8080

### 2. Acessar a Aplicação
Após o deploy, acesse:
```
http://localhost:8080
```

## 🛠️ Comandos Utilitários

### Gerenciar Container
```bash
# Ver status do container
npm run docker:status

# Ver logs em tempo real
npm run docker:logs

# Parar container
npm run docker:stop

# Iniciar container
npm run docker:start

# Reiniciar container
npm run docker:restart

# Limpar tudo (container + imagem)
npm run docker:clean

# Ver informações
npm run docker:info
```

### Build e Análise
```bash
# Build da imagem Docker
npm run docker:build

# Análise do build (serve estático)
npm run analyze
```

## 🔍 Troubleshooting

### Container não inicia
```bash
# Verificar se Docker está rodando
docker ps

# Verificar logs
npm run docker:logs

# Limpar e recriar
npm run docker:clean
npm run deploy:local
```

### Porta 8080 ocupada
```bash
# Verificar o que está usando a porta
sudo lsof -i :8080

# Parar o processo ou usar outra porta
docker run -p 8081:80 mundo-precisa-pai:local
```

### Build falha
```bash
# Limpar cache do npm
npm cache clean --force

# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install

# Tentar build novamente
npm run deploy:local
```

## 📊 Monitoramento

### Logs em Tempo Real
```bash
npm run docker:logs
```

### Status do Container
```bash
npm run docker:status
```

### Métricas do Sistema
```bash
# Uso de CPU e memória
docker stats mundo-precisa-pai-local

# Informações detalhadas
docker inspect mundo-precisa-pai-local
```

## 🔧 Configuração Avançada

### Variáveis de Ambiente
Crie um arquivo `.env.local` para configurações locais:
```bash
REACT_APP_API_URL=http://localhost:3001
REACT_APP_ENV=local
```

### Docker Compose (Opcional)
Para uma configuração mais avançada, você pode criar um `docker-compose.yml`:

```yaml
version: '3.8'
services:
  frontend:
    build: .
    ports:
      - "8080:80"
    environment:
      - NODE_ENV=local
    volumes:
      - ./src:/app/src:ro
```

## 🎯 Próximos Passos

1. **Testar todas as páginas** no ambiente local
2. **Verificar responsividade** em diferentes dispositivos
3. **Testar performance** com ferramentas do navegador
4. **Configurar hot reload** para desenvolvimento
5. **Implementar testes automatizados**

---

**💡 Dica**: Use `Ctrl+C` para parar os logs em tempo real. 