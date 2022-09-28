import React, { useState } from 'react';

const IntroductionPage = (props) => {
 

  return (
    <div className="startPage">
      <p>We are always want to improve,</p>
      <h4> Section 1 asks you about you and the state of life.</h4>
      <h4> Section 2 focuses on your recently purchased product.</h4>
      <h4> Section 3 is about our service.</h4>

      <button type="button" onClick={() => props.onNextStep()}>
        continue
      </button>
      <span>press Enter</span>

      
    </div>
  );
};

export default IntroductionPage;
