import React from 'react';

const ingredients = ["salmon", "tuna", "shrimp", "crabstick", "avocado", "egg"]; 

const Question3 = ({ ingredient, callbackOnChange }) => {
  
  const handleChange = (e) => {     
    callbackOnChange(e.target.name, e.target.value);
  };

  return (
    <>
      <fieldset>
        <legend>Favourite ingredient in sushi?</legend>

        {ingredients.map((ingred) => (
          <label key={ingred} htmlFor={ingred}>
            <input 
              id={ingred}   
              type="radio"
              value={ingred}
              onChange={handleChange}
              name="ingredient"
              checked={ingred === ingredient}
              required 
            />
            {ingred}
          </label>
        ))}
      </fieldset>
    </>
  )
}

export default Question3;