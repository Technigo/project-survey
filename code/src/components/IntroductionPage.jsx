import React, { useState } from 'react';

const IntroductionPage = (props) => {
  return (
    <div className="startPage">
      <h4>We are always want to improve,</h4>
      <p> Section 1 asks you about you and the state of life.</p>
      <p> Section 2 focuses on your recently purchased product.</p>
      <p> Section 3 is about our service.</p>

      <button
        className="btn"
        type="button"
        onClick={() => props.onNextStep()}
      >
        Continue
      </button>
    </div>
  );
};

export default IntroductionPage;
