import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, AddReview } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addReview" element={<AddReview />} />
      </Routes>
    </div>
  );
}

export default App;
