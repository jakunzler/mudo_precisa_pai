#!/bin/bash

# Script para configurar infraestrutura na GCP
# Uso: ./scripts/setup-gcp.sh [PROJECT_ID] [ENVIRONMENT]

set -e

PROJECT_ID=${1:-"mundo-precisa-pai-prod"}
ENVIRONMENT=${2:-"production"}

echo "🚀 Configurando infraestrutura GCP para: $PROJECT_ID ($ENVIRONMENT)"

# 1. Configurar projeto
echo "📋 Configurando projeto..."
gcloud config set project $PROJECT_ID

# 2. Habilitar APIs necessárias
echo "🔧 Habilitando APIs..."
gcloud services enable \
  cloudbuild.googleapis.com \
  run.googleapis.com \
  containerregistry.googleapis.com \
  cloudresourcemanager.googleapis.com \
  iam.googleapis.com

# 3. Criar Service Account para GitHub Actions
echo "👤 Criando Service Account..."
SA_NAME="github-actions-sa"
SA_EMAIL="$SA_NAME@$PROJECT_ID.iam.gserviceaccount.com"

# Verificar se já existe
if ! gcloud iam service-accounts describe $SA_EMAIL >/dev/null 2>&1; then
  gcloud iam service-accounts create $SA_NAME \
    --display-name="GitHub Actions Service Account"
fi

# 4. Conceder permissões necessárias
echo "🔐 Configurando permissões..."
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SA_EMAIL" \
  --role="roles/run.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SA_EMAIL" \
  --role="roles/storage.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SA_EMAIL" \
  --role="roles/iam.serviceAccountUser"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SA_EMAIL" \
  --role="roles/cloudbuild.builds.builder"

# 5. Criar chave do Service Account
echo "🔑 Gerando chave do Service Account..."
KEY_FILE="gcp-sa-key-$ENVIRONMENT.json"
gcloud iam service-accounts keys create $KEY_FILE \
  --iam-account=$SA_EMAIL

echo "✅ Configuração concluída!"
echo "📁 Chave salva em: $KEY_FILE"
echo "🔑 Adicione o conteúdo deste arquivo como secret GCP_SA_KEY no GitHub"
echo "⚠️  IMPORTANTE: Não commite este arquivo no repositório!"

# 6. Configurar Cloud Run (se necessário)
echo "🌐 Configurando Cloud Run..."
gcloud run services list --region=us-central1 || \
gcloud run services create frontend-web \
  --image=hello-world \
  --platform=managed \
  --region=us-central1 \
  --allow-unauthenticated

echo "🎉 Setup concluído com sucesso!"
echo ""
echo "📋 Próximos passos:"
echo "1. Adicione o conteúdo de $KEY_FILE como secret no GitHub"
echo "2. Configure o domínio personalizado (opcional)"
echo "3. Execute o primeiro deploy via GitHub Actions" 