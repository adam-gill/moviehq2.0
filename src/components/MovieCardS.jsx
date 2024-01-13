import React from "react";

const MovieCardS = ({ movie }) => {
  return (
    <>
      <div className="movie no-cursor">
        <div className="poster__half">
          <img
            className="poster__img"
            src={movie.Poster === "N/A" ? "/not_found.jpg" : movie.Poster}
            alt=""
          />
        </div>
        <div className="text__half">
          <h1 className="movie__title">{movie.Title}</h1>
          <h3 className="year">{movie.Year}</h3>
        </div>
      </div>
    </>
  );
};

export default MovieCardS;
