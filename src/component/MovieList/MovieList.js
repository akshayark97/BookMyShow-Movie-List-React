import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = ({ movies, onWatchTrailer }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.EventCode}
          movie={movie}
          onWatchTrailer={onWatchTrailer}
        />
      ))}
    </div>
  );
};

export default MovieList;
