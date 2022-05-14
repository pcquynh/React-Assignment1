import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function Home({ movies = [], onChangeMovies = (f) => f }) {
  if (movies === null || movies === undefined)
    return <h2>No movies availble</h2>;

  return (
    <>
      <section>
        <h1>Movie's Review</h1>
        <nav>
          <Link to="addReview">Add Review</Link>
        </nav>

        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              {movie.name}
              {movie.date}
              {movie.actor}
              <img src={movie.poster} alt={movie.name} />
              {movie.rating}
              <button onClick={() => onChangeMovies(movie)}>Remove</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export function AddReview({ addMovie }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [actor, setActor] = useState("");
  const [poster, setPoster] = useState("images/Maverick.jpg");
  const [rating, setRating] = useState("");

  const navigate = useNavigate();

  const changePoster = (poster) => {
    setPoster(poster);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const id = uuidv4();
    addMovie({ id, name, date, actor, poster, rating });
    navigate("/");
  };

  return (
    <section>
      <h1>Add Review</h1>
      <nav>
        <Link to="/">Return Home</Link>
      </nav>
      <form onSubmit={submitForm}>
        <label>Movie Name:</label>
        <input
          type="text"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <label>Date Release:</label>
        <input
          type="text"
          name="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <br />
        <label>Actors:</label>
        <input
          type="text"
          name="Actor"
          value={actor}
          onChange={(e) => setActor(e.target.value)}
        />

        <br />
        <label>Poster: </label>
        <select value={poster} onChange={(e) => changePoster(e.target.value)}>
          <option value="images/Maverick.jpg">Picture 1</option>
          <option value="images/Fast.jpg">Picture 2</option>
          <option value="images/Landing.jpg">Picture 3</option>
          <option value="images/Autumn.jpg">Picture 4</option>
        </select>

        <br />
        <label>Rating out of 5 stars:</label>
        <input
          type="text"
          name="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <br />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}
