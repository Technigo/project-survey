import React from 'react';

const Summary = ({ name, question2, question3, question4, handleStepIncrese }) => {
  return (
    <form action="https://notarealurl.com" method="POST">
      <label htmlFor="nameInput">
        <p>Your name is {name}</p>
      </label>
      <label htmlFor="oneInput">
        <p>You think {question2}</p>
      </label>
      <label htmlFor="twoInput">
        <p>You also think {question3}</p>
      </label>
      <label htmlFor="threeInput">
        <p>You also think {question4}</p>
      </label>

      <div>
        <button type="submit" id="submitBtn" onClick={handleStepIncrese}>Submit</button>
      </div>
    </form>
  );
}

export default Summary;