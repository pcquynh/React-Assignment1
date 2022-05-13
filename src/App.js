import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, AddReview } from "./pages";

function App() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    // load the json data
    fetch("./movies.json")
      .then((response) => response.json())
      .then(setMovies)
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home movies={movies} setMovies={setMovies} />}
        />
        <Route path="/addReview" element={<AddReview />} />
      </Routes>
    </div>
  );
}

export default App;
