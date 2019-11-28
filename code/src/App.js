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
        <div>
          <h1>Here's your result:</h1>
          <p>You like the movie <span>{movie}</span> the most</p>
          <p>You´re favourite christmas song is <span>{songName}</span></p>
          <p>You´re favourite christmas sweet is <span>{candyGroup}</span></p>
          <p>Merry Christmas!</p>
          <button onClick={event => setShowResult(false)}>Back to survey</button>
        </div>
      )}

      {!showResult && (
        <form onSubmit={handleSubmit}>

          <div className="christmasMovie">
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

          <div className="christmasSong">
            <h3>Youre favourite song is? {songName}</h3>
            <input
              type="text"
              onChange={event => setSongName(event.target.value)}
              value={songName}
            />
          </div>

          <div className="christmasCandy">
            {/* <h3>What is youre favourite chrismas candy?</h3> */}

            {/* {candyGroups.map(candy => (
              <label key={candy}>
                <input
                  type="radio"
                  value={candy}
                  onChange={event => setCandyGroup(event.target.value)}
                  checked={candyGroup === candy}
                />
                {candy}
            </label> ))} */}

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

          <button className="submitButton" type="submit">Submit the survey!</button>
        </form>
      )}
      <Footer />
    </div>
  );
};
