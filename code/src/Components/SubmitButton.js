import React from 'react'

export const SubmitButton = (props) => {
  return (
    <button tabindex="0" className="submit-button" onClick={()=> {
      props.onCounterIncrease()           
    }}
    >
      SUBMIT      
    </button>

  )
}