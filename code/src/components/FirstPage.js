import React from 'react';

import FormButtons from './FormButtons';
import BlobOne from './BlobOne';

const FirstPage = ({ step, setStep }) => {
  return (
    <>
      {step === 0 && (
        <div className="first-page-container">
          <BlobOne />
          <h1>Do you like sushi?</h1>
          <p>Then enter this survey!</p>
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