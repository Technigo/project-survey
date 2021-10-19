import React, { useState } from "react";
import MovieType from "./MovieType";

const MovieSelector = ({ onStepChange }) => {
  const [selectedGenre, setGenre] = useState("");

  const onGenreSelectorChange = (event) => setGenre(event.target.value);

  if (selectedGenre) {
    return <MovieType genre={selectedGenre} />;
  } else {
    return (
      <section className="selector">
        <div className="hero-content">
          <h1 className="hero-title">Time to select category</h1>
          <h2 className="hero-subtitle"> Use the dropdown to select</h2>
          <select onChange={onGenreSelectorChange} value={selectedGenre}>
            <option disabled value="">
              Select movie category
            </option>
            <option value="scary">Scary </option>
            <option value="documentary">Documentary </option>
            <option value="romantic">Romantic </option>
            <option value="action">Action</option>
          </select>
        </div>
      </section>
    );
  }
};

export default MovieSelector;
