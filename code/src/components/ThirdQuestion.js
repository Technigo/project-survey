import React from 'react'

const ThirdQuestion = (props) => {
const {feeling, onFeelingChange, onStepChange} = props

  return (
    <form>
      <label>
        <input 
          id="feeling" 
          type="radio" 
          value="happy"
          onChange={onFeelingChange} 
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
        />
        <span role="img" aria-label="sad-face">
          😥
        </span>
      </label>
      <button onClick={onStepChange}>Next question</button>
    </form>
  )
}

export default ThirdQuestion