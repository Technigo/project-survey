import React, { useState } from 'react'
import { TypeForm } from 'components/TypeForm'
import { NameInput } from 'components/NameInput'
import { PetForm } from 'components/Pet'
import { Summary } from 'components/Summary'



export const App = () => {
  const [name, setName] = useState("");
  const [person, setPerson] = useState("");
  const [pet, setPet] = useState("")
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };

  return (
    <div>
      <h1>Quick Social survey</h1>
      {!showSummary ? (
        <form onSubmit={handleSubmit}>
          <h3>What´s your name?</h3>
          <NameInput name={name} setName={setName} />
          <h3>What type of person are you?</h3>
          <TypeForm person={person} setPerson={setPerson} />
          <h3>Which is your favorite pet?</h3>
          <PetForm pet={pet} setPet={setPet} />
          <button type="submit">
            Submit
          </button>
        </form>
      ) : (
          <Summary name={name} person={person} pet={pet} />)}
    </div>
  )
}


