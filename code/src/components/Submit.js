import React from 'react'



  //  const formResult = () => {
  //   return (
  //      <div>
  //        Hello
  //       </div>
  //    )
  //  }

export const Submit = ({setSummary}) => {

  const formSubmit = event => {
    event.preventDefault()
    setSummary(true)
  }

  return (
  <button 
    // type="submit-button" //funkar required nu? instant
    onClick = { formSubmit }
    >
      Submit
  </button>
  )
  
}