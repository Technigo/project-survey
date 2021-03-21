import React from "react";

const RadioButton = ({ projectName, onChange }) => {
  const onTechnologyChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <input
        className="radioInput"
        name="technology"
        type="radio"
        id={projectName}
        value={projectName}
        onChange={onTechnologyChange}
      >   
      </input>
      <label 
        htmlFor={projectName} 
        className="radio-label"> 
        {projectName} 
     </label>
    </div>
  );
};
export default RadioButton;
