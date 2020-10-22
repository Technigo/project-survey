import React from 'react'


export const Zodiac = ({name, setZodiac, zodiac, zodiacArray}) => {

  console.log(zodiac)

  return(
    <div className="zodiac-wrapper">
      {/* <p>Hello {name}! It's a pleasure to meet you.</p> */}
      <label>
        What's your zodiac sign?
        <select
          onChange={event => setZodiac(event.target.value)}
          value={zodiac}>
          <option value="">Select zodiac sign...</option>
          {zodiacArray.map(sign => {
            return (
              <option key={sign.name} value={sign.name}>
                {sign.name}
              </option>
            )
          })}
        </select>
      </label>
    </div>
  )
}