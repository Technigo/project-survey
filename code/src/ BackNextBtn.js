import React, { useState } from 'react';

export const BackNextBtn = ({ step, setStep, backFront, loneTeam, learnKnow }) => {
  const [noAnswerMsg, setNoAnswerMsg] = useState('none');

  const handleBtnClick = (isBack) => {
    setStep((prevStep) => (isBack ? prevStep - 1 : prevStep + 1));
    setNoAnswerMsg('none');
  };

  const handleNextBtnClick = () => {
    const answers = [backFront, loneTeam, learnKnow];
    if (answers[step - 1]) {
      handleBtnClick(true);
    } else {
      setNoAnswerMsg('block');
    }
  };

  return (
    <>
      <p className="select-one-message" style={{ display: noAnswerMsg }}>Select one option to continue!</p>
      <div className="backnext-btn-container">
        <button className="back-btn" type="button" onClick={() => handleBtnClick(false)}>Back</button>
        <button className="next-btn" type="button" onClick={handleNextBtnClick}>Next</button>
      </div>
    </>
  );
};