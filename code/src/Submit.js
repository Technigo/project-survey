import React from 'react'



const Submit = (props) => {
  const {submitted, setSubmitted} = props;
  const {completed, setCompleted} = props;
  const {isSurveyComplete} = props;
  
  let submitButton;
  
  if (isSurveyComplete()) {
    submitButton = <button onClick={() => setSubmitted(true)}>Submit!</button>
  } else {
    submitButton = <button disabled onClick={() => setSubmitted(true)}>Submit!</button>
  }

  return (
    <>
      {submitButton}
    </>
  )
  
}

export default Submit;