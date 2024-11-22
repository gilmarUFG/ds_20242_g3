import logging
from tensorflow.keras.models import load_model
from typing import List
import os


logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    handlers=[
        logging.StreamHandler(), 
        logging.FileHandler("../logs/recommender.log", mode="a")
    ]
)

models = {
    "recUser": "content_user_based.keras",
    "recSearch": "idk yet"
}

class Recommender:
    def __init__(self):
        self.data = []
        self.__models = {}

        for model_name, model_path in models.items():
            self.load_models(model_name, model_path)

    def load_models(self, model_name: str, model_path: str):
        if model_name not in self.__models:
            try:
                if not os.path.exists(model_path):
                    raise FileNotFoundError(f"Arquivo do modelo não encontrado: {model_path}")
                
                model = load_model(model_path)
                self.__models[model_name] = model
                logging.info(f"Modelo '{model_name}' carregado com sucesso.")
            except Exception as e:
                logging.error(f"Erro ao carregar o modelo '{model_name}' a partir de {model_path}: {e}")
                raise  
        else:
            logging.info(f"Modelo '{model_name}' já está carregado.")
    
    def recommend(self, query: str, top_k: int = 10) -> List[int]:
        
        return 