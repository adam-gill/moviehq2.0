import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa6";

const Movie = () => {
  const { imdbID } = useParams();
  // const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  async function getMovie() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=61e2ff59&i=${imdbID}`
    );
    setMovie(data);
    // setLoading(false);
  }

  useEffect(() => {
    getMovie();
    // setLoading(false);
  }, []);

  // function tomatoes(score) {
  //   if (score > 60
  // }

  return (
    <div>
      <div className="results__title--container">
        <FaArrowLeft
          size={64}
          className="back__arrow"
          onClick={() => navigate("/")}
        />
        <div className="landing__title">{movie.Title}</div>
      </div>

      <div className="container__movie">
        <div className="horizontal-line hl-mod"></div>
        <div className="movie__poster--text">
          <img src={movie.Poster} alt="" />
          <div className="movie__text">
            <div className="movie__plot">
              <span className="movie__subtitle">Summary:</span>
              {movie.Plot}
            </div>
            {/* <div className="movie__plot">
              <span className="movie__subtitle">Ratings:</span>
              IMDB: {movie.Ratings[0].Value} <br /> <br />
              <div className="rotten">
                Rotten Tomatoes: {movie.Ratings[1].Value}
                  <img
                    src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg"
                    alt=""
                    className="tomato"
                  />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
