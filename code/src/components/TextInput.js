import React from 'react';

export const TextInput = ({name, setName}) => {

  return (
    <>
    <h2>Name here please!</h2>
    <input
    type = "text"
    onChange = {(event) => setName(event.target.value)}
    value= {name}
    required
    />
    </>
  )
}