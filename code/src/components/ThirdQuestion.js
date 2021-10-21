import React from 'react'

const ThirdQuestion = (props) => {
const {onFeelingChange, onStepChange} = props

  return (
    <form className="form">
      <label>
        <input 
          id="feeling" 
          type="radio" 
          value="happy"
          onChange={onFeelingChange} 
          className="form-element"
        />
        <span role="img" aria-label="happy-face">
          😃
        </span>
      </label>

      <label>
        <input 
          id="feeling" 
          type="radio" 
          value="sad"
          onChange={onFeelingChange} 
          className="form-element"
        />
        <span role="img" aria-label="sad-face">
          😥
        </span>
      </label>
      <button onClick={onStepChange} className="form-element">Next question</button>
    </form>
  )
}

export default ThirdQuestion