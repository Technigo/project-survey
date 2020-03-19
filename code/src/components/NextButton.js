import React from 'react'
import './nextButton.css'

export const NextButton = ({ name, section, place, paper}) => {
  return (
    <button type='submit' disabled=
      {name === '' ||
        (name !== '' && section === 1 && place === undefined) ||
        (name !== '' && section === 2 && paper === undefined)}
    >Next</button>
  )
}