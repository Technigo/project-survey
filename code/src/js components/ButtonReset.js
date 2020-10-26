import React from 'react';
import "css components/button.css";

const goback = () => {
    document.location.href = "";
};

export const ButtonReset = () => {
  
  return (
    <>
    <button className="button btn-reset" onClick={goback}type="reseting">reset</button>
    </>
  )
};
