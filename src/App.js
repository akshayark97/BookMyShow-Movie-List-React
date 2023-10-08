import React, { useState, useEffect, useRef } from "react";
import MovieList from "./component/MovieList/MovieList";
import Header from "./component/Header/Header";
import { fetchMovieData } from "./api/api";
import "./App.css";
import Trailer from "./component/Trailer/Trailer";
import Filter from "./component/Filter/Filter";

const App = () => {
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [movies, setMovies] = useState([]);
  const [clickedMovie, setClickedMovie] = useState({});

  const trailerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetching movie data from api
        const movieData = await fetchMovieData();
        setMovies(Object.values(movieData));
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchData();
  }, []);

  // Event triggered when clicking any of the movie card
  const handleWatchTrailer = (url, movie) => {
    setTrailerUrl(url);
    setClickedMovie(movie);

    // Scroll to the top of the MovieList to show the trailer
    const movieListContainer = document.querySelector(".movie-list");
    // movieListContainer.scrollTop = 0; // Scroll to the top

    // using smooth scrolling
    movieListContainer.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container">
      <Header />
      <Filter />
      <div ref={trailerRef} className="movie-list">
        {trailerUrl && (
          <Trailer trailerUrl={trailerUrl} clickedMovie={clickedMovie} />
        )}
        <MovieList movies={movies} onWatchTrailer={handleWatchTrailer} />
      </div>
    </div>
  );
};

export default App;
