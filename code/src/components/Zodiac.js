import React from 'react'


export const Zodiac = ({setZodiac, zodiac, zodiacArray}) => {

  console.log(zodiac)

  return(
    <div className="zodiac-wrapper" id="zodiac">
      <label>
        What's your zodiac sign?
        <select
          onChange={event => setZodiac(event.target.value)}
          value={zodiac}>
          <option value="" selected disabled>Select zodiac sign...</option>
          {zodiacArray.map(sign => {
            return (
              <option key={sign.name} value={sign.name}>
                {sign.name}
              </option>
            )
          })}
        </select>
      </label>
      <a href="#match">
        <button 
          type="button" 
          className="next-button"
          disabled={zodiac === ''}>
          NEXT
        </button>
      </a>
    </div>
  )
}