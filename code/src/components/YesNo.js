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
          <input
            type="radio"
            id="answer-yes"
            name="answer"
            value="Yes"
            onChange={handleYesNo}
            checked={yesno === 'Yes'} />Yes
          <input
            type="radio"
            id="answer-no"
            name="answer"
            value="No"
            onChange={handleYesNo}
            checked={yesno === 'No'} />No
        </form>
      </div>
    </div>
  )
}
