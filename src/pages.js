import React from "react";
import { Link } from "react-router-dom";

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
              {movie.Name}
              {movie.Date}
              {movie.Actors}
              <img src={movie.Image} alt={movie.Name} />
              {movie.Rating}
              <button>Remove</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export function AddReview() {
  return (
    <section>
      <h1>Add Review</h1>
      <nav>
        <Link to="/">Return Home</Link>
      </nav>
      <form>
        <label>
          Movie Name:
          <input type="text" name="Name" />
        </label>
        <br />
        <label>
          Date Release:
          <input type="text" name="Date" />
        </label>
        <br />
        <label>
          Actors:
          <input type="text" name="Actor" />
        </label>
        <br />
        <label>
          Poster:
          <select>
            <option value="images/Maverick.jpg">Picture 1</option>
            <option value="images/Fast.jpg">Picture 2</option>
            <option value="images/Landing.jpg">Picture 3</option>
            <option value="images/Autumn.jpg">Picture 4</option>
          </select>
        </label>
        <br />
        <label>
          Rating out of 5 stars:
          <input type="text" name="Rating" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}
