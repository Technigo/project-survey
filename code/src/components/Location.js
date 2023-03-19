import React, { useState } from 'react';

const Location = ({
  isabelleTheme,
  continent,
  setContinent,
  country,
  setCountry,
  counter,
  setCounter
}) => {
  const [error, setError] = useState(false);

  const nextStepContinent = () => {
    if (continent === '') {
      setError(true)
    } else {
      setCounter(counter + 1);
    }
  }

  const nextStepCountry = () => {
    if (country === '') {
      setError(true)
    } else {
      setCounter(counter + 1);
    }
  }

  return (
    <div className="survey-wrapper location">
      {isabelleTheme ? (
        <form>
          <h3>
            <span>
              In what continent do you want your Isabelle Huppert films to be set?
            </span>
          </h3>
          {error && (<p>* Please select an option</p>)}
          <select
            onChange={(event) => setContinent(event.target.value)}
            value={continent}>
            <option value="" disabled>Select continent</option>
            <option value="an European">Europe</option>
            <option value="an Asian">Asia</option>
            <option value="an African">Africa</option>
          </select>
          <button
            type="button"
            onClick={nextStepContinent}>
            Next
          </button>
        </form>
      ) : (
        <form>
          <h3><span>Where do you want your film to be set?</span></h3>
          {error && (<p>* Please select an option</p>)}
          <select
            onChange={(event) => setCountry(event.target.value)}
            value={country}>
            <option value="" disabled>Select genre</option>
            <option value="in Iran">Iran</option>
            <option value="in Austria">Austria</option>
            <option value="in Belgium">Belgium</option>
            <option value="in the UK">the UK</option>
            <option value="in Taiwan">Taiwan</option>
            <option value="in Australia">Australia</option>
            <option value="anywhere in the world">Anywhere in the world</option>
          </select>
          <button
            type="button"
            onClick={nextStepCountry}>
            Next
          </button>
        </form>
      )}
    </div>
  );
};

export default Location