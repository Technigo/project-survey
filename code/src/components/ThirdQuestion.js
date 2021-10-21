import React from 'react'

const ThirdQuestion = (props) => {
const {onFeelingChange, onStepChange} = props

  return (
    <form className="form">
      <label  htmlFor="feeling-happy" className="form-label"></label>
        <input 
          id="feeling-happy" 
          type="radio" 
          value="happy"
          onChange={onFeelingChange} 
          className="form-element"
        />
        <span role="img" aria-label="happy-face">
          😃
        </span>
      

      <label 
        htmlFor="feeling-sad"
        className="form-label"
        >
      </label>
        <input 
          id="feeling-sad" 
          type="radio" 
          value="sad"
          onChange={onFeelingChange} 
          className="form-element"
        />
        <span role="img" aria-label="sad-face">
          😥
        </span>
      
      <button onClick={onStepChange} className="form-button">Next question</button>
    </form>
  )
}

export default ThirdQuestion