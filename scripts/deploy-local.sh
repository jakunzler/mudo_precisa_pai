#!/bin/bash

# Script para deploy local de teste
# Uso: ./scripts/deploy-local.sh

set -e

echo "🚀 Deploy local para testes..."

# 1. Build da aplicação
echo "📦 Fazendo build da aplicação..."
cd sistemas/web
npm run build

# 2. Build da imagem Docker
echo "🐳 Build da imagem Docker..."
docker build -t mundo-precisa-pai:local .

# 3. Parar container anterior (se existir)
echo "🛑 Parando container anterior..."
docker stop mundo-precisa-pai-local 2>/dev/null || true
docker rm mundo-precisa-pai-local 2>/dev/null || true

# 4. Executar novo container
echo "▶️  Iniciando novo container..."
docker run -d \
  --name mundo-precisa-pai-local \
  -p 8080:80 \
  --restart unless-stopped \
  mundo-precisa-pai:local

echo "✅ Deploy local concluído!"
echo "🌐 Acesse: http://localhost:8080"
echo "📊 Logs: docker logs -f mundo-precisa-pai-local"
echo "🛑 Parar: docker stop mundo-precisa-pai-local" 