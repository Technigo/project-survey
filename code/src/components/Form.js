import React, { useState } from 'react';

import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Submit from './Submit';
import Summary from './Summary';


const Form = () => {
  const [showSummary, setShowSummary] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSummary(true);
  };

  return (
    <>
      {!showSummary ? (
        <form onSubmit={handleSubmit}>
          <Question1 />
          <Question2 />
          <Question3 />
          <Submit />
        </form>
      ) : (
          <Summary />
        )}
    </>
  );
};

export default Form;