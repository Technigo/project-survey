import React from 'react';

export const TextInput = ({name, setName}) => {

  return (

    <input
    type = "text"
    onChange = {(event) => setName(event.target.value)}
    value= {name}
    required
    />

  )
}