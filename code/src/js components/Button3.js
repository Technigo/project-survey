import React from 'react';
import "css components/button3.css";

const goback = () => {
    document.location.href = "";
};

export const Button3 = () => {
  
  return (
    <>
    <button className="resetbutton" onClick={goback}type="reseting">reset</button>
    </>
  )
};
