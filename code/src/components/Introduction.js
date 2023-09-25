import React from 'react';

import FormButtons from './FormButtons';

const Introduction = ({ step, setStep }) => {
  return (
    <div className="first-page-container">
      <h1 className="first-page-header">Take a personality test!</h1>
      <h2 className="first-page-text">You wont regret it unless you do but then you will have only lost 30 seconds of your life</h2>
      <FormButtons step={step} setStep={setStep} />
    </div>
  );
};

export default Introduction;