import React from 'react'


const Coffee = (props) => {

  const [handleUserInput, input] = [props.handleUserInput, props.input]

  return (
    <div className="survey-item coffee">
      <label className="section-heading" htmlFor="coffee">How many cups of coffee do you drink a day?</label>
      <input 
      id="coffee" 
      type="text"
      value={input} 
      onChange={handleUserInput}
      />
    </div>
  )
}

export default Coffee

