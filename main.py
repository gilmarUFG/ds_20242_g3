from fastapi import FastAPI, Query
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


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000, debug=True, reload=True)