import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa6";
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";

const Movie = () => {
  const { imdbID } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  async function getMovie() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=61e2ff59&i=${imdbID}`
    );
    setMovie(data);
  }

  useEffect(() => {
    setLoading(true);
    getMovie();
    setLoading(false);
  }, [loading, movie]);

  return (
    <div>
      <div className="results__title--container">
        <FaArrowLeft
          size={64}
          className="back__arrow"
          onClick={() => navigate(-1)}
        />
        <div className="landing__title eeee">{movie.Title}</div>
      </div>

      <div className="container__movie">
        <div className="horizontal-line hl-mod"></div>
        {loading ? (
          <div className="movies__container">
            <TailSpin stroke="#ff2400" speed="2.5" width={300} height={300} />
          </div>
        ) : (
          <div className="movie__poster--text">
            <img className="movie2" src={movie.Poster} alt="" />
            <div className="movie__text">
              <div className="movie__plot">
                <span className="movie__subtitle">Summary:</span>
                {movie.Plot}
              </div>
              <div className="movie__plot">
                <span className="movie__subtitle">Rating:</span>
                IMDB: {movie.imdbRating}/10
              </div>
              <div className="movie__plot">
                <div className="movie__subtitle">{movie.Genre}</div>
                <div className="movie__subtitle">
                  {movie.Rated} &#124; {movie.Runtime}
                </div>
                <div className="movie__subtitle">{movie.Year}</div>
              </div>
            </div>
          </div>
        )}
        <div className="horizontal-line hl-mod"></div>
      </div>
      <footer>
        <div className="logo__text--container">
          <div className="logo__link">
            <img className="logo__img footermod1" src="/film_icon.png" alt="" />
            <p className="logo__text footermod2">Movie HQ</p>
          </div>
        </div>
        <div className="footer__links">
          <div className="footer__link">
            <div
              className="footer__anchor link__hover-effect link__hover-effect--white cursor"
              onClick={() => navigate("/")}
            >
              Home
            </div>
          </div>
          <div className="footer__link">
            <div
              className="footer__anchor link__hover-effect link__hover-effect--white cursor"
              onClick={() => navigate("/")}
            >
              Search
            </div>
          </div>
          <div className="footer__link">
            <div className="footer__anchor link__hover-effect link__hover-effect--white no-cursor">
              Contact
            </div>
          </div>
        </div>
        <div className="copyright">Copyright 2024 &copy; Movie HQ</div>
      </footer>
    </div>
  );
};

export default Movie;
