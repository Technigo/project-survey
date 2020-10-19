import React, { useState } from 'react'


// Name
const InputNameForm = () => {
  const [name, setName] = useState('')

  return (
    <form
      className="name-form"
      onSubmit={event => event.preventDefault()}
    >
      Enter your name:
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
    </form>
  )
}
// How do I make it so that when the user writes their name and 
// press a button that says continue, a text is shown that says Welcome 'name'? 
// And then all the questions appear...??
export default InputNameForm