import React from 'react';

const occasions = ['every day', 'several times a week', 'once a week or less'];

export const Frequency = (props) => {
  const { frequency, setFrequency } = props;
  return (
    <div>
      <form className="radiobuttons" onSubmit={(event) => event.preventDefault()}>
        How often do you feel stressed?
        <div className="radio-options">
          {occasions.map((occasion) => (
            <label key={occasion} className="radio-buttons">
              <input
                type="radio"
                value={occasion}
                onChange={(event) => setFrequency(event.target.value)}
                checked={frequency === occasion} />
              {occasion}
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Frequency;
