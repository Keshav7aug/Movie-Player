import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020", url: "" },
    { id: 2, title: "Terminator", release_date: "1999", url: "" },
    { id: 3, title: "The Matrix", release_date: "1998", url: "" },
  ];

  const handleSearch = (e: React.SubmitEvent) => {
    e.preventDefault()
    alert(searchQuery)
   };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text" 
          placeholder="search for movies..." 
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (<MovieCard movie={movie} key={movie.id} />)
        ))}
      </div>
    </div>
  );
}

export default Home