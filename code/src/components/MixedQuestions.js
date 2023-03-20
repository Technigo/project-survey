import React, { useState } from 'react';

const genres = ['Drama', 'Comedy', 'Thriller', 'Mystery', 'Sci-Fi', 'Horror', 'Fantasy', 'Romance', 'Social realism', 'Any']
const MixedQuestions = ({
  continent,
  open,
  setOpen,
  genre,
  setGenre,
  counter,
  setCounter
}) => {
  const [error, setError] = useState(false);

  const submitOpen = () => {
    setCounter(counter + 1);
    if (open === '') {
      setOpen('not open');
    }
  }

  const handleCheckBox = (event) => {
    setOpen(event.target.value);
  }

  const submitGenre = () => {
    if (genre === '') {
      setError(true)
    } else {
      setCounter(counter + 1);
    }
  }

  return (
    <div className="survey-wrapper mixed">
      {continent ? (
        <>
          <h3>
            <span>
            Are you basically open to anything?
            </span>
          </h3>
          <form className="form-mixed">
            <label htmlFor={open}>
              <input
                id={open}
                type="checkbox"
                checked={open}
                tabIndex="0"
                aria-checked={open}
                value="open"
                onChange={handleCheckBox} />
                Check here
            </label>
          </form>
          <button
            type="submit"
            onClick={submitOpen}
            aria-label="Submit answers button">
            Submit Answers
          </button>
        </>
      ) : (
        <>
          <h3><span>What genres are you interested in?</span></h3>
          <form className="form-mixed">
            {error && (<p>* Please select an option</p>)}
            {genres.map((option) => (
              <label key={option} htmlFor={option}>
                <input
                  type="radio"
                  value={option}
                  id={option}
                  onChange={(event) => setGenre(event.target.value)}
                  checked={genre === option} />
                {option}
              </label>
            ))}
          </form>
          <button
            type="submit"
            onClick={submitGenre}
            aria-label="Submit answers button">
            Submit Answers
          </button>
        </>
      )}
    </div>
  );
};

export default MixedQuestions;
