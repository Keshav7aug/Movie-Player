import axios from 'axios';
const api = axios.create({
  baseURL: "http://localhost:8000"
});

export const fetchMovies = async () => {
  try {
    const response = await api.get("/movies");
    return response
  } catch (error) {
    console.error("Error fetching Movies", error)
    return []
  }
}


export const searchMovies = async (search_term: string) => {
  try {
    const response = await api.get("/search", {
      params: {
        "search_term": search_term
      }
    });
    return response
  } catch (error) {
    console.error("Error searching Movies", error)
    return []
  }
}