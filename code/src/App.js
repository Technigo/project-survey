import React, { useState } from 'react'
import { TypeForm } from 'components/TypeForm'
import { NameInput } from 'components/NameInput'
import { PetForm } from 'components/Pet'



export const App = () => {
  const [name, setName] = useState("");

  const [person, setPerson] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };

  return (

    <form onSubmit={handleSubmit}>
      <h1>What´s your name?</h1>
      <NameInput name={name} setName={setName} />
      <h1>What type of person are you?</h1>
      <TypeForm person={person} setPerson={setPerson} />
      <h1>Which is your favorite pet?</h1>
      <PetForm />
    </form>

  )
}


