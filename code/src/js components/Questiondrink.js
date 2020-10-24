import React from 'react';

export const Questiondrink= ({answerdrink, onDrinkChange}) => {
return(
  <>
  <p>{answerdrink}</p>
      <div>
        <label tabIndex='0' htmlFor="answerdrink">What is your favourite coffee?</label>
          <select 
            name="coffeetypes"
            onChange = {event => onDrinkChange(event.target.value)}
            value = {answerdrink}
            required
            aria-label="Select your favourite type of coffee"
          >
              <option value="" aria-label="Choose a coffee type from the dropdown menu">Select your drink please:</option>
              <option value="Expresso">Espresso</option>
              <option value="Americano">Americano</option>
              <option value="Latte">Latte</option>
              <option value="Macchiato">Macchiato</option>
              <option value="Cappucino">Cappucino</option>
          </select> 
      </div>
</>
);
};