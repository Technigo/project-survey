import React from 'react';

export const YesNo = ({ yesno, setYesNo }) => {
  const handleYesNo = (event) => {
    setYesNo(event.target.value);
  }
  return (
    <div className="yesno-container">
      <div className="question">Have you heard of the Bouba Kiki Effect?</div>
      <div className="radio-buttons">
        <label>
            <input
              type="radio"
              value="Yes"
              onChange={handleYesNo}
              checked={yesno === 'Yes'}
              />Yes
            <input
              type="radio"
              value="No"
              onChange={handleYesNo}
              checked={yesno === 'No'}
              />No
        </label>
      </div>
    </div>
  )
}