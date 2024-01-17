import { useNavigate } from "react-router-dom";
import React from "react";
import PropTypes from 'prop-types';


const MovieCardS = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="movie" onClick={() => navigate(`/movie/${movie.imdbID}`)}>
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

MovieCardS.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string,
    Type: PropTypes.string,
    Poster: PropTypes.string
  }).isRequired,
};

export default MovieCardS;
