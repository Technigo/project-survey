import React from 'react';

export const YesNo = ({ yesno, setYesNo }) => {
  const handleYesNo = (event) => {
    setYesNo(event.target.value);
  }
  return (
    <div className="yesno-container">
      <div className="question">Have you heard of the Bouba Kiki Effect?</div>
      <div className="radio-buttons">
        <form>
          <label for="answer-yes">Yes
            <input type="radio"
              id="answer-yes"
              name="answer"
              value="Yes"
              onChange={handleYesNo}
              checked={yesno === 'Yes'} />
          </label>
          <label for="answer-no">No
            <input type="radio"
              id="answer-no"
              name="answer"
              value="No"
              onChange={handleYesNo}
              checked={yesno === 'No'} />
          </label>
        </form>
      </div>
    </div>
  )
}