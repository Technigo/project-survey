import React from 'react'

const Radio = ({ musicRate, onRadioChange, radio }) => {
  return (
    <>
      <h3 className="question-radio" alt="radio-button">
            How important is music to you:
      </h3>
      <div className="first-radio">
        {musicRate.map((rate) => (
          <label key={rate} htmlFor={rate} className="label-container">
            <input
              id={rate}
              name="rate"
              type="radio"
              value={rate}
              required
              onChange={onRadioChange}
              checked={radio === rate} />
            {rate}
          </label>
        ))}
      </div>
    </>
  )
}

export default Radio;