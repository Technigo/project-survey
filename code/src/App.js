import React from 'react'
import { useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import './App.css'
import { format } from 'path'

export const App = () => {
  const [movie, setMovie] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [songName, setSongName] = useState("");
  const candyGroups = ["Gingerbread", "Chocolate", "Butterscotch"];
  const [candyGroup, setCandyGroup] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    setShowResult(true);
  };

  return (

    <div className="formComponent">
      <Header />
      {showResult && (
        <div className="resultComponent">
          <h3>Here's your result:</h3>
          <p>You like the movie <span>{movie}</span> the most</p>
          <p>You´re favourite christmas song is <span>{songName}</span></p>
          <p>You´re favourite christmas sweet is <span>{candyGroup}</span></p>
          <h3>Merry Christmas!</h3>
          <button onClick={event => setShowResult(false)}>Back to survey</button>
        </div>
      )}

      {!showResult && (
        <form className="formContainer" onSubmit={handleSubmit}>

          <div className="christmasMovie">
            <h3>What is you´re favourite christmas movie?</h3>
            <div className="dropdownMovies">
              <select
                onChange={event => setMovie(event.target.value)}
                value={movie}>

                <option value="" />
                <option value="Love Actually">Love Actually</option>
                <option value="The Grinch">The Grinch</option>
                <option value="The Holiday">The Holiday</option>
                <option value="Home Alone 2: Lost in New York">
                  Home Alone 2: Lost in New York</option>
              </select>
            </div>
          </div>

          <div className="christmasSong">
            <h3>What is you´re favourite christmas song:{songName}</h3>
            <input className="textBox"
              type="text"
              onChange={event => setSongName(event.target.value)}
              value={songName}
            />
          </div>

          <div className="christmasCandy">
            <h3>What is you´re favourite christmas candy?</h3>
            <label>
              <input
                type="radio"
                value="Gingerbread"
                onChange={event => setCandyGroup(event.target.value)}
                checked={candyGroup === "Gingerbread"}
              />
              Gingerbread
            </label>
            <label>
              <input
                type="radio"
                value="Chocolate"
                onChange={event => setCandyGroup(event.target.value)}
                checked={candyGroup === "Chocolate"}
              />
              Chocolate
            </label>
            <label>
              <input
                type="radio"
                value="Butterscotch"
                onChange={event => setCandyGroup(event.target.value)}
                checked={candyGroup === "Butterscotch"}
              />
              Butterscotch
            </label>
          </div>

          <button type="submit">Submit!</button>
        </form>
      )}
      <Footer />
    </div>
  );
};
