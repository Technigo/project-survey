import React, { useState } from 'react';

export const App = () => {
  const [stepCounter, setStepCounter] = useState(1);
  const [userName, setUserName] = useState('');
  const [preference, setPreference] = useState('');
  const [condiment, setCondiment] = useState('');
  const [spicy, setSpicy] = useState('');
  const [sprinkle, setSprinkle] = useState('');

  const handleNextButtonClick = () => {
    setStepCounter(stepCounter + 1);
  }

  const handleUserNameInputChange = (event) => {
    setUserName(event.target.value);
  }

  const handlePreferenceInputChange = (event) => {
    setPreference(event.target.value);
    console.log(preference);
  }

  const handleCondimentChange = (event) => {
    setCondiment(event.target.value);
    console.log(condiment);
  }

  const handleSpicyChange = (event) => {
    setSpicy(event.target.value);
    console.log(spicy);
  }

  const handleSprinkleChange = (event) => {
    setSprinkle(event.target.value);
  }

  return (
    <section className="container">
      <div className="stepOne">
        {stepCounter === 1 && (
          <>
            <h1>Welcome to the Pomodoro generator!</h1>
            <p>Gone are the days of tasteless carbonara and dull pesto jars.
              We have created this pomodoro generator to help you take the first steps into
              the Queendom of the greatest sauce on earth, tomato sauce. There are endless
              variations to explore and to avoid choice overload, you will answer
              a few questions in this survey to help narrow down the options.
            </p>
            <p>Start by entering your name below and find your perfect pomodoro match! &#127813;
            </p>
            <div className="start">
              <input type="text" placeholder="Your Name" value={userName} onChange={handleUserNameInputChange} />
              <button type="button" className="button" onClick={handleNextButtonClick}>Start!</button>
            </div>
          </>
        )}
      </div>

      <div className="questions">
        {stepCounter === 2 && (
          <>
            <h1>Hi {userName}!</h1>
            <h2>How would you like your sauce?</h2>
            <div className="radioContainer">
              <label htmlFor="meat">
                <input type="radio" className="radio" id="meat" name="preference" value="Filled with pancetta!" onChange={handlePreferenceInputChange} checked={preference === 'Filled with pancetta!'} />
                Filled with pancetta!
              </label>
              <label htmlFor="veg">
                <input type="radio" className="radio" id="veg" name="preference" value="Vegetarian" onChange={handlePreferenceInputChange} checked={preference === 'Vegetarian'} />
                Vegetarian please!
              </label>
            </div>
            <button type="button" className="button" onClick={handleNextButtonClick}>Next</button>
          </>
        )}

        {stepCounter === 3 && (
          <>
            <h2>Which is your favorite tomato pairing?</h2>
            <div className="radioContainer">
              <label htmlFor="cheese">
                <input type="radio" className="radio" id="cheese" name="condiment" value="Cheese" onChange={handleCondimentChange} checked={condiment === 'Cheese'} />
                 Cheeeeese!!
              </label>
              <label htmlFor="aubergine">
                <input type="radio" className="radio" id="aubergine" name="condiment" value="Aubergine" onChange={handleCondimentChange} checked={condiment === 'Aubergine'} />
                 Aubergine
              </label>
              <label htmlFor="chili">
                <input type="radio" className="radio" id="chili" name="condiment" value="Chili" onChange={handleCondimentChange} checked={condiment === 'Chili'} />
                 Chili &#127798;
              </label>
            </div>
            <button type="button" className="button" onClick={handleNextButtonClick}>Next</button>
          </>
        )}

        {stepCounter === 4 && (
          <>
            <h2>How spicy would you like your sauce?</h2>
            <div className="radioContainer">
              <label htmlFor="A">
                <input type="radio" className="radio" id="A" name="spicy" value="Not spicy" onChange={handleSpicyChange} checked={spicy === 'Not spicy'} />
                Not spicy
              </label>
              <label htmlFor="B">
                <input type="radio" className="radio" id="B" name="spicy" value="Lagom" onChange={handleSpicyChange} checked={spicy === 'Lagom'} />
                Lagom
              </label>
              <label htmlFor="C">
                <input type="radio" className="radio" id="C" name="spicy" value="Spicy" onChange={handleSpicyChange} checked={spicy === 'Spicy'} />
                Spicy! &#128293;
              </label>
            </div>
            <button type="button" className="button" onClick={handleNextButtonClick}>Next</button>
          </>
        )}

        {stepCounter === 5 && (
          <>
            <h2>What would you like to sprinkle on top of your pomodoro?</h2>
            <p>A meal is not complete until you add the topping! &#129472;</p>
            {/* <label htmlFor="sprinkle">
              Choose sprinkle */}
            {/* <div className="custom-select" style={{ width: '200px' }}> */}
            <select value={sprinkle} className="sprinkle" id="sprinkle" onChange={handleSprinkleChange}>
              <option value="">Select Topping</option>
              <option value="Parmesan">Parmesan</option>
              <option value="Basil">Basil</option>
              <option value="All the toppings!">All the toppings!</option>
            </select>
            {/* </label> */}
            <button type="button" className="button" onClick={handleNextButtonClick}>Next</button>
          </>
        )}
      </div>

      <div className="summary">
        {stepCounter === 6 && (
          <>
            <div>
              <h1>{userName}&apos;s Pomodoro summary </h1>
              <p>Preference: {preference}</p>
              <p>Condiment: {condiment}</p>
              <p>How spicy: {spicy}</p>
              <p>Sprinkle: {sprinkle}</p>
            </div>
            <h3>Let&apos;s get cookin&apos;! &#127813;</h3>
            <button type="button" className="button" onClick={handleNextButtonClick}>Generate Recipe!</button>
          </>
        )}
      </div>
    </section>
  );
}
