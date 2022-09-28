import React, { useState } from 'react';

export const App = () => {
  const [stepCounter, setStepCounter] = useState(1);
  const [userName, setUserName] = useState('');
  const [preference, setPreference] = useState('');
  const [condiment, setCondiment] = useState('');
  const [spicy, setSpicy] = useState('');
  const [age, setAge] = useState('');

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

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }

  return (
    <div className="container">
      {stepCounter === 1 && (
        <>
          <h1>Hi! What is your name?</h1>
          <input type="text" value={userName} onChange={handleUserNameInputChange} />
          <button type="button" onClick={handleNextButtonClick}>Next</button>
        </>
      )}

      {stepCounter === 2 && (
        <>
          <h1>Hi {userName}!</h1>
          <p>Let&apos;s find your pomodoro match &#127813;</p>
          <p>Would you like your sauce to be?</p>
          <label htmlFor="meat">
            <input type="radio" id="meat" name="preference" value="meat" onChange={handlePreferenceInputChange} />
            Meat
          </label>
          <label htmlFor="veg">
            <input type="radio" id="veg" name="preference" value="veg" onChange={handlePreferenceInputChange} />
            Veg
          </label>
          <label htmlFor="np">
            <input type="radio" id="np" name="preference" value="No Preference" onChange={handlePreferenceInputChange} />
            No preference
          </label>
          <button type="button" onClick={handleNextButtonClick}>Next</button>
        </>
      )}

      {stepCounter === 3 && (
        <>
          <h1>Which is your favorite tomato pairing?</h1>
          <label htmlFor="cheese">
            <input type="radio" id="cheese" name="condiment" value="cheese" onChange={handleCondimentChange} />
            Cheeeeese!!
          </label>
          <label htmlFor="aubergine">
            <input type="radio" id="aubergine" name="condiment" value="aubergine" onChange={handleCondimentChange} />
            Aubergine
          </label>
          <label htmlFor="chili">
            <input type="radio" id="chili" name="condiment" value="chili" onChange={handleCondimentChange} />
            Chili &#127798;
          </label>
          <button type="button" onClick={handleNextButtonClick}>Next</button>
        </>
      )}

      {stepCounter === 4 && (
        <>
          <h1>How spicy would you like your sauce?</h1>
          <label htmlFor="A">
            <input type="radio" id="A" name="spicy" value="notSpicy" onChange={handleSpicyChange} />
            Not spicy
          </label>
          <label htmlFor="B">
            <input type="radio" id="B" name="spicy" value="lagom" onChange={handleSpicyChange} />
            Lagom
          </label>
          <label htmlFor="C">
            <input type="radio" id="C" name="spicy" value="spicy" onChange={handleSpicyChange} />
            Spicy!
          </label>
          <button type="button" onClick={handleNextButtonClick}>Next</button>
        </>
      )}

      {stepCounter === 5 && (
        <>
          <label htmlFor="age">
            Choose your age:
            <select value={age} id="age" onChange={handleAgeChange}>
              <option value="0-17">0-17</option>
              <option value="18+">18+</option>
            </select>
          </label>
          <button type="button" onClick={handleNextButtonClick}>Next</button>
        </>
      )}

      {stepCounter === 6 && (
        <>
          <div>
            <h1>{userName}&apos;s Summary</h1>
            <p>Preference: {preference}</p>
            <p>Condiment: {condiment}</p>
            <p>How spicy: {spicy}</p>
            <p>Age: {age}</p>
          </div>
          <button type="button" onClick={handleNextButtonClick}>Generate Recipe!</button>
        </>
      )}
    </div>
  );
}
