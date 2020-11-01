import React from 'react'

const knowHeadPhones = [
  "At par with an Audiophile",
  "Just Enough to get by",
  "I don't know much"
]

export const RadioButton = ({ knowHeadPhone, setKnowHeadPhone }) => {
  return (
  <>
    <h2 className='radio-button-question' tabIndex='0'>Your understanding of you headphone is...</h2>
    <div className='radio-buttons-container'>
      {knowHeadPhones.map((headphone) => (
        <label htmlFor='headphone' tabIndex='0' className='each-radio-button' key={headphone}>
          <input
            name='headphone'
            type='radio'
            value={headphone}
            onChange={(event) => setKnowHeadPhone(event.target.value)}
            checked={knowHeadPhone === headphone}
            tabIndex='0'
            aria-label='Select Radio'
            required
          />
        {headphone}
        </label>
      ))}
    </div>
  </>
)
}