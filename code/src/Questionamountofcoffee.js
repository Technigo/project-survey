import React from 'react';

export const Questionamountofcoffee = ({answeramount, onAmountChange}) => {
return(
  <>
  <p>{answeramount}</p>
      <div>
        <p>How many cups of coffee do you drink per week?</p>
        <label htmlFor="answerAmount"> less than 5</label>
            <input type="radio"
                onChange = {event => onAmountChange(event.target.value)}
                value = "<5"
                checked = {answeramount === "<5"}
            />
        <label htmlFor="answerAmount">from 5 to 7</label>
            <input type="radio"
                onChange = {event => onAmountChange(event.target.value)}
                value = "5-7"
                checked = {answeramount === "5-7"}
            />
      <label htmlFor="answerAmount">more than 7</label>
            <input type="radio"
                onChange = {event => onAmountChange(event.target.value)}
                value = ">5"
                checked = {answeramount === ">5"}
            />
  </div>
  </>
);
};
