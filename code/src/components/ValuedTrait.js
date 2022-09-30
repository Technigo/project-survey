import React from 'react';
import RadioButton from './RadioButton';

const ValuedTrait = ({ valuedTrait, setValuedTrait }) => {
  return (
    <div className="question-wrapper">
      <fieldset>
        <p>Which of the following traits do you value the most?</p>
        <RadioButton
          valuedTrait={valuedTrait}
          setValuedTrait={setValuedTrait}
          radioSelection="Intelligence" />
        <RadioButton
          valuedTrait={valuedTrait}
          setValuedTrait={setValuedTrait}
          radioSelection="Courage" />
        <RadioButton
          valuedTrait={valuedTrait}
          setValuedTrait={setValuedTrait}
          radioSelection="Loyalty" />
        <RadioButton
          valuedTrait={valuedTrait}
          setValuedTrait={setValuedTrait}
          radioSelection="Ambition" />
      </fieldset>
    </div>
  )
}

export default ValuedTrait;