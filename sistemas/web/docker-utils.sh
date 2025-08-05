#!/bin/bash

# Script utilitário para gerenciar containers Docker
# Uso: bash docker-utils.sh [comando]

CONTAINER_NAME="mundo-precisa-pai-local"
IMAGE_NAME="mundo-precisa-pai:local"

case "$1" in
    "start")
        echo "🚀 Iniciando container..."
        docker start $CONTAINER_NAME 2>/dev/null || echo "Container não existe. Execute 'npm run deploy:local' primeiro."
        ;;
    "stop")
        echo "🛑 Parando container..."
        docker stop $CONTAINER_NAME
        ;;
    "restart")
        echo "🔄 Reiniciando container..."
        docker restart $CONTAINER_NAME
        ;;
    "logs")
        echo "📊 Mostrando logs..."
        docker logs -f $CONTAINER_NAME
        ;;
    "status")
        echo "📋 Status do container:"
        docker ps -a | grep $CONTAINER_NAME
        ;;
    "shell")
        echo "🐚 Acessando shell do container..."
        docker exec -it $CONTAINER_NAME sh
        ;;
    "clean")
        echo "🧹 Limpando containers e imagens..."
        docker stop $CONTAINER_NAME 2>/dev/null || true
        docker rm $CONTAINER_NAME 2>/dev/null || true
        docker rmi $IMAGE_NAME 2>/dev/null || true
        echo "✅ Limpeza concluída!"
        ;;
    "build")
        echo "🔨 Build da imagem..."
        docker build -t $IMAGE_NAME .
        ;;
    "info")
        echo "ℹ️  Informações do container:"
        echo "Container: $CONTAINER_NAME"
        echo "Imagem: $IMAGE_NAME"
        echo "Porta: 8080"
        echo "URL: http://localhost:8080"
        echo ""
        echo "Comandos disponíveis:"
        echo "  start   - Iniciar container"
        echo "  stop    - Parar container"
        echo "  restart - Reiniciar container"
        echo "  logs    - Ver logs"
        echo "  status  - Status do container"
        echo "  shell   - Acessar shell"
        echo "  clean   - Limpar tudo"
        echo "  build   - Build da imagem"
        ;;
    *)
        echo "❌ Comando não reconhecido: $1"
        echo "Use: bash docker-utils.sh [start|stop|restart|logs|status|shell|clean|build|info]"
        exit 1
        ;;
esac 