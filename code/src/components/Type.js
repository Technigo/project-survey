import React from 'react';

const tvtypes = ['Series', 'Mini-series', 'Documentary', 'Anthology series', 'Surprise me!'];

const Type = ({ type, setType, step, handleStepIncrease }) => {
  console.log('NOW RUNNING TYPE.js')
  console.log('type', type)
  return (
    <div className="type-container">
      <div className="headings">
        <h2 aria-label={`Question ${step} out of 5`} aria-hidden="true">Question {step} / 5</h2>
        <hr />
      </div>
      <div className="question-container">
        <h4>What type of series are you in the mood for?</h4>
        <form className="form type">
          {/* <p>Current state: {type}</p> */}
          {tvtypes.map((item) => (
            <label key={item} htmlFor="radiotype">
              <div
                className="radiobtn"
                role="button"
                onClick={(event) => setType(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    setType(item);
                    handleStepIncrease();
                  }
                }}
                tabIndex={0}>
                <input
                  type="radio"
                  id="radiotype"
                  className="radiotypebtn"
                  onChange={(event) => setType(event.target.value)}
                  value={item}
                  checked={type === item} />
                <span>{item}</span>
              </div>
            </label>
          ))}
        </form>
      </div>
    </div>
  );
};

export default Type;
