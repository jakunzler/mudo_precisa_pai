#!/usr/bin/env python3
"""
Configurações do Sistema de IA para "O Mundo Precisa de um Pai"
"""

import os
from dotenv import load_dotenv

# Carrega variáveis de ambiente
load_dotenv()

class Config:
    """Configurações do sistema"""
    
    # APIs
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
    ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
    MIDJOURNEY_API_KEY = os.getenv("MIDJOURNEY_API_KEY")
    
    # Configurações de IA
    DEFAULT_MODEL = "gpt-4"
    TEMPERATURE = 0.7
    MAX_TOKENS = 1000
    
    # Configurações de conteúdo
    PLATFORMS = ["instagram", "facebook", "tiktok", "twitter", "youtube", "whatsapp"]
    CONTENT_TYPES = ["post", "story", "article", "thread", "video", "message"]
    
    # Hashtags padrão
    DEFAULT_HASHTAGS = [
        "#OMundoPrecisaDeUmPai",
        "#PaternidadeConsciente",
        "#PaiPresente",
        "#PaternidadeAtiva",
        "#FamíliaConsciente",
        "#PaternidadeResponsável"
    ]
    
    # Cores da marca
    BRAND_COLORS = {
        "primary": "#1E3A8A",    # Azul Paterno
        "secondary": "#059669",   # Verde Esperança
        "accent": "#EA580C",      # Laranja Calor
        "neutral": "#6B7280"      # Cinza Neutro
    }
    
    # Horários otimizados por plataforma
    OPTIMAL_TIMES = {
        "instagram": "09:00",
        "facebook": "10:00",
        "tiktok": "19:00",
        "twitter": "08:00",
        "youtube": "18:00",
        "whatsapp": "12:00"
    }
    
    # Frequência de publicação
    PUBLICATION_FREQUENCY = {
        "instagram": {"posts": 1, "stories": 3, "reels": 2},
        "facebook": {"posts": 1, "articles": 1},
        "tiktok": {"videos": 3},
        "twitter": {"tweets": 5},
        "youtube": {"videos": 1},
        "whatsapp": {"messages": 1}
    }
    
    # Temas mensais
    MONTHLY_THEMES = {
        "janeiro": {
            "name": "Novos Começos",
            "topics": ["resoluções paternas", "planejamento familiar", "metas para o ano"],
            "color": BRAND_COLORS["primary"]
        },
        "fevereiro": {
            "name": "Amor e Conexão",
            "topics": ["expressão de sentimentos", "qualidade do tempo", "comunicação familiar"],
            "color": BRAND_COLORS["accent"]
        },
        "março": {
            "name": "Educação e Crescimento",
            "topics": ["acompanhamento escolar", "desenvolvimento de habilidades", "aprendizado contínuo"],
            "color": BRAND_COLORS["secondary"]
        },
        "abril": {
            "name": "Saúde e Bem-estar",
            "topics": ["saúde física", "saúde mental", "hábitos saudáveis"],
            "color": BRAND_COLORS["neutral"]
        },
        "maio": {
            "name": "Trabalho e Família",
            "topics": ["equilíbrio profissional", "presença em casa", "prioridades familiares"],
            "color": BRAND_COLORS["primary"]
        },
        "junho": {
            "name": "Tecnologia e Paternidade",
            "topics": ["uso responsável da tecnologia", "conectividade digital", "limites saudáveis"],
            "color": BRAND_COLORS["secondary"]
        },
        "julho": {
            "name": "Férias e Momentos Especiais",
            "topics": ["viagens em família", "memórias inesquecíveis", "tempo de qualidade"],
            "color": BRAND_COLORS["accent"]
        },
        "agosto": {
            "name": "Volta às Aulas",
            "topics": ["preparação escolar", "acompanhamento acadêmico", "rotinas familiares"],
            "color": BRAND_COLORS["primary"]
        },
        "setembro": {
            "name": "Comunicação",
            "topics": ["diálogo aberto", "escuta ativa", "expressão emocional"],
            "color": BRAND_COLORS["secondary"]
        },
        "outubro": {
            "name": "Responsabilidade",
            "topics": ["ensino de valores", "exemplo paterno", "liderança familiar"],
            "color": BRAND_COLORS["accent"]
        },
        "novembro": {
            "name": "Gratidão",
            "topics": ["agradecimento", "reconhecimento", "celebração"],
            "color": BRAND_COLORS["primary"]
        },
        "dezembro": {
            "name": "Reflexão e Planejamento",
            "topics": ["balanço do ano", "metas para o próximo ano", "celebração familiar"],
            "color": BRAND_COLORS["secondary"]
        }
    }
    
    # Templates de prompts
    PROMPT_TEMPLATES = {
        "instagram_post": """
        Crie um post para Instagram sobre {theme}.
        
        Requisitos:
        - Tom inspirador e educativo
        - Linguagem acessível
        - Emojis relevantes
        - Call-to-action claro
        - Hashtags estratégicas
        - Máximo 2200 caracteres
        
        Retorne em JSON:
        - title: título atraente
        - content: conteúdo principal
        - hashtags: lista de hashtags
        - cta: call-to-action
        - tip: dica prática
        """,
        
        "facebook_article": """
        Crie um artigo para Facebook sobre {theme}.
        
        Requisitos:
        - Artigo educativo
        - Linguagem formal mas acessível
        - Estrutura clara (introdução, desenvolvimento, conclusão)
        - Call-to-action para engajamento
        - Máximo 5000 caracteres
        
        Retorne em JSON:
        - title: título completo
        - intro: introdução
        - content: desenvolvimento
        - conclusion: conclusão
        - cta: call-to-action
        """,
        
        "tiktok_script": """
        Crie um script para TikTok sobre {theme}.
        
        Requisitos:
        - Script para vídeo de 15-60 segundos
        - Hook atraente nos primeiros 3 segundos
        - Linguagem jovem e dinâmica
        - Call-to-action claro
        - Hashtags trending
        
        Retorne em JSON:
        - hook: gancho inicial
        - problem: problema identificado
        - solution: solução prática
        - result: resultado esperado
        - cta: call-to-action
        - hashtags: hashtags trending
        """,
        
        "twitter_thread": """
        Crie uma thread para Twitter sobre {theme}.
        
        Requisitos:
        - Thread de 3-5 tweets
        - Linguagem concisa
        - Informação valiosa
        - Call-to-action
        - Hashtags relevantes
        
        Retorne em JSON:
        - title: título da thread
        - tweets: array de tweets
        - hashtags: hashtags relevantes
        """
    }
    
    # Configurações de imagem
    IMAGE_SETTINGS = {
        "instagram": {
            "post": {"width": 1080, "height": 1080},
            "story": {"width": 1080, "height": 1920},
            "reel": {"width": 1080, "height": 1920}
        },
        "facebook": {
            "post": {"width": 1200, "height": 630},
            "story": {"width": 1080, "height": 1920}
        },
        "tiktok": {
            "video": {"width": 1080, "height": 1920}
        },
        "twitter": {
            "image": {"width": 1200, "height": 675}
        }
    }
    
    # Métricas de sucesso
    SUCCESS_METRICS = {
        "engagement_rate": 0.05,  # 5% mínimo
        "growth_rate": 0.1,       # 10% crescimento mensal
        "retention_rate": 0.7,    # 70% retenção
        "conversion_rate": 0.02   # 2% conversão
    }

# Instância global de configuração
config = Config() 