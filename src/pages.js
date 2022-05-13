import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="addReview">Add Review</Link>
      </nav>
    </div>
  );
}

export function AddReview() {
  return (
    <div>
      <h1>Add Review</h1>
      <nav>
        <Link to="/">Return Home</Link>
      </nav>
    </div>
  );
}
