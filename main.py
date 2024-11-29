from fastapi import FastAPI, Request, Query
from typing import Optional, List
from pydantic import BaseModel
from models.recommender import Recommender

app = FastAPI()

recommender = Recommender()

@app.get("/")
async def root():
    return {"message": "Bem-vindo à API de Recomendações!"}

@app.get("/recommendations/content")
async def get_recommendations(query: str = Query(..., description="Texto para recomendar"), top_k: int = 20):
    """
    endpoint para obter recomendações baseadas na barra de pesquisa, de acordo com o nome.
    """
#    recommendations = recommender.recommend(query, top_k)
    return {
        "input_query": query,
#        "recommendations": recommendations,
#        "count": len(recommendations),
    }

@app.get("/recommendations/user")
async def get_recommendations_user(request: Request):
    """            
    user_content: possui avaliacao media de 14 generos
    dimensoes user_content: 14 
    user_vectir>                                                                                          
    endpoint para obter recomendações baseadas nas avaliações médias do usuário.
    """
    ## pegar dados do json e colocar em user_vec
    user_data = await request.json()
    
    # Separar 'top_k' e criar o vetor 'user_vec'
    top_k = user_data.pop("top_k", None)
    user_vec = list(user_data.values())

    # Chamar o sistema de recomendação
    recommendations = recommender.recommend_user(user_vec, top_k)
    
    return {
        "recommendations": recommendations
    }


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)