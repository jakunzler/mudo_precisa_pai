#!/bin/bash

# Script para deploy direto no Cloud Run
# Uso: ./scripts/deploy-direct.sh

set -e

echo "🚀 Deploy direto para Cloud Run..."

# Configurações
PROJECT_ID="mundo-precisa-pai-prod"
REGION="us-central1"
SERVICE_NAME="frontend-web"
REGISTRY="us-central1-docker.pkg.dev"
REPO="containers"

echo "📋 Configurações:"
echo "  Projeto: $PROJECT_ID"
echo "  Região: $REGION"
echo "  Serviço: $SERVICE_NAME"
echo "  Registry: $REGISTRY/$PROJECT_ID/$REPO"

# 1. Configurar projeto
echo "🔧 Configurando projeto..."
gcloud config set project $PROJECT_ID

# 2. Build da aplicação
echo "📦 Fazendo build da aplicação..."
cd sistemas/web
npm run build

# 3. Build da imagem Docker
echo "🐳 Build da imagem Docker..."
IMAGE="$REGISTRY/$PROJECT_ID/$REPO/$SERVICE_NAME"
docker build -t $IMAGE:latest .

# 4. Push da imagem
echo "⬆️  Fazendo push da imagem..."
docker push $IMAGE:latest

# 5. Deploy no Cloud Run
echo "🌐 Deploy no Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image $IMAGE:latest \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --set-env-vars "NODE_ENV=production" \
  --memory 512Mi \
  --cpu 1 \
  --max-instances 10 \
  --min-instances 0 \
  --port 80

# 6. Obter URL do serviço
echo "🔗 URL do serviço:"
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --region $REGION --format='value(status.url)')
echo "✅ Deploy concluído!"
echo "🌐 Acesse: $SERVICE_URL"
echo "📊 Logs: gcloud run services logs read $SERVICE_NAME --region $REGION"

cd ../.. 