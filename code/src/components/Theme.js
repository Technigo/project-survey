import React, { useState } from 'react';

const isabelleThemes = ['Friendship', 'Provocative', 'Coming of age', 'Trying to find oneself', 'The stranger', 'Destructive relationships', 'Mind games', 'On the verge of a nervous breakdown', 'About Isabelle Huppert']
const themesGeneral = ['Coming of age', 'Social satire', 'Historical commentary', 'Provocative / Erotic', 'Anything']

const Theme = ({
  isabelle,
  isabelleTheme,
  setIsabelleTheme,
  theme,
  setTheme,
  counter,
  setCounter
}) => {
  const [error, setError] = useState(false);

  const nextStepIsabelle = () => {
    if (isabelleTheme === '') {
      setError(true)
    } else {
      setCounter(counter + 1);
    }
  }

  const nextStepGeneral = () => {
    if (theme === '') {
      setError(true)
    } else {
      setCounter(counter + 1);
    }
  }

  return (
    <div className="survey-wrapper theme">
      {isabelle === 'love' ? (
        <>
          <h3><span>What theme do you want your Isabelle Huppert film to have?</span></h3>
          <form className="theme-form">
            {error && (<p>* Please select an option</p>)}
            {isabelleThemes.map((option) => (
              <label key={option} htmlFor={option}>
                <input
                  type="radio"
                  value={option}
                  id={option}
                  onChange={(event) => setIsabelleTheme(event.target.value)}
                  checked={isabelleTheme === option} />
                {option}
              </label>
            ))}
          </form>
          <button
            type="button"
            onClick={nextStepIsabelle}>
            Next
          </button>
        </>
      ) : (
        <>
          <h3><span>What themes are you curious about?</span></h3>
          <form className="theme-form general">
            {error && (<p>* Please select an option</p>)}
            {themesGeneral.map((option) => (
              <label key={option} htmlFor={option}>
                <input
                  type="radio"
                  value={option}
                  id={option}
                  onChange={(event) => setTheme(event.target.value)}
                  checked={theme === option} />
                {option}
              </label>
            ))}
          </form>
          <button
            type="button"
            onClick={nextStepGeneral}>
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default Theme
