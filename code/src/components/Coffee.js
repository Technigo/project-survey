import React from 'react'


const Coffee = (props) => {

  const {coffee, setCoffee} = props

  const onCoffeeChange = (e) => {
    setCoffee(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="survey-item coffee">
      <label className="section-heading" htmlFor="coffee">How many cups of coffee do you drink a day?</label>
      <input 
      id="coffee" 
      type="text"
      value={coffee} 
      onChange={onCoffeeChange}
      />
    </div>
  )
}

export default Coffee

