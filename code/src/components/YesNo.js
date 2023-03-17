import React from 'react';

export const YesNo = ({ yesno, setYesNo }) => {
  const handleYesNo = (event) => {
    setYesNo(event.target.value);
  }
  return (
    <div className="yesno-container">
      <form>
        <p className="question">Have you heard of the Bouba Kiki Effect?</p>
        <label>
          <input
            type="radio"
            value="Yes"
            onChange={handleYesNo}
            checked={yesno === 'Yes'} />
          <span>Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="No"
            onChange={handleYesNo}
            checked={yesno === 'No'} />
          <span>No</span>
        </label>
      </form>
    </div>
  )
}

