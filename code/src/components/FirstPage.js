import React from 'react';

import FormButtons from './FormButtons';

const FirstPage = ({ step, setStep }) => {
  return (
    <>
        <div className="first-page-container">
          <h1 className="first-page-header">Do you like sushi?</h1>
          <h2 className="first-page-text">Enter this survey then!</h2>
          <FormButtons 
            step={step}
            setStep={setStep}
          />
        </div>
    </>
  );
};

export default FirstPage;