import React from 'react'

const Buttons = (props) => {

  return (
        <button className={props.className} onClick={props.step}>{props.btnText}</button>

  )
}
export default Buttons

/*{props.step < 4 && (
  <button className="btn next-btn" onClick={nextStep}>{btnText}</button>
)}

{props.step > 1 && props.step < 4 && (
  <button className="btn prev-btn" onClick={previousStep}>{'<< Previous question'}</button>
)}


  let btnText
  
  if (props.step === 3) {
    btnText = 'View results >>'
  } else {
    btnText = 'Next question >>'
  }
*/