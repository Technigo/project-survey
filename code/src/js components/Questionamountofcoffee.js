import React from 'react';

export const Questionamountofcoffee = ({answeramount, onAmountChange}) => {
return(
<>
  <div>
    <p tabIndex='0' >How many cups of coffee do you drink per week?</p>
      <label 
        tabIndex='0' 
        htmlFor="1-3">1-3
      </label>
      <input 
        type="radio"
        onChange = {event => onAmountChange(event.target.value)}
        id="1-3"
        value = "1-3"
        name="cups"
        checked = {answeramount === "1-3"}
        required
        aria-label="Select the amount of cups of coffee you drink per week"
      />
      <label htmlFor="4-6">4-6</label>
        <input 
          type="radio"
          onChange = {event => onAmountChange(event.target.value)}
          value = "4-6"
          id="4-6"
          name="cups"
          checked = {answeramount === "4-6"}
        />
      <label htmlFor="7-10">7-10</label>
        <input 
          type="radio"
          onChange = {event => onAmountChange(event.target.value)}
          value = "7-10"
          id="7-10"
          name="cups"
          checked = {answeramount === "7-10"}
        />
  </div>
</>
);
};
