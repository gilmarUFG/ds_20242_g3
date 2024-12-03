from fastapi import FastAPI, Depends
from pydantic import BaseModel
from typing import Optional, List
from models.recommender import Recommender

app = FastAPI()

# o Recommender - carrega os csv's, o modelo do tensorflow, etc
recommender_instance = Recommender()

# dependency para reutilizar a mesma instância
def get_recommender():
    return recommender_instance

# Schemas
class RecommendationContentRequest(BaseModel):
    search: str
    top_k: Optional[int] = 10

class RecommendationUserRequest(BaseModel):
    new_user_id: int
    new_rating_ave: float
    new_action: float
    new_adventure: float
    new_animation: float
    new_childrens: float
    new_comedy: float
    new_crime: float
    new_documentary: float
    new_drama: float
    new_fantasy: float
    new_horror: float
    new_mystery: float
    new_romance: float
    new_scifi: float
    new_thriller: float
    new_rating_count: int
    top_k: int

@app.get("/")
async def root():
    return {"message": "Bem-vindo à API de Recomendações!"}

@app.get("/recommendations/content", summary="Recomendações baseadas em pesquisa")
async def get_recommendations_content(
    payload: RecommendationContentRequest,
    recommender: Recommender = Depends(get_recommender)
):
    """
    Retorna recomendações baseadas na barra de pesquisa fornecida pelo usuário.
    """
    recommendations = recommender.recommend_content(payload.search, payload.top_k)
    return {"content_recommendations": recommendations}

@app.get("/recommendations/user", summary="Recomendações baseadas em avaliações do usuário")
async def get_recommendations_user(
    payload: RecommendationUserRequest,
    recommender: Recommender = Depends(get_recommender)
):
    """
    Retorna recomendações com base nas avaliações médias fornecidas pelo usuário.
    """
    user_ratings = [
        payload.new_user_id,
        payload.new_rating_ave,
        payload.new_action,
        payload.new_adventure,
        payload.new_animation,
        payload.new_childrens,
        payload.new_comedy,
        payload.new_crime,
        payload.new_documentary,
        payload.new_drama,
        payload.new_fantasy,
        payload.new_horror,
        payload.new_mystery,
        payload.new_romance,
        payload.new_scifi,
        payload.new_thriller,
        payload.new_rating_count
    ]
    
    recommendations = recommender.recommend_user(user_ratings, payload.top_k)
    
    return {"user_recommendations": recommendations}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
