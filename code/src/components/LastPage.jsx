import React , {useState} from 'react';
const LastPage = (props) => {
  return (
    <>
      <h2>Thank you for you time and your help</h2>
      <h3>Hope to see you soon</h3>

      <button className="btn" type="button" onClick={() => props.setStep(1)}>
        Go to the Start page
      </button>
    </>
  );
}
 
export default LastPage;