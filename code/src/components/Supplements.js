import React from 'react';

const SupplementsQuestion = ({ supplements, setSupplements }) => {
  const handleSupplementsQuestionInputChange = (event) => {
    setSupplements(event.target.value);
  }
  return (
    <>
      <p>Do you take any medicine, mineral or vitamin supplements?</p>
      <input value={supplements} type="text" onChange={handleSupplementsQuestionInputChange} />
    </>

  );
};
export default SupplementsQuestion