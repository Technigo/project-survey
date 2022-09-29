import React , {useState} from 'react';
const LastPage = (props) => {
  return (
    <>
      <h2>Thank you for you time and your help</h2>
      <h2>Hope to see you soon</h2>
     
      <button type="button" onClick={()=>props.setStep(1)}>
        Go to the Start page
      </button>
    </>
  );
}
 
export default LastPage;