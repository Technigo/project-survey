import React from 'react';

const Summary = ({ name, question2, question3, question4, handleStepIncrese }) => {
  return (
    <>
      <form>
        <p>Your name is {name}</p>
        <p>You think {question2}</p>
        <p>You also think {question3}</p>
        <p>You also think {question4}</p>
      </form>
      <div>
        <button type="submit" id="submitBtn" onClick={handleStepIncrese}>Submit answers</button>
      </div>
    </>
  );
}

export default Summary;