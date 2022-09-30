import React from 'react';

const Question4 = ({ question4, setQuestion4, handleStepIncrese }) => {
  const handleQuestion4Change = (event) => {
    setQuestion4(event.target.value)
  }

  return (
    <>
      <section className="dropdownSelect">
        <p className="question">What do you think again?</p>
        <select
          htmlFor="options"
          className="dropdown"
          id="options"
          value={question4}
          onChange={(event) => handleQuestion4Change(event)}>

          <option disabled value="">Select an option:</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
        </select>
      </section>
      <div>
        <button type="button" id="nextBtn" onClick={handleStepIncrese}>Next page</button>
        <p>Question 4 out of 4</p>
      </div>
    </>
  );
}

export default Question4;