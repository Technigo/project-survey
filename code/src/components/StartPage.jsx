import React, { useState }from 'react';

const StartPage = (props) => {
  return (
    <>
      <h2>Thank for particepation and let us to improve </h2>

      <button type="button" onClick={() => props.onNextStep()}>
        Let's Start
      </button>
    </>
  );
}
 
export default StartPage;