# 🔐 Correção de Autenticação - Google Cloud Platform

## 🚨 Problema Identificado

### **Erro no GitHub Actions:**
```
denied: Unauthenticated request. Unauthenticated requests do not have permission 'artifactregistry.repositories.uploadArtifacts' on resource 'projects/mundo-precisa-pai-prod/locations/us/repositories/gcr.io'
```

### **Causa:**
O Service Account não tem as permissões necessárias para fazer upload de imagens Docker para o Google Container Registry (GCR).

## 🛠️ Soluções Implementadas

### **1. Permissões Adicionadas**
```bash
# Permissões para Artifact Registry
roles/artifactregistry.admin
roles/artifactregistry.writer

# Permissões para Container Registry
roles/storage.objectViewer
roles/storage.objectAdmin
```

### **2. Configuração Docker Melhorada**
```yaml
- name: Configure Docker for GCR
  run: |
    gcloud auth configure-docker us-central1-docker.pkg.dev
    gcloud auth configure-docker gcr.io
```

### **3. Script de Correção**
```bash
# Executar para corrigir permissões
./scripts/fix-gcp-permissions.sh mundo-precisa-pai-prod
```

## 🔧 Passos para Corrigir

### **1. Executar Script de Correção**
```bash
# No seu terminal local
./scripts/fix-gcp-permissions.sh mundo-precisa-pai-prod
```

### **2. Verificar Service Account**
```bash
# Verificar se o Service Account existe
gcloud iam service-accounts list --project=mundo-precisa-pai-prod

# Verificar permissões
gcloud projects get-iam-policy mundo-precisa-pai-prod \
  --flatten="bindings[].members" \
  --format="table(bindings.role)" \
  --filter="bindings.members:github-actions-sa@mundo-precisa-pai-prod.iam.gserviceaccount.com"
```

### **3. Gerar Nova Chave (se necessário)**
```bash
# Gerar nova chave do Service Account
gcloud iam service-accounts keys create gcp-sa-key-production.json \
  --iam-account=github-actions-sa@mundo-precisa-pai-prod.iam.gserviceaccount.com
```

### **4. Atualizar GitHub Secrets**
1. Vá para **Settings > Secrets and variables > Actions**
2. Atualize o secret `GCP_SA_KEY` com o conteúdo do arquivo `gcp-sa-key-production.json`

## 📋 APIs Necessárias

Certifique-se de que estas APIs estão habilitadas:
- ✅ `cloudbuild.googleapis.com`
- ✅ `run.googleapis.com`
- ✅ `containerregistry.googleapis.com`
- ✅ `artifactregistry.googleapis.com`
- ✅ `cloudresourcemanager.googleapis.com`
- ✅ `iam.googleapis.com`

## 🎯 Resultado Esperado

### **Antes:**
- ❌ Erro de autenticação no GCR
- ❌ Upload de imagem Docker falhando
- ❌ Deploy não executando

### **Depois:**
- ✅ Autenticação funcionando
- ✅ Upload de imagem Docker bem-sucedido
- ✅ Deploy executando corretamente

## 🚀 Próximos Passos

1. **Executar script de correção**
2. **Verificar permissões**
3. **Atualizar GitHub Secrets**
4. **Testar deploy novamente**

---

**🔑 Após corrigir as permissões, o deploy deve funcionar corretamente!** 