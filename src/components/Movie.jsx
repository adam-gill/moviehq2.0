import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa6";

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
    setLoading(false);
  }

  useEffect(() => {
    getMovie();
    setLoading(false);
  }, []);

  console.log(movie);

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

      <div>
        <img src={movie.Poster} alt="" />
      </div>
    </div>
  );
};

export default Movie;
