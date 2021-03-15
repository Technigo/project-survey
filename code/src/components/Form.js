import React from 'react';

import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Submit from './Submit';


const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Question1 />
        <Question2 />
        <Question3 />
        <Submit />
      </form>
    </>
  );
};

export default Form;