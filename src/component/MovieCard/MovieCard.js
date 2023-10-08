import React from "react";
import "./MovieCard.css"; // Import the CSS for MovieCard

const MovieCard = ({ movie, onWatchTrailer }) => {
  return (
    <div
      className="movie-card"
      onClick={() => onWatchTrailer(movie.TrailerURL, movie)}
    >
      <div className="play-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="45" fill="transparent" />

          <polygon points="35,25 75,50 35,75" fill="white" />
        </svg>
      </div>
      <img src={movie.EventImageUrl} alt={movie.EventTitle} />
      <h3 className="movie-title">{movie.EventTitle}</h3>
    </div>
  );
};

export default MovieCard;
