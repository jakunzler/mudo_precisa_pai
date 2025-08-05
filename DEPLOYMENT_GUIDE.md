# 🚀 Guia de Deploy - GCP + GitHub Actions

## 📋 Pré-requisitos

### 1. Conta Google Cloud Platform
- [ ] Criar conta no [Google Cloud Console](https://console.cloud.google.com)
- [ ] Ativar faturamento
- [ ] Instalar [Google Cloud CLI](https://cloud.google.com/sdk/docs/install)

### 2. GitHub Repository
- [ ] Repositório configurado com branches `main` e `develop`
- [ ] Acesso para configurar secrets

## 🔧 Configuração Inicial

### 1. Configurar GCP

```bash
# Login no Google Cloud
gcloud auth login

# Criar projetos (produção e staging)
gcloud projects create mundo-precisa-pai-prod
gcloud projects create mundo-precisa-pai-staging

# Configurar infraestrutura
chmod +x scripts/setup-gcp.sh
./scripts/setup-gcp.sh mundo-precisa-pai-prod production
./scripts/setup-gcp.sh mundo-precisa-pai-staging staging
```

### 2. Configurar GitHub Secrets

No seu repositório GitHub, vá em **Settings > Secrets and variables > Actions** e adicione:

#### Secrets para Produção:
- `GCP_SA_KEY`: Conteúdo do arquivo `gcp-sa-key-production.json`

#### Secrets para Staging:
- `GCP_SA_KEY_STAGING`: Conteúdo do arquivo `gcp-sa-key-staging.json`

### 3. Configurar Branches

```bash
# Criar branch develop se não existir
git checkout -b develop
git push -u origin develop

# Voltar para main
git checkout main
```

## 🚀 Deploy Automático

### Fluxo de Trabalho

1. **Desenvolvimento** → `develop` branch
   - Deploy automático para staging
   - URL: `https://frontend-web-staging-xxxxx-uc.a.run.app`

2. **Produção** → `main` branch
   - Deploy automático para produção
   - URL: `https://frontend-web-xxxxx-uc.a.run.app`

### Comandos Úteis

```bash
# Deploy local para testes
./scripts/deploy-local.sh

# Ver logs do Cloud Run
gcloud run services logs read frontend-web --region=us-central1

# Verificar status do serviço
gcloud run services describe frontend-web --region=us-central1

# Acessar container local
docker exec -it mundo-precisa-pai-local sh
```

## 🔍 Monitoramento

### Cloud Run Metrics
- Acesse: [Google Cloud Console > Cloud Run](https://console.cloud.google.com/run)
- Métricas disponíveis:
  - Requests por segundo
  - Latência
  - CPU/Memory usage
  - Error rate

### Logs
```bash
# Logs em tempo real
gcloud run services logs tail frontend-web --region=us-central1

# Logs específicos
gcloud logging read "resource.type=cloud_run_revision" --limit=50
```

## 🔒 Segurança

### Configurações Implementadas
- ✅ HTTPS obrigatório
- ✅ Headers de segurança (CSP, XSS Protection)
- ✅ Service Account com permissões mínimas
- ✅ Container scanning automático

### Boas Práticas
- [ ] Rotacionar chaves do Service Account mensalmente
- [ ] Monitorar custos no Cloud Console
- [ ] Configurar alertas de orçamento
- [ ] Revisar logs regularmente

## 📊 Custos Estimados

### Cloud Run (por mês)
- **0-1000 requests/dia**: ~$5-10
- **1000-10000 requests/dia**: ~$20-50
- **10000+ requests/dia**: ~$50-100

### Container Registry
- **Imagens**: ~$1-5/mês

### Total Estimado**: $10-150/mês

## 🆘 Troubleshooting

### Problemas Comuns

#### 1. Build falha
```bash
# Verificar logs do build
gcloud builds log [BUILD_ID]

# Testar localmente
cd sistemas/web && npm run build
```

#### 2. Deploy falha
```bash
# Verificar permissões
gcloud auth list
gcloud config get-value project

# Verificar Service Account
gcloud iam service-accounts list
```

#### 3. Aplicação não carrega
```bash
# Verificar logs do container
gcloud run services logs read frontend-web --region=us-central1

# Testar health check
curl https://[SERVICE_URL]/health
```

### Contatos de Suporte
- **Google Cloud Support**: [Console](https://console.cloud.google.com/support)
- **GitHub Actions**: [Documentation](https://docs.github.com/en/actions)

## 🎯 Próximos Passos

1. **Configurar domínio personalizado**
2. **Implementar CDN (Cloud CDN)**
3. **Configurar monitoramento avançado**
4. **Implementar backup automático**
5. **Configurar alertas de performance**

---

**📞 Suporte**: Para dúvidas sobre deploy, abra uma issue no repositório. 