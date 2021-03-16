import React, { useState } from 'react'

import RadioInput from './components/RadioInput'
import SelectInput from './components/SelectInput'
import TextInput from "./components/TextInput"
import Character from "./components/Character"
import RangeInput from './components/RangeInput'
import NumberInput from './components/NumberInput'
import CharacterSheet from './components/CharacterSheet'


const stats = ["strength", "intelligence", "dexterity"]

const App = () => {
  const [isFilledIn, setIsFilledIn] = useState(false)

  const handleClick = () => {
    console.log(Character)
    setIsFilledIn(!isFilledIn)
  }

  if (isFilledIn) {
    return (
      <>
        <CharacterSheet />
        <button onClick={handleClick}>Go back</button>
      </>
    )
  } else {
    return (
      <form onSubmit={(event) => event.preventDefault()}>
        <TextInput
          label="Name"
          field="name"
          className="name-input"
        />
        <SelectInput
          choices={["mage", "thief", "knight"]}
          field="class"
          className="class-input"
        />
        <RadioInput
          choices={["orc", "human", "dwarf"]}
          field="race"
          className="race-input"
        />
        <TextInput
          label="Goal"
          field="goal"
          className="goal-input"
        />
        <NumberInput
          label="Age"
          field="age"
          className="age-input"
        />
        <SelectInput
          choices={["nobility", "farmer", "worker"]}
          field="family"
          className="family-input"
        />
        <div className="stats-container">
          {stats.map(item =>
            <RangeInput
              className="stats"
              key={item}
              rangeName={item}
            />)}
        </div>
        <button onClick={handleClick}>Submit</button>
      </form>
    )
  }
}

export default App