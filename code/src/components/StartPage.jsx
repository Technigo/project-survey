import React from 'react';

const StartPage = (props) => {
  return (
    <div className="form">
      <h3>Thank for particepation and let us to improve </h3>

      <button className= "btn" type="button" onClick={() => props.onNextStep()}>
        Let's Start
      </button>
    </div>
  );
}
 
export default StartPage;