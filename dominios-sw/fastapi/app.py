from fastapi import FastAPI
from pydantic import BaseModel

# API mockada para testes

app = FastAPI()

# DTOs
class AverageRecommendation(BaseModel):
    userId: int
    ratingCount: int
    averageRating: float

class GenreRecommendation(BaseModel):
    userId: int
    ratingCount: int
    ratingAvg: float
    action: float
    adventure: float
    animation: float
    children: float
    comedy: float
    crime: float
    documentary: float
    drama: float
    fantasy: float
    horror: float
    mystery: float
    romance: float
    scienceFiction: float
    thriller: float

@app.post("/average")
async def process_average_recommendation(data: AverageRecommendation):
    return {"message": "Processed Average Recommendation", "data": data}

@app.post("/genre")
async def process_genre_recommendation(data: GenreRecommendation):
    return {"message": "Processed Genre Recommendation", "data": data}
