import React from 'react'

export const Reveal = ({name, zodiac, question, title}) => {
    return(
      <div className="reveal-wrapper" id="reveal">
        <button 
          className="reveal-button"
          type="submit"
          disabled={name === '' || zodiac === '' || question === ''}>
          {title}
        </button>
      </div>
    )
}