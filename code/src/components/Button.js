import React from 'react';

const Button = ({ stepBtn, setStep, btnTxt }) => {
  return (
    <>
    <input 
      type="submit"
      value={btnTxt}    
      onClick={() => setStep(stepBtn)} 
    />
    </>
  );
};

export default Button;