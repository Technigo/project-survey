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
  const handleIncreaseCounterClick = () => {
    setCounter(counter + 1);
  }

  const genreToLowerCase = genre.toLowerCase();
  const isabelleThemeToLowerCase = isabelleTheme.toLowerCase();
  const themeToLowerCase = theme.toLowerCase();

  return (
    <div className="survey-wrapper summary">
      <h2><span>Summary</span></h2>
      {open ? (
        <>
          <div className="summary-box">
            <p>
              <span>Your name is <span className="summary-span">{name}</span> and you
                <span className="summary-span">{isabelle}</span>
                Isabelle Huppert. Tonight you would like to watch
                <span className="summary-span">{continent}</span>
                film about <span className="summary-span">{isabelleThemeToLowerCase}</span>
                but you are <span className="summary-span">{open}</span> to anything.
              </span>
            </p>
          </div>
          <p><span>Okay, lets see what we can do for you!</span></p>
        </>
      ) : (
        <>
          <div className="summary-box">
            <p>
              <span>Your name is <span className="summary-span">{name}</span> and you
                <span className="summary-span"> {isabelle}</span>
                  about Isabelle Huppert and tonight you want to watch a <span className="summary-span">{genreToLowerCase}</span> film set <span className="summary-span">{country}</span>
                  about <span className="summary-span">{themeToLowerCase}</span>.
              </span>
            </p>
          </div>
          <p className="next"><span>Okay, lets see what we can do for you!</span></p>
        </>
      )}
      <button type="submit" onClick={handleIncreaseCounterClick}>See result</button>
    </div>
  );
}

export default Summary;

