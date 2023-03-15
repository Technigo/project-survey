import React from 'react';

export const Answer = ({ answer, setAnswer }) => {
  const handleAnswer = (event) => {
    setAnswer(event.target.value);
  }
  return (

    <div className="bestthingbox">
      <h3><span>Would you recommend this site to a friend?</span></h3>
      <label htmlFor="radio">
        <input
          type="radio"
          value="Yes"
          onChange={handleAnswer}
          checked={answer === 'Yes'} />
                Yes!
      </label>
      <label htmlFor="radio">
        <input
          type="radio"
          value="No"
          onChange={handleAnswer}
          checked={answer === 'No'} />
                No!
      </label>
    </div>

  );
}