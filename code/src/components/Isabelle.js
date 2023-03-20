import React, { useState } from 'react';

const Isabelle = ({ isabelle, setIsabelle, counter, setCounter }) => {
  const [error, setError] = useState(false);
  const handleRadioChange = (event) => {
    setIsabelle(event.target.value)
  }

  const handleIncreaseCounterClick = () => {
    if (isabelle === '') {
      setError(true)
    } else {
      setCounter(counter + 1);
    }
  }

  return (
    <div className="survey-wrapper isabelle">
      <h3><span>What do you think about Isabelle Huppert&apos;s acting?</span></h3>
      <form className="isabelle-form">
        {error && (<p>* Please select an option</p>)}
        <label key="loveHer" htmlFor="loveHer">
          <input
            type="radio"
            id="loveHer"
            value="love"
            role="button"
            tabIndex={0}
            onChange={handleRadioChange}
            checked={isabelle === 'love'} />
          I love her
        </label>
        <label key="whoIsShe" htmlFor="whoIsShe">
          <input
            type="radio"
            id="whoIsShe"
            value="don't know much"
            role="button"
            tabIndex={0}
            onChange={handleRadioChange}
            checked={isabelle === "don't know much"} />
          Who is she?
        </label>
      </form>
      <button
        type="button"
        onClick={handleIncreaseCounterClick}
        aria-label="Next button">
        Next
      </button>
    </div>
  );
}

export default Isabelle