import React, { useState } from 'react';
import { Background } from './styles/Background';

const isabelleThemes = ['Friendship', 'Mind Games', 'Provocation / Eroticism', 'Coming of age', 'Trying to find oneself', 'The stranger', 'Destructive relationships', 'On the verge of a nervous breakdown', 'Anything']
const themesGeneral = ['Coming of age', 'Social issues', 'The existence', 'Provocation / Eroticism', 'Crime', 'Relationships', 'Social Satire', 'History', 'Loneliness', 'Anything']

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
    <Background counter={counter}>
      <div className="survey-wrapper theme">
        {isabelle === 'love' ? (
          <>
            <h3><span>What theme do you want your Isabelle Huppert film to have?</span></h3>
            <form className="theme-form isabelle">
              {error && (<p>* Please select an option</p>)}
              {isabelleThemes.map((option) => (
                <label key={option} htmlFor={option}>
                  <input
                    type="radio"
                    id={option}
                    value={option}
                    role="button"
                    tabIndex={0}
                    onChange={(event) => setIsabelleTheme(event.target.value)}
                    checked={isabelleTheme === option} />
                  {option}
                </label>
              ))}
            </form>
            <button
              type="button"
              onClick={nextStepIsabelle}
              aria-label="Next button">
              Next
            </button>
          </>
        ) : (
          <div className="survey-wrapper general">
            <h3><span>What themes are you curious about?</span></h3>
            <form className="theme-form general">
              {error && (<p>* Please select an option</p>)}
              {themesGeneral.map((option) => (
                <label key={option} htmlFor={option}>
                  <input
                    type="radio"
                    id={option}
                    value={option}
                    role="button"
                    tabIndex={0}
                    onChange={(event) => setTheme(event.target.value)}
                    checked={theme === option} />
                  {option}
                </label>
              ))}
            </form>
            <button
              type="button"
              onClick={nextStepGeneral}
              aria-label="Next button">
              Next
            </button>
          </div>
        )}
      </div>
    </Background>
  );
};

export default Theme
