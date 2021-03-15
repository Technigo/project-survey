import React from "react";
import { useState } from "react";

const Form = () => {
  const [movieName, setMovieName] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [rating, setRating] = useState("");

  const onMovieNameChange = (event) => {
    setMovieName(event.target.value);
    console.log(movieName);
  };

  const onMovieGenreChange = (event) => {
    setMovieGenre(event.target.value);
    console.log(movieGenre);
  };

  const onRatingChange = (event) => {
    setRating(event.target.value);
    console.log(rating);
  };

  return (
    <div className="form-wrapper">
      <form className="form-display-column">
        <label htmlFor="text-field">
          Which movie is your all time favorite?
        </label>
        <input
          type="text"
          id="text-field"
          value={movieName}
          onChange={onMovieNameChange}
        />

        <label htmlFor="dropDown">Which would you like to see more of?</label>
        <select id="dropDown" onChange={onMovieGenreChange}>
          <option value=""></option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Comedy">Comedy</option>
          <option value="Comedy">Crime & Mystery</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Historical">Historical</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Science fiction">Science fiction</option>
          <option value="Thriller">Thriller</option>
          <option value="Western">Western</option>
          <option value="Other">Other</option>
        </select>

        <label>How would you rate this survey? </label>
        <div className="form-radioButton">
          <p>
            <input
              type="radio"
              value="very-good"
              id="very-good"
              name="radioButton"
              onChange={onRatingChange}
            />
            <label htmlFor="very-good"> Very good</label>
          </p>
          <p>
            <input
              type="radio"
              value="good"
              id="good"
              name="radioButton"
              onChange={onRatingChange}
            />
            <label htmlFor="good"> Good</label>
          </p>
          <p>
            <input type="radio" value="boring" id="boring" name="radioButton" />
            <label htmlFor="boring"> Boring</label>
          </p>
          <p>
            <input
              type="radio"
              value="super-boring"
              id="super-boring"
              name="radioButton"
            />
            <label htmlFor="super-boring"> Super boring</label>
          </p>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
