// Trailer.js
import React from "react";
import "./Trailer.css";
import MovieInfo from "../MovieInfo/MovieInfo";

const Trailer = ({ trailerUrl, clickedMovie }) => {
  // Extract video ID from the YouTube URL
  const videoId = trailerUrl.split("v=")[1];

  return (
    <div className="trailer-container">
      <div className="video-container">
        <iframe
          width="500"
          height="300"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="video"
        />
      </div>
      <MovieInfo clickedMovie={clickedMovie} />
    </div>
  );
};

export default Trailer;
