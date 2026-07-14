import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List


class Movie(BaseModel):
    title: str
    url: str
    release_date: str
    id: int


class Movies(BaseModel):
    movies: List[Movie]


app = FastAPI()

origins = [
    "http://localhost:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

memory_db = {"movies": []}

@app.get("/movies", response_model=Movies)
def get_movies():
    return memory_db

@app.get("/search", response_model=Movies)
def search_movies(search_term: str):
    filtered_movies = [movie for movie in memory_db["movies"] if search_term.lower() in movie.title.lower()]
    return {
        "movies": filtered_movies
    }


@app.post("/movies", response_model=Movie)
def add_movie(movie: Movie):
    memory_db["movies"].append(movie)
    return movie



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)