import React from 'react'



const Submit = (props) => {
  const {setSubmitted} = props;
  const {isSurveyComplete} = props;
  
  let submitButton;
  
  if (isSurveyComplete()) {
    submitButton = <button className="submit-button" onClick={() => setSubmitted(true)}>Submit!</button>
  } else {
    submitButton = <button disabled className="submit-button-disabled" onClick={() => setSubmitted(true)}>Submit!</button>
  }

  return (
    <>
      {submitButton}
    </>
  )
  
}

export default Submit;