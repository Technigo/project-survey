import React from "react";

const SubmitButton = ({ disabled }) => {
  return <input 
    className="submit"
    type="submit"  
    value="submit" 
    disabled={disabled} 
    />;
};

export default SubmitButton;
