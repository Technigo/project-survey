import React, { useState } from 'react';

import { Classic } from './components/Classic';
import { Arrabiata } from './components/Arrabiata';
import { Norma } from './components/Norma';
import { Scarpariello } from './components/Scarpariello';
import { Amatriciana } from './components/Amatriciana';
import { Marinara } from './components/Marinara';

export const App = () => {
  const [stepCounter, setStepCounter] = useState(1);
  const [userName, setUserName] = useState('');
  const [preference, setPreference] = useState('');
  const [condiment, setCondiment] = useState('');
  const [texture, setTexture] = useState('');
  const [sprinkle, setSprinkle] = useState('');

  const handleNextButtonClick = () => {
    setStepCounter(stepCounter + 1);
  }

  const handleUserNameInputChange = (event) => {
    setUserName(event.target.value);
  }

  const handlePreferenceInputChange = (event) => {
    setPreference(event.target.value);
  }

  const handleCondimentChange = (event) => {
    setCondiment(event.target.value);
  }

  const handleTextureChange = (event) => {
    setTexture(event.target.value);
  }

  const handleSprinkleChange = (event) => {
    setSprinkle(event.target.value);
  }

  const renderRecipe = () => {
    if (condiment === 'Chili' && texture === 'Smooth') {
      return (<Classic />)
    } else if (condiment === 'Tomato' && texture === 'Smooth') {
      return (<Classic />)
    } else if (condiment === 'Chili' && texture === 'Chunky') {
      return (<Arrabiata />)
    } else if (condiment === 'Eggplant') {
      return (<Norma />)
    } else if (preference === 'Vegetarian' && condiment === 'Cheese') {
      return (<Scarpariello />)
    } else if (preference === 'Filled with pancetta!' && condiment === 'Cheese') {
      return (<Amatriciana />)
    } else if (condiment === 'Tomato' && texture === 'Chunky') {
      return (<Marinara />)
    } else (<p>We could unfortunately not find a recipe for you</p>)
  }

  return (
    <>
      {stepCounter === 1 && (
        <section className="landing-page">
          {stepCounter === 1 && (
            <div className="landing-container">
              <h1 className="landing-heading">Pomodoro generator</h1>
              <button type="button" className="landing-button" onClick={handleNextButtonClick}>What is this? &#8250;</button>
            </div>
          )}
        </section>
      )}
      {stepCounter > 1 && stepCounter < 8 && (
        <section className="container">
          {stepCounter === 2 && (
            <>
              <h1>Welcome to the Pomodoro generator!</h1>
              <p>Gone are the days of tasteless ready made&apos;s and dull pesto jars.
                This pomodoro generator was created to help you take the first steps into
                the Queendom of the greatest sauce on earth, tomato sauce. There are endless
                variations to explore, and to avoid choice overload, you only need to answer
                a few questions in this survey to help narrow down the options.
              </p>
              <p>Start by entering your name below to find your perfect pomodoro match! &#127813;
              </p>
              <div className="start">
                <input type="text" placeholder="Your Name" value={userName} onChange={handleUserNameInputChange} />
                <button type="button" className="button" onClick={handleNextButtonClick}>Start!</button>
              </div>
            </>
          )}

          <div className="questions">
            {stepCounter === 3 && (
              <>
                <h1>Hi {userName}!</h1>
                <h2>How would you like your sauce?</h2>
                <div className="radioContainer">
                  <label className="radio-label" htmlFor="meat">
                    <input type="radio" className="radio" id="meat" name="preference" value="Filled with pancetta!" onChange={handlePreferenceInputChange} checked={preference === 'Filled with pancetta!'} />
                    Filled with pancetta!
                  </label>
                  <label className="radio-label" htmlFor="veg">
                    <input type="radio" className="radio" id="veg" name="preference" value="Vegetarian" onChange={handlePreferenceInputChange} checked={preference === 'Vegetarian'} />
                    Vegetarian please!
                  </label>
                </div>
                <button type="button" className="button" onClick={handleNextButtonClick}>Next &#8250;</button>
              </>
            )}

            {stepCounter === 4 && (
              <>
                <h2>Which is your favorite tomato pairing?</h2>
                <div className="radioContainer">
                  <label className="radio-label" htmlFor="tomato">
                    <input type="radio" className="radio" id="tomato" name="condiment" value="Tomato" onChange={handleCondimentChange} checked={condiment === 'Tomato'} />
                      &#127813; More tomatoes &#127813;
                  </label>
                  <label className="radio-label" htmlFor="cheese">
                    <input type="radio" className="radio" id="cheese" name="condiment" value="Cheese" onChange={handleCondimentChange} checked={condiment === 'Cheese'} />
                      Cheeeeese!!
                  </label>
                  <label className="radio-label" htmlFor="eggplant">
                    <input type="radio" className="radio" id="eggplant" name="condiment" value="Eggplant" onChange={handleCondimentChange} checked={condiment === 'Eggplant'} />
                      Eggplant
                  </label>
                  <label className="radio-label" htmlFor="chili">
                    <input type="radio" className="radio" id="chili" name="condiment" value="Chili" onChange={handleCondimentChange} checked={condiment === 'Chili'} />
                      Chili &#127798;
                  </label>
                </div>
                <button type="button" className="button" onClick={handleNextButtonClick}>Next &#8250;</button>
              </>
            )}

            {stepCounter === 5 && (
              <>
                <h2>Which texture would you like your sauce to have?</h2>
                <div className="radioContainer">
                  <label className="radio-label" htmlFor="smooth">
                    <input type="radio" className="radio" id="smooth" name="texture" value="Smooth" onChange={handleTextureChange} checked={texture === 'Smooth'} />
                    Smooth
                  </label>
                  <label className="radio-label" htmlFor="chunky">
                    <input type="radio" className="radio" id="chunky" name="texture" value="Chunky" onChange={handleTextureChange} checked={texture === 'Chunky'} />
                    Chunky
                  </label>
                </div>
                <button type="button" className="button" onClick={handleNextButtonClick}>Next &#8250;</button>
              </>
            )}

            {stepCounter === 6 && (
              <>
                <h2>What would you like to sprinkle on top of your pomodoro?</h2>
                <p>A meal is not complete until you add toppings! &#129472;</p>
                <select value={sprinkle} className="sprinkle" id="sprinkle" onChange={handleSprinkleChange}>
                  <option value="">Select Topping</option>
                  <option value="Parmesan">Parmesan</option>
                  <option value="Basil">Basil</option>
                  <option value="All the toppings!">All the toppings!</option>
                </select>
                <button type="button" className="button" onClick={handleNextButtonClick}>Submit</button>
              </>
            )}
          </div>

          {stepCounter === 7 && (
            <div className="summary">
              <div>
                <h1>{userName}&apos;s Pomodoro summary </h1>
                <p>Preference: {preference}</p>
                <p>Condiment: {condiment}</p>
                <p>Texture: {texture}</p>
                <p>Topping: {sprinkle}</p>
              </div>
              <h3>Let&apos;s get cookin! &#127813;</h3>
              <button type="button" className="button" onClick={handleNextButtonClick}>Generate Recipe!</button>
            </div>
          )}
        </section>
      )}

      {stepCounter === 8 && (
        <section className="recipe">
          {renderRecipe()}
        </section>
      )}
    </>
  );
}
