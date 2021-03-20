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
              <input tabIndex="0" className="name-input" id="name" type="text" value={name} onChange={onNameChanged} />
            </label>
          </div>
          <div className="color-question">
            <p>Pick your favourite?</p>
            <div className="color-wine">
              {colors.map((color) => (
                <label htmlFor="color" key={color}>
                  <input
                    tabIndex="0"
                    className="color-input"
                    name="wine color"
                    id={color}
                    type="radio"
                    value={color}
                    onChange={onWineColorChanged}
                    checked={wineColor === color} />
                  {color}
                </label>
              ))}
            </div>
          </div>

          <div className="country-question">
            <label htmlFor="country">Pick a country?
              <select tabIndex="0" className="country-select" id="country" value={country} onChange={onCountryChanged}>
                <option tabIndex="0" value="">Select</option>
                <option tabIndex="0" value="Italy">Italy</option>
                <option tabIndex="0" value="Spain">Spain</option>
                <option tabIndex="0" value="France">France</option>
              </select>
            </label>
          </div>

          <div>
            <button tabIndex="0" className="submit-button" type="submit" onClick={onCounterChanged}>ORDER!</button>
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