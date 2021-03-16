import React, {useState} from 'react'

const Submit = () => {

  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <button onClick={() => setSubmitted(true)}>Submit!</button>
      {submitted === true && <p>You have submitted!</p>}
    </>
  )
}

export default Submit;