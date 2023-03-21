import React from 'react';

const tvtypes = ['Surprise me!', 'Series', 'Mini-series', 'Documentary', 'Anthology series'];

const Type = ({ type, setType, step }) => {
  // Function for setting a new item when navigating by keyboard
  const handleKeyDown = (event, item) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setType(item);
    }
  };

  return (
    <div className="type-container">
      <div className="headings">
        <h2 aria-hidden="true">Question {step} / 5</h2>
        {/* For screen reader */}
        <h2 className="visually-hidden">Question {step} out of 5</h2>
        <hr />
      </div>
      <div className="question-container">
        <h4>What type of series are you in the mood for?</h4>
        <form className="form type">
          {/* Mapping over the array tvtypes, creating radio buttons for each element */}
          {tvtypes.map((item) => (
            <label key={item} htmlFor={item}>
              <div className="radiobtn" role="button" aria-label={item}>
                <input
                  type="radio"
                  id={item}
                  className="radiotypebtn"
                  onChange={(event) => setType(event.target.value)}
                  value={item}
                  checked={type === item}
                  onKeyDown={(event) => handleKeyDown(event, item)} />
                <span
                  onClick={() => setType(item)}
                  onKeyDown={(event) => handleKeyDown(event, item)}
                  role="button"
                  tabIndex={0}>
                  {item}
                </span>
              </div>
            </label>
          ))}
        </form>
      </div>
    </div>
  );
};

export default Type;