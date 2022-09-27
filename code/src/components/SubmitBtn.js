import React from 'react';

const SubmitBtn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('You clicked submit');
  }
  return (
    <input type="Submit" onSubmit={handleSubmit} />
  );
};

export default SubmitBtn;