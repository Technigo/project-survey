import React from 'react'

const Submit = (props) => {
  const {submitted, setSubmitted} = props;
  const onSubmitChange = (event) => {
    console.log(`Submitted: ${event.target.value}`);
    setSubmitted(event.target.value);
  };

  return (
    <>
      
      <button onClick={() => setSubmitted(true)}>Submit!</button>
      {submitted === true && <p>You have submitted!</p>}
    </>
  )
}

export default Submit;