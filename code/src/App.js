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
              variations to explore and to avoid choice overload you will answer
              a few questions in this survey to help narrow down the options.
              Start by entering your name below to find your perfect pomodoro match!
            </p>
            <div className="start">
              <input type="text" placeholder="Your Name" value={userName} onChange={handleUserNameInputChange} />
              <button type="button" onClick={handleNextButtonClick}>Start!</button>
            </div>
          </>
        )}
      </div>

      <div className="questions">
        {stepCounter === 2 && (
          <>
            <h1>Hi {userName}!</h1>
            <h2>Would you like your sauce..?</h2>
            <label htmlFor="meat">
              <input type="radio" id="meat" name="preference" value="Meat" onChange={handlePreferenceInputChange} checked={preference === 'Meat'} />
              Filled with pancetta!
            </label>
            <label htmlFor="veg">
              <input type="radio" id="veg" name="preference" value="Veg" onChange={handlePreferenceInputChange} checked={preference === 'Veg'} />
              Vegetarian please!
            </label>
            <button type="button" onClick={handleNextButtonClick}>Next</button>
          </>
        )}

        {stepCounter === 3 && (
          <>
            <h2>Which is your favorite tomato pairing?</h2>
            <label htmlFor="cheese">
              <input type="radio" id="cheese" name="condiment" value="cheese" onChange={handleCondimentChange} checked={condiment === 'cheese'} />
              Cheeeeese!!
            </label>
            <label htmlFor="aubergine">
              <input type="radio" id="aubergine" name="condiment" value="aubergine" onChange={handleCondimentChange} checked={condiment === 'aubergine'} />
              Aubergine
            </label>
            <label htmlFor="chili">
              <input type="radio" id="chili" name="condiment" value="chili" onChange={handleCondimentChange} checked={condiment === 'chili'} />
              Chili &#127798;
            </label>
            <button type="button" onClick={handleNextButtonClick}>Next</button>
          </>
        )}

        {stepCounter === 4 && (
          <>
            <h2>How spicy would you like your sauce?</h2>
            <label htmlFor="A">
              <input type="radio" id="A" name="spicy" value="not spicy" onChange={handleSpicyChange} checked={spicy === 'not spicy'} />
              Not spicy
            </label>
            <label htmlFor="B">
              <input type="radio" id="B" name="spicy" value="lagom" onChange={handleSpicyChange} checked={spicy === 'lagom'} />
              Lagom
            </label>
            <label htmlFor="C">
              <input type="radio" id="C" name="spicy" value="spicy" onChange={handleSpicyChange} checked={spicy === 'spicy'} />
              Spicy!
            </label>
            <button type="button" onClick={handleNextButtonClick}>Next</button>
          </>
        )}

        {stepCounter === 5 && (
          <>
            <h1>What would you like to sprinkle on top of your pomodoro?</h1>
            {/* <label htmlFor="sprinkle">
              Choose sprinkle */}
            <select value={sprinkle} id="sprinkle" onChange={handleSprinkleChange}>
              <option value="">Select Sprinkle</option>
              <option value="Parmesan">Parmesan</option>
              <option value="Basil">Basil</option>
              <option value="Both">Both</option>
            </select>
            {/* </label> */}
            <button type="button" onClick={handleNextButtonClick}>Next</button>
          </>
        )}
      </div>

      <div className="summary">
        {stepCounter === 6 && (
          <>
            <div>
              <h2>{userName}&apos;s Pomodoro summary </h2>
              <p>Preference: {preference}</p>
              <p>Condiment: {condiment}</p>
              <p>How spicy: {spicy}</p>
              <p>Sprinkle: {sprinkle}</p>
            </div>
            <h3>Let&apos;s get cookin&apos;! </h3>
            <button type="button" onClick={handleNextButtonClick}>Generate Recipe!</button>
          </>
        )}
      </div>
    </section>
  );
}
