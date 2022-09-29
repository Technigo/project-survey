import React from 'react';

export const Scale = ({ scale, setScale, step, setStep }) => {
  const handleCounterButtonClick3 = (shouldIncrese) => {
    if (shouldIncrese && step < 5) {
      setStep(step + 1);
    } else if (!shouldIncrese && step > 0) {
      setStep(step - 1);
    }
  }

  return (
    <><div className="question-wrapper">
      <div className="question">
        <label htmlFor="range">On a scale of 0-10 how happy are you with Earth? would you recommend it to others?</label>
        <input
          id="range"
          type="range"
          min="0"
          max="10"
          value={scale}
          onChange={(e) => setScale(e.target.value)} />
        <div className="range-display">
          {scale}
        </div>
      </div>
    </div>
    <div>
      <button type="button" className="button-submit" onClick={() => handleCounterButtonClick3(true)}>Submit <span className="arrow" /> </button>
    </div>
    </>
  );
}
