import React from 'react';

export const Questiondrink= ({answerdrink, onDrinkChange}) => {
return(
  <>
  <p>{answerdrink}</p>
      <div>
        <label htmlFor="answerdrink">What is your favourite coffee?</label>
          <select 
            onChange = {event => onDrinkChange(event.target.value)}
            value = {answerdrink}
          >
              <option value="">Select your drink please:</option>
              <option value="expresso">Espresso</option>
              <option value="americano">Espresso</option>
              <option value="latte">Latte</option>
              <option value="macchiato">Macchiato</option>
              <option value="cappucino">Cappucino</option>
          </select> 
      </div>
</>
);
};