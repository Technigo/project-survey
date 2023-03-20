import React from 'react'

const levelSelect = ['YES', 'NO']

export const Level = ({ level, setLevel }) => {
  const handleLevelSelect = (event) => {
    setLevel(event.target.value);
  }
  return (
    <div className="page-one-container">
      <h4 className="page-one-title">Bench Press</h4>
      <p className="page-one-sub-title">1 RM</p>
      <p className="page-one-question">We do the math – you lift!</p>
      <form className="yes-no-buttton">
        {levelSelect.map((yesorno) => (
          <label key={yesorno} htmlFor={`level-select-${yesorno}`}>
            <input
              className="radio-buttons"
              type="radio"
              id={`level-select-${yesorno}`}
              value={yesorno}
              onChange={handleLevelSelect}
              checked={level === yesorno} />
            {yesorno}
          </label>
        ))}
      </form>
    </div>
  );
};

export default Level