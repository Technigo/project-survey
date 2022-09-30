import React from 'react';

const YesNo = ['Yes', 'No'];

export const YesNoQuestion = ({ answer, setAnswer }) => {
  const handleYesNoQuestionChange = (event) => {
    setAnswer(event.target.value);
  }

  return (
    <div className="questionWrapper">
      <form>
        <h2>Do you do any sports or physical activity regularly?</h2>
        {YesNo.map((group) => (
          <label
            key={group}
            htmlFor="yesNo"
            className="radioButton">
            <input
              clasName="radioButtonStyling"
              id="radio"
              type="radio"
              value={group}
              onChange={handleYesNoQuestionChange}
              checked={answer === group} />
            {group}
          </label>
        ))}
      </form>
    </div>
  )
};