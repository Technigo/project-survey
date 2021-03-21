import React from 'react'

export const Submit = ({setSummary}) => {

  const formSubmit = event => {
    event.preventDefault()
    setSummary(true)
  }

  return (
  <button 
    type="submit"
    onClick = { formSubmit }
    >
      Submit
  </button>
  )
  
}