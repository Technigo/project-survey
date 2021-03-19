import React from 'react';

import FormButtons from './FormButtons';

const ingredients = ["salmon", "tuna", "shrimp", "crabstick", "avocado", "egg"]; 

const IngredientQuestion = ({ ingredient, callbackOnChange, step, setStep }) => {
  
  const handleIngredientChange = (e) => {     
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
              onChange={handleIngredientChange}
              name="ingredient"
              checked={ingred === ingredient}
              required 
            />
            {ingred}
          </label>
        ))}
      </fieldset>
      <div>
        <FormButtons 
          step={step}
          setStep={setStep}
        />
      </div>
    </>
  )
}

export default IngredientQuestion;