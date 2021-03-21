import React from 'react';

import FormButtons from './FormButtons';
import Submit from './Submit';

const ingredients = ["salmon", "tuna", "shrimp", "crabstick", "avocado", "egg"]; 

const IngredientQuestion = ({ ingredient, callbackOnChange, step, setStep }) => {
  
  const handleIngredientChange = (e) => {     
    callbackOnChange(e.target.name, e.target.value);
  };

  return (
    <>
      <div className="ingredient-container">
        <fieldset className="fieldset">
          <legend className="legend">Favourite ingredient in sushi?</legend>

          {ingredients.map((ingred) => (
            <label
              className="ingredient-label" 
              key={ingred} 
              htmlFor={ingred}
            >
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
        <FormButtons 
          step={step}
          setStep={setStep}
        />
        <Submit />
      </div>
    </>
  );
};

export default IngredientQuestion;