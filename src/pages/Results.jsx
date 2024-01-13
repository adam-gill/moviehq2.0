import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCardS from "../components/MovieCardS";

const Results = () => {
const { query }  = useParams();
const search = query.substring(7);
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(false);


async function getMovies() {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=61e2ff59&s=${search}`)
    setMovies(data.Search);
    setLoading(false);
}

useEffect(() => {
    getMovies();
    setLoading(false);
}, [])


return (
    <div>
      {movies.map((movie) => (
        <MovieCardS key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default Results;
