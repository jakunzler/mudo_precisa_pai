#!/bin/bash

# Script para corrigir permissões da GCP
# Uso: ./scripts/fix-gcp-permissions.sh [PROJECT_ID]

set -e

PROJECT_ID=${1:-"mundo-precisa-pai-prod"}

echo "🔧 Corrigindo permissões da GCP para: $PROJECT_ID"

# 1. Configurar projeto
echo "📋 Configurando projeto..."
gcloud config set project $PROJECT_ID

# 2. Habilitar APIs necessárias
echo "🔧 Habilitando APIs..."
gcloud services enable \
  cloudbuild.googleapis.com \
  run.googleapis.com \
  containerregistry.googleapis.com \
  artifactregistry.googleapis.com \
  cloudresourcemanager.googleapis.com \
  iam.googleapis.com

# 3. Verificar Service Account
SA_NAME="github-actions-sa"
SA_EMAIL="$SA_NAME@$PROJECT_ID.iam.gserviceaccount.com"

echo "👤 Verificando Service Account..."
if ! gcloud iam service-accounts describe $SA_EMAIL >/dev/null 2>&1; then
  echo "❌ Service Account não encontrado. Execute setup-gcp.sh primeiro."
  exit 1
fi

# 4. Conceder permissões necessárias
echo "🔐 Configurando permissões..."

# Permissões básicas
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

# Permissões para Artifact Registry
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SA_EMAIL" \
  --role="roles/artifactregistry.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SA_EMAIL" \
  --role="roles/artifactregistry.writer"

# Permissões adicionais para Container Registry
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SA_EMAIL" \
  --role="roles/storage.objectViewer"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SA_EMAIL" \
  --role="roles/storage.objectAdmin"

# 5. Verificar permissões
echo "✅ Verificando permissões..."
gcloud projects get-iam-policy $PROJECT_ID \
  --flatten="bindings[].members" \
  --format="table(bindings.role)" \
  --filter="bindings.members:$SA_EMAIL"

echo "🎉 Permissões corrigidas com sucesso!"
echo "📋 Service Account: $SA_EMAIL"
echo "🔑 Adicione a chave como secret GCP_SA_KEY no GitHub" 