import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
// import SpinningCircles from "react-loading-icons/dist/esm/components/spinning-circles";
// import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";
import MovieCardS from "../components/MovieCardS";
import toast from "react-hot-toast";
import Footer from "../components/Footer";

const Home = () => {
  const featuredMovies = [
    {
      Title: "Fight Club",
      Year: "1999",
      imdbID: "tt0137523",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Nightcrawler",
      Year: "2014",
      imdbID: "tt2872718",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2U1YzdhYWMtZWUzMi00OWI1LWFkM2ItNWVjM2YxMGQ2MmNhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      Title: "American Psycho",
      Year: "2000",
      imdbID: "tt0144084",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Se7en",
      Year: "1995",
      imdbID: "tt0114369",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
  ];

  const inputRef = useRef(null);
  const sectRef = useRef(null);
  const navigate = useNavigate();

  const searchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      sectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  function cleanAndSearch(query) {
    if (query === "" || query === undefined || query === null) {
        toast.error("Invalid Search.");
        return
    }
    query = query.trim().split()[0].replace(/ /g, '+');
    query = "search=" + query;
    
    navigate(`/results/${query}`)
  }

  return (
    <>
      <nav>
        <div className="background__container">
          <div className="blur__container">
            <div className="nav__content--container">
              <div className="logo__text--container">
                <Link className="logo__link" path="/">
                  <img className="logo__img" src="/film_icon.png" alt="" />
                  <p className="logo__text">Movie HQ</p>
                </Link>
              </div>

              <ul className="nav__links">
                <li className="link">
                  <Link path="/" className="link--btn">
                    Home
                  </Link>
                </li>
                <li id="search__btn" className="link">
                  <div
                    id="search__button"
                    onClick={searchClick}
                    className="link--btn cursor"
                  >
                    Search
                  </div>
                </li>
                <li id="contact" className="link">
                  <div className="link--btn no-cursor">
                    Contact
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <section id="title">
        <div className="landing__title">
          <h1>Stream All Your Favorite Movies at Movie HQ 🎥</h1>
        </div>
        {/* <TailSpin stroke="#ff2400" speed="2.5"/> */}
      </section>

      <section id="search" ref={sectRef}>
        <div className="input__container">
          <div className="input__wrapper">
            <input
            autoComplete="off"
              ref={inputRef}
              id="search__box"
              type="text"
              placeholder="Search for Movies by Title"
              onKeyDown={(event) => event.key === "Enter" && cleanAndSearch(event.target.value)}
            />

            <div className="svg__holder">
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
      </section>

      <section id="movies">
        <div className="movies">
          <i className="fas fa-spinner movies__loading--spinner"></i>
        </div>
        <div className="movies__container">
          {featuredMovies.map((movie) => (
            <MovieCardS key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
