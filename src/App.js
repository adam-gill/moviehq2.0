import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Results from "./pages/Results";
import Movie from "./components/Movie";
import React from "react";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/results/:query" element={<Results />}></Route>
            <Route path="/movie/:imdbID" element={<Movie />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
