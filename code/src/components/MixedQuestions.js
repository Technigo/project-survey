import React, { useState } from 'react';

const genres = ['Drama', 'Comedy', 'Thriller', 'Mystery', 'Any']
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
        <form>
          <h3>
            <span>
            Are you basically open to anything?
            </span>
          </h3>
          <label htmlFor={open}>
            <input
              type="checkbox"
              checked={open}
              value="open"
              onChange={handleCheckBox} />
              Check here
          </label>
          <button
            type="submit"
            onClick={submitOpen}>
            Submit Answers
          </button>
        </form>
      ) : (
        <form>
          <h3><span>What genres are you interested in?</span></h3>
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
          <button
            type="submit"
            onClick={submitGenre}>
            Submit Answers
          </button>
        </form>
      )}
    </div>
  );
};

export default MixedQuestions;
