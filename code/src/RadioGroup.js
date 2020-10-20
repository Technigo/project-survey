import React, {useState} from 'react';

export const RadioGroup = (props) => {
  const [ageGroup, setAgeGroup] = useState();
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) =>{
    setIsValid(validateInput(event.target.value));
    setAgeGroup(event.target.value);
  }

  const clickNextButton = (value) =>{
    if(validateInput(value)){
      props.onChange(ageGroup);
    }
  }

  const validateInput = (value) => {
    if(value !=="") return true;
    else return false;
  }

  return (
     <div className="question-container">
       <label className="question-label">{props.text}</label>
         {props.options.map((group) => (
           
        <label className="option-label"  tabIndex="0"   key={group}>
          <input
            type="radio"
            value={group}
            onChange={handleChange}
            checked={ageGroup === group}
            tabIndex="0"
          />
          {group}
        </label> 
      ))}
        {isValid &&
      <button className="next-button"
         type="button"
         onClick={(event) => clickNextButton(ageGroup)}
       >
        &#x3e;&#x3e;
       </button>}
     </div>
  );
}