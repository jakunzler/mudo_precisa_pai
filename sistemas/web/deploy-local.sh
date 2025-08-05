#!/bin/bash

# Script para deploy local de teste
# Uso: npm run deploy:local

set -e

echo "🚀 Deploy local para testes..."

# 1. Verificar se Docker está instalado
if ! command -v docker &> /dev/null; then
    echo "❌ Docker não está instalado. Instale o Docker primeiro."
    exit 1
fi

# 2. Build da aplicação
echo "📦 Fazendo build da aplicação..."
npm run build

# 3. Build da imagem Docker
echo "🐳 Build da imagem Docker..."
docker build -t mundo-precisa-pai:local .

# 4. Parar container anterior (se existir)
echo "🛑 Parando container anterior..."
docker stop mundo-precisa-pai-local 2>/dev/null || true
docker rm mundo-precisa-pai-local 2>/dev/null || true

# 5. Executar novo container
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
echo "🗑️  Remover: docker rm mundo-precisa-pai-local" 