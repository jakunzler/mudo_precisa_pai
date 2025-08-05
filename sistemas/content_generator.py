#!/usr/bin/env python3
"""
Gerador de Conteúdo com IA para "O Mundo Precisa de um Pai"
Autor: Sistema de IA
Data: 2024
"""

import openai
import json
import os
from datetime import datetime, timedelta
from typing import Dict, List, Optional
import pandas as pd

class ContentGenerator:
    def __init__(self, api_key: str):
        """Inicializa o gerador de conteúdo"""
        self.client = openai.OpenAI(api_key=api_key)
        self.templates = self._load_templates()
        self.themes = self._load_themes()
        
    def _load_templates(self) -> Dict:
        """Carrega templates de conteúdo"""
        return {
            "instagram_post": {
                "structure": "🎯 {title}\n\n📝 {content}\n\n💡 {tip}\n\n❤️ {cta}\n\n{hashtags}",
                "max_length": 2200,
                "hashtags": ["#OMundoPrecisaDeUmPai", "#PaternidadeConsciente"]
            },
            "facebook_article": {
                "structure": "# {title}\n\n## Introdução\n{intro}\n\n## Desenvolvimento\n{content}\n\n## Conclusão\n{conclusion}\n\n---\n*{cta}*",
                "max_length": 5000
            },
            "tiktok_script": {
                "structure": "🎬 {hook}\n\n📝 {problem}\n\n💡 {solution}\n\n🎯 {result}\n\n❤️ {cta}",
                "max_duration": 60
            },
            "twitter_thread": {
                "structure": "🧵 {title}\n\n{content}\n\n{hashtags}",
                "max_length": 280
            }
        }
    
    def _load_themes(self) -> Dict:
        """Carrega temas mensais"""
        return {
            "janeiro": {
                "name": "Novos Começos",
                "topics": ["resoluções paternas", "planejamento familiar", "metas para o ano"],
                "color": "#1E3A8A"
            },
            "fevereiro": {
                "name": "Amor e Conexão",
                "topics": ["expressão de sentimentos", "qualidade do tempo", "comunicação familiar"],
                "color": "#EA580C"
            },
            "marco": {
                "name": "Educação e Crescimento",
                "topics": ["acompanhamento escolar", "desenvolvimento de habilidades", "aprendizado contínuo"],
                "color": "#059669"
            },
            "abril": {
                "name": "Saúde e Bem-estar",
                "topics": ["saúde física", "saúde mental", "hábitos saudáveis"],
                "color": "#6B7280"
            }
        }
    
    def generate_content(self, platform: str, theme: str, content_type: str = "post") -> Dict:
        """Gera conteúdo para uma plataforma específica"""
        
        prompt = self._create_prompt(platform, theme, content_type)
        
        try:
            response = self.client.chat.completions.create(
                model="gpt-4",
                messages=[
                    {"role": "system", "content": "Você é um especialista em paternidade consciente e marketing digital. Crie conteúdo autêntico, educativo e inspirador para o movimento 'O Mundo Precisa de um Pai'."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.7,
                max_tokens=1000
            )
            
            content = response.choices[0].message.content
            
            # Parse do conteúdo gerado
            parsed_content = self._parse_content(content, platform)
            
            return {
                "platform": platform,
                "theme": theme,
                "content_type": content_type,
                "content": parsed_content,
                "generated_at": datetime.now().isoformat(),
                "ai_model": "gpt-4"
            }
            
        except Exception as e:
            print(f"Erro ao gerar conteúdo: {e}")
            return None
    
    def _create_prompt(self, platform: str, theme: str, content_type: str) -> str:
        """Cria prompt específico para cada plataforma"""
        
        base_prompt = f"""
        Crie conteúdo para {platform} sobre o tema: {theme}
        
        Requisitos específicos para {platform}:
        """
        
        if platform == "instagram":
            base_prompt += """
            - Tom inspirador e educativo
            - Linguagem acessível
            - Emojis relevantes
            - Call-to-action claro
            - Hashtags estratégicas
            - Máximo 2200 caracteres
            """
        elif platform == "facebook":
            base_prompt += """
            - Artigo educativo
            - Linguagem formal mas acessível
            - Estrutura clara (introdução, desenvolvimento, conclusão)
            - Call-to-action para engajamento
            - Máximo 5000 caracteres
            """
        elif platform == "tiktok":
            base_prompt += """
            - Script para vídeo de 15-60 segundos
            - Hook atraente nos primeiros 3 segundos
            - Linguagem jovem e dinâmica
            - Call-to-action claro
            - Hashtags trending
            """
        elif platform == "twitter":
            base_prompt += """
            - Thread de 3-5 tweets
            - Linguagem concisa
            - Informação valiosa
            - Call-to-action
            - Hashtags relevantes
            """
        
        base_prompt += f"""
        
        Tema específico: {theme}
        Tipo de conteúdo: {content_type}
        
        Retorne o conteúdo em formato JSON com:
        - title: título atraente
        - content: conteúdo principal
        - hashtags: lista de hashtags relevantes
        - cta: call-to-action
        - tip: dica prática (se aplicável)
        """
        
        return base_prompt
    
    def _parse_content(self, content: str, platform: str) -> Dict:
        """Parse do conteúdo gerado pela IA"""
        try:
            # Tenta fazer parse JSON
            if content.strip().startswith('{'):
                return json.loads(content)
            else:
                # Se não for JSON, estrutura manualmente
                return {
                    "title": "Título Gerado",
                    "content": content,
                    "hashtags": self.templates[platform]["hashtags"] if platform in self.templates else [],
                    "cta": "Compartilhe sua experiência!",
                    "tip": "Dica prática relacionada ao tema"
                }
        except json.JSONDecodeError:
            return {
                "title": "Título Gerado",
                "content": content,
                "hashtags": self.templates[platform]["hashtags"] if platform in self.templates else [],
                "cta": "Compartilhe sua experiência!",
                "tip": "Dica prática relacionada ao tema"
            }
    
    def generate_weekly_content(self, week_theme: str) -> List[Dict]:
        """Gera conteúdo semanal para todas as plataformas"""
        platforms = ["instagram", "facebook", "tiktok", "twitter"]
        content_types = ["post", "story", "article", "thread"]
        
        weekly_content = []
        
        for platform in platforms:
            for content_type in content_types:
                content = self.generate_content(platform, week_theme, content_type)
                if content:
                    weekly_content.append(content)
        
        return weekly_content
    
    def generate_image_prompt(self, content: Dict) -> str:
        """Gera prompt para criação de imagem"""
        
        prompt = f"""
        Crie um prompt para Midjourney baseado neste conteúdo sobre paternidade:
        
        Título: {content.get('title', '')}
        Conteúdo: {content.get('content', '')}
        
        O prompt deve gerar uma imagem que:
        - Seja calorosa e acolhedora
        - Represente família e paternidade
        - Use cores azul (#1E3A8A), verde (#059669) e laranja (#EA580C)
        - Tenha estilo fotográfico realista
        - Seja inclusiva e diversa
        - Transmita a mensagem do conteúdo
        
        Retorne apenas o prompt para Midjourney, sem explicações adicionais.
        """
        
        try:
            response = self.client.chat.completions.create(
                model="gpt-4",
                messages=[{"role": "user", "content": prompt}],
                temperature=0.8,
                max_tokens=200
            )
            
            return response.choices[0].message.content.strip()
            
        except Exception as e:
            print(f"Erro ao gerar prompt de imagem: {e}")
            return "family, father and child, warm lighting, blue green orange colors, realistic photography style"

class ContentScheduler:
    def __init__(self):
        """Inicializa o agendador de conteúdo"""
        self.schedule = {}
    
    def create_weekly_schedule(self, content_list: List[Dict]) -> Dict:
        """Cria cronograma semanal de publicação"""
        
        weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
        schedule = {}
        
        for i, content in enumerate(content_list):
            day = weekdays[i % len(weekdays)]
            if day not in schedule:
                schedule[day] = []
            
            schedule[day].append({
                "platform": content["platform"],
                "content_type": content["content_type"],
                "content": content["content"],
                "scheduled_time": self._get_optimal_time(content["platform"])
            })
        
        return schedule
    
    def _get_optimal_time(self, platform: str) -> str:
        """Retorna horário otimizado para cada plataforma"""
        optimal_times = {
            "instagram": "09:00",
            "facebook": "10:00",
            "tiktok": "19:00",
            "twitter": "08:00"
        }
        
        return optimal_times.get(platform, "12:00")

class PerformanceTracker:
    def __init__(self):
        """Inicializa o rastreador de performance"""
        self.metrics = []
    
    def track_post(self, post_data: Dict):
        """Rastreia métricas de um post"""
        metric = {
            "date": datetime.now(),
            "platform": post_data["platform"],
            "theme": post_data["theme"],
            "engagement_rate": post_data.get("engagement", 0),
            "reach": post_data.get("reach", 0),
            "likes": post_data.get("likes", 0),
            "shares": post_data.get("shares", 0),
            "comments": post_data.get("comments", 0),
            "ai_generated": True
        }
        
        self.metrics.append(metric)
    
    def analyze_performance(self) -> Dict:
        """Analisa performance geral"""
        if not self.metrics:
            return {}
        
        df = pd.DataFrame(self.metrics)
        
        analysis = {
            "total_posts": len(df),
            "avg_engagement": df["engagement_rate"].mean(),
            "best_platform": df.groupby("platform")["engagement_rate"].mean().idxmax(),
            "best_theme": df.groupby("theme")["engagement_rate"].mean().idxmax(),
            "total_reach": df["reach"].sum(),
            "total_engagement": df["engagement_rate"].sum()
        }
        
        return analysis

def main():
    """Função principal para teste"""
    
    # Configurar API key
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        print("Erro: OPENAI_API_KEY não configurada")
        return
    
    # Inicializar gerador
    generator = ContentGenerator(api_key)
    
    # Gerar conteúdo de exemplo
    theme = "paternidade ativa"
    content = generator.generate_content("instagram", theme, "post")
    
    if content:
        print("Conteúdo gerado com sucesso!")
        print(f"Plataforma: {content['platform']}")
        print(f"Tema: {content['theme']}")
        print(f"Conteúdo: {content['content']}")
        
        # Gerar prompt de imagem
        image_prompt = generator.generate_image_prompt(content['content'])
        print(f"\nPrompt para imagem: {image_prompt}")
    else:
        print("Erro ao gerar conteúdo")

if __name__ == "__main__":
    main() 