import React, { useState } from 'react'
import data from "./data.json"

import RadioInput from './components/RadioInput'
import SelectInput from './components/SelectInput'
import TextInput from "./components/TextInput"
import Character from "./components/Character"
import RangeInput from './components/RangeInput'
import NumberInput from './components/NumberInput'
import CharacterSheet from './components/CharacterSheet'


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
        <TextInput data={data.name} />

        <SelectInput data={data.class} />

        <RadioInput data={data.race} />

        <TextInput data={data.goal} />

        <NumberInput data={data.age} />

        <SelectInput data={data.family} />

        <div className="stats-container">
          {data.stats.allStats.map(item =>
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