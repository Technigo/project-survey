import React from 'react';

import FormButtons from './FormButtons';

const FirstPage = ({ step, setStep }) => {
  return (
    <>
      {step === 0 && (
        <div className="first-page-container">
          <h1>Welcome!</h1>
          <FormButtons 
            step={step}
            setStep={setStep}
          />
        </div>
      )}
    </>
  );
};

export default FirstPage;