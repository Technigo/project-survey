import React from 'react'


const Coffee = (props) => {

  const [setCoffee, coffee] = [props.setCoffee, props.coffee]

  return (
    <div className="survey-item coffee">
      <label className="section-heading" htmlFor="coffee">How many cups of coffee do you drink a day?</label>
      <input 
      id="coffee" 
      type="text"
      value={coffee} 
      onChange={(e) => {setCoffee(e.target.value)}}
      />
    </div>
  )
}

export default Coffee

