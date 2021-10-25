import React from 'react'

const FourthQuestion = ({ emailInput, onEmailInputChange, onStepChange }) => {

  return (
    <form>
    <label htmlFor="emailInput">4 -&gt; Best e-mail address for you?</label>
      <input 
      id="emailInput" 
      type="text" 
      value={emailInput} //state property
      onChange={onEmailInputChange} //function to update the property
    />
     <button 
      disabled={emailInput === ''}
      onClick={onStepChange}>Submit</button>
     </form>
  )
}

export default FourthQuestion