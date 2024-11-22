from fastapi import FastAPI, Query

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Bem-vindo à API de Recomendações!"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000, debug=True, reload=True)