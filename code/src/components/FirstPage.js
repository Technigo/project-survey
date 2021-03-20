import React from 'react';

import FormButtons from './FormButtons';
import BlobFirstPage from './BlobFirstPage';

const FirstPage = ({ step, setStep }) => {
  return (
    <>
      {step === 0 && (
        <div className="first-page-container">
          <BlobFirstPage />
          <div className="container">
            <h1 className="first-page-header">Do you like sushi?</h1>
            <p className="first-page-text">Then enter this survey!</p>
            <FormButtons 
              step={step}
              setStep={setStep}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FirstPage;