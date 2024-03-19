import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCardS from "../components/MovieCardS";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa6";
import Footer from "../components/Footer";
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";

const Results = () => {
  const { query } = useParams();
  const search = query.substring(7);
  const [movies, setMovies] = useState([]);
  const [found, setFound] = useState(true);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState();
  const [selectedValue, setSelectedValue] = useState();
  const inputRef = useRef(null);
  const navigate = useNavigate();

  async function getMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=61e2ff59&s=${search}`
    );
    setMovies(data.Search);
    setFound(data.Response !== "False");
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getMovies();
      setLoading(false);
    }, 200);
  }, [query]);

  function cleanAndSearch(query) {
    if (query === "" || query === undefined || query === null) {
      toast.error("Invalid Search.");
      return;
    }
    query = query
      .trim()
      .split()[0]
      .replace(/ /g, "+");
    query = "search=" + query;

    navigate(`/results/${query}`);
  }

  function sortMovies(e) {
    if (e === "OLD") {
      setMovies([...movies].sort((a, b) => (a.Year) - (b.Year)));
    } else if (e === "NEW") {
      setMovies([...movies].sort((a, b) => (b.Year) - (a.Year)));
    }
  }

  return (
    <div>
      <div className="results__title--container">
        <FaArrowLeft
          size={64}
          className="back__arrow"
          onClick={() => navigate("/")}
        />
        {found ? (
          <div className="landing__title">
            Results for &#39;{search.replace(/\+/g, " ")}&#39;
          </div>
        ) : (
          <div className="landing__title">
            No results found for &#39;{search.replace(/\+/g, " ")}&#39;
          </div>
        )}
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
            placeholder="Make another search"
            onKeyDown={(event) =>
              event.key === "Enter" && cleanAndSearch(event.target.value)
            }
          />

          <div
            className="svg__holder"
            onClick={() => cleanAndSearch(inputValue)}
          >
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
        <select
          className="dropdown"
          id="filter"
          onChange={(event) => {
            sortMovies(event.target.value)
            setSelectedValue(event.target.value)
          }}
          value={selectedValue}
        >
          <option value="DEFAULT">Filter</option>
          <option value="NEW">Most Recent</option>
          <option value="OLD">Earliest Release</option>
        </select>
      </div>
      {loading ? (
        <div className="movies__container">
          <TailSpin stroke="#ff2400" speed="2.5" width={300} height={300} />
        </div>
      ) : !found ? (
        <div className="landing__title">
          <img className="not__found" src="/not_found.png" alt="" />
        </div>
      ) : (
        <div className="movies__container">
          {movies.map((movie) => (
            <MovieCardS key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Results;
// test
