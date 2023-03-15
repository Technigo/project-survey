import React from 'react';

export const Answer = ({ setAnswer }) => {
  const handleAnswer = (event) => {
    setAnswer(event.target.value);
  }
  return (

    <div className="bestthingbox">
      <h3><span>Would you recommend this site to a friend?</span></h3>
      <label>
        <input
          type="radio"
          value="Yes"
          onChange={handleAnswer}
          checked={Answer === 'Yes'} />
                Yes!
      </label>
      <label>
        <input
          type="radio"
          value="No"
          onChange={handleAnswer}
          checked={Answer === 'No'} />
                No!
      </label>
    </div>

  );
}