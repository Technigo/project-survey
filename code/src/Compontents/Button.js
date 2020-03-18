import React from 'react';

export const Button = ({ name, section }) => {
  return (
    <button type='submit' disabled={name === "" && section === 0}>Next</button>
  )
}