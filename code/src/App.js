import React, { useState } from 'react';
import Form from './components/Form';




export const App = () => {
  const [name, setName] = useState('')

  const onNameChange = (event) => {
    console.log(event.target.value)
    setName(event.target.value);
  }


  return (
    <div>
      Hello! Find me in src/app.js!
      <Form
        name={name}
        onNameChange={onNameChange} />
    </div>
  )
}
