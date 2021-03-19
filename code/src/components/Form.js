import React, { useState } from 'react'

import { Summary } from './Summary'

const colors = ['red wine', 'white wine', 'rosé wine']

export const Form = () => {
  const [name, setName] = useState('')
  const [wineColor, setWineColor] = useState('')
  const [country, setCountry] = useState('')
  const [counter, setCounter] = useState(0)

  const onNameChanged = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }
  const onWineColorChanged = (event) => {
    console.log(event.target.value)
    setWineColor(event.target.value)
  }
  const onCountryChanged = (event) => {
    console.log(event.target.value)
    setCountry(event.target.value)
  }
  const onCounterChanged = (event) => {
    event.preventDefault()
    setCounter(counter + 1)
  }

  if (counter === 0) {
    return (
      <form className="form-container">
        <h3>Would you like to order, please fill in this form</h3>
        <div className="form-container-questions">
          <div className="name-question">
            <label htmlFor="name">What is your name?
              <input className="name-input" id="name" type="text" value={name} onChange={onNameChanged} required />
            </label>
          </div>
          <div className="color-question">
            <p>Pick your favourite?</p>
            <div className="color-wine">
              {colors.map((color) => (
                <label htmlFor="color" key={color}>
                  <input
                    className="color-input"
                    name="wine color"
                    id={color}
                    type="radio"
                    value={color}
                    onChange={onWineColorChanged}
                    checked={wineColor === color}
                    required />
                  {color}
                </label>
              ))}
            </div>
          </div>

          <div className="country-question">
            <label htmlFor="country">Pick a country?
              <select className="country-select" id="country" value={country} onChange={onCountryChanged} required>
                <option value="">Select</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
                <option value="France">France</option>
              </select>
            </label>
          </div>

          <div>
            <button tabIndex="0" type="submit" onClick={onCounterChanged}>ORDER!</button>
          </div>
        </div>
      </form>
    )
  } else {
    return (
      <Summary name={name} wineColor={wineColor} country={country} />
    )
  }
};