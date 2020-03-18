import React from 'react'

export const Button = ({ name, section, tech, radioInput }) => {
  return (
    <button type='submit' disabled=
      {name === '' || (name !== '' && section === 1 && tech === '') || (name !== '' && section === 2 && radioInput === '')}
    >Next</button>
  )
}

