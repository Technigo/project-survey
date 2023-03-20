import React from 'react';

const Summary = ({
  name,
  isabelle,
  isabelleTheme,
  theme,
  continent,
  country,
  open,
  genre,
  counter,
  setCounter
}) => {
  const nextStepResult = () => {
    setCounter(counter + 1);
  }

  const genreToLowerCase = genre.toLowerCase();
  const isabelleThemeToLowerCase = isabelleTheme.toLowerCase();
  const themeToLowerCase = theme.toLowerCase();

  return (
    <div className="survey-wrapper summary">
      <h2>
        <span>Summary</span>
      </h2>
      <br />
      {open ? (
        <>
          <div className="summary-box">
            <p>
              <span>
                Your name is&nbsp;
                <span className="summary-span">
                  {name}
                </span>
                &nbsp;and you&nbsp;
                <span className="summary-span">
                  {isabelle}
                </span>
                &nbsp;Isabelle Huppert. Tonight you would like to watch&nbsp;
                <span className="summary-span">
                  {continent}
                </span>
                &nbsp;film about&nbsp;
                <span className="summary-span">
                  {isabelleThemeToLowerCase}
                </span>
                &nbsp;but you are&nbsp;
                <span className="summary-span">
                  {open}
                </span>
                &nbsp;to anything.
              </span>
            </p>
          </div>
          <br />
          <p>
            <span>Okay, lets see what we can do for you!</span>
          </p>
        </>
      ) : (
        <>
          <div className="summary-box">
            <p>
              <span className="summary-main-span">
                Your name is&nbsp;
                <span className="summary-span">
                  {name}
                </span>
                &nbsp;and you&nbsp;
                <span className="summary-span">
                  {isabelle}
                </span>
                  &nbsp;about Isabelle Huppert and tonight you want to watch a&nbsp;
                <span className="summary-span">
                  {genreToLowerCase}
                </span>
                &nbsp;film set&nbsp;
                <span className="summary-span">
                  {country}
                </span>
                  &nbsp;about&nbsp;
                <span className="summary-span">
                  {themeToLowerCase}.
                </span>
              </span>
            </p>
          </div>
          <br />
          <p className="next">
            <span>Okay, lets see what we can do for you!</span>
          </p>
        </>
      )}
      <button
        type="submit"
        onClick={nextStepResult}
        aria-label="Submit button">
          See result
      </button>
    </div>
  );
}

export default Summary;

