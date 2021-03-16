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
  const [section, setSection] = useState(0)

  const handleSubmit = () => {
    console.log(Character)
    setIsFilledIn(!isFilledIn)
    setSection(0)
  }

  const handleNext = () => {
    setSection(section + 1)
  }

  const handlePrevious = () => {
    setSection(section - 1)
  }

  if (isFilledIn) {
    return (
      <>
        <CharacterSheet />
        <button onClick={handleSubmit}>Go back</button>
      </>
    )
  } else {
    return (

      <form onSubmit={(event) => event.preventDefault()}>

        {section === 0 && <TextInput data={data.name} />}

        {section === 1 && <SelectInput data={data.class} />}

        {section === 2 && <RadioInput data={data.race} />}

        {section === 3 && <TextInput data={data.goal} />}

        {section === 4 && <NumberInput data={data.age} />}

        {section === 5 && <SelectInput data={data.family} />}

        {section === 6 && <div className="stats-container">
          {data.stats.allStats.map(item =>
            <RangeInput
              className="stats"
              key={item}
              rangeName={item}
            />)}
        </div>}

        <button onClick={handlePrevious}>Previos Question</button>
        <button onClick={handleNext}>Next Question</button>
        <button onClick={handleSubmit}>Submit</button>

      </form>
    )
  }
}

export default App