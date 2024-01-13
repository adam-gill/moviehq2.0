import React, { useRef} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCardS from "../components/MovieCardS";
import toast from "react-hot-toast";

const Results = () => {
  const { query } = useParams();
  const search = query.substring(7);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState();
  const inputRef = useRef(null);
  const navigate = useNavigate();

  async function getMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=61e2ff59&s=${search}`
    );
    setMovies(data.Search);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
    setLoading(false);
  }, []);

  function cleanAndSearch(query) {
    if (query === "" || query === undefined || query === null) {
      toast.error("Invalid Search.");
      return;
    }
    query = query.trim().split()[0].replace(/ /g, "+");
    query = "search=" + query;

    navigate(`/${query}`);
  }

  return (
    <div>
      <div className="landing__title">
        Results for &#39;{search.replace(/\+/g, " ")}&#39;
      </div>
      <div className="input__container">
        <div className="input__wrapper">
          <input
          value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            autoComplete="off"
            ref={inputRef}
            id="search__box"
            type="text"
            placeholder="Make another Search"
            onKeyDown={(event) =>
              event.key === "Enter" && cleanAndSearch(event.target.value)
            }
          />

          <div className="svg__holder" onClick={cleanAndSearch(inputValue)}>
            <svg
              className="magnifying__glass"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
            >
              <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="movies__container">
        {movies.map((movie) => (
          <MovieCardS key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Results;
