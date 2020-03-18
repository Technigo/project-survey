import React from 'react'

export const Button = ({ name, section, tech, radioInput, agree }) => {
  return (
    <button type='submit' disabled=
      {name === '' ||
        (name !== '' && section === 1 && tech === '') ||
        (name !== '' && section === 2 && radioInput === undefined) ||
        (name !== '' && section === 3 && agree === false)}
    >Next</button>
  )
}

