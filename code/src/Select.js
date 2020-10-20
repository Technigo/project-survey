import React, {useState} from 'react';

export const Select = (props) => {
  const [foodType, setFoodType] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) =>{
    setIsValid(validateInput(event.target.value));
    setFoodType(event.target.value);
  }

  const clickNextButton = (value) =>{
    if(validateInput(value)){
      props.onChange(foodType);
    }
  }

  const validateInput = (value) => {
    if(value !== "") return true;
    else return false;
  }

  return (
    <div className="question-container">
      <label className="question-label">{props.text}</label>
      <select
        onChange={handleChange}
        value={foodType}
      >
        <option value="">Food Preference</option>

        {props.options.map((food) =>
        <option value={food}>{food}</option>
        ) }
      </select> 

      {isValid &&
        <button className="next-button"
          type="button"
          onClick={(event) => clickNextButton(foodType)}
        >
          &#x3e;&#x3e;
        </button>
}
      </div>
  );
};