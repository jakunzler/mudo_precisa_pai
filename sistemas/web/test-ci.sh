#!/bin/bash

# Script de teste para CI/CD
# Uso: ./test-ci.sh

set -e

echo "🧪 Executando testes para CI/CD..."

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ package.json não encontrado. Execute este script na pasta sistemas/web"
    exit 1
fi

# Verificar se o diretório src existe
if [ ! -d "src" ]; then
    echo "❌ Diretório src não encontrado"
    exit 1
fi

echo "📁 Diretório atual: $(pwd)"

# Instalar dependências apenas se node_modules não existir
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm ci
else
    echo "📦 Dependências já instaladas, pulando instalação..."
fi

echo "🧪 Executando testes..."
npm test -- --watchAll=false --coverage --passWithNoTests

echo "✅ Testes concluídos com sucesso!" 