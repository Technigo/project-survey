import React, { useState } from 'react'
import data from "./data.json"

import RadioInput from './components/RadioInput'
import SelectInput from './components/SelectInput'
import TextInput from "./components/TextInput"
import Character from "./components/Character"
import RangeInput from './components/RangeInput'
import NumberInput from './components/NumberInput'
import CharacterSheet from './components/CharacterSheet'
import ProgressBar from 'components/ProgressBar'


const App = () => {
  const [isFilledIn, setIsFilledIn] = useState(false)
  const [section, setSection] = useState(0)
  const [name, setName] = useState("")
  const [characterClass, setCharacterClass] = useState("")
  const [race, setRace] = useState("")
  const [goal, setGoal] = useState("")
  const [number, setNumber] = useState("")
  const [family, setFamily] = useState("")
  const [value, setValue] = useState("")

  const handleSubmit = () => {
    console.log(Character)
    setIsFilledIn(!isFilledIn)
    setSection(0)
  }

  const handleNext = () => {
    if (section < 6) {
      setSection(section + 1)
    }
  }

  const handlePrevious = () => {
    if (section > 0) {
      setSection(section - 1)
    }
  }

  if (isFilledIn) {
    return (
      <>
        <CharacterSheet text={name} number={number} />
        <button onClick={handleSubmit}>Go back</button>
      </>
    )
  } else {
    return (
      <>
        <form onSubmit={(event) => event.preventDefault()}>

          {section === 0 &&
            <TextInput
              text={name}
              setText={setName}
              data={data.name}
            />}

          {section === 1 &&
            <SelectInput
              choice={characterClass}
              setChoice={setCharacterClass}
              data={data.class}
            />}

          {section === 2 &&
            <RadioInput
              choice={race}
              setChoice={setRace}
              data={data.race}
            />}

          {section === 3 &&
            <TextInput
              text={goal}
              setText={setGoal}
              data={data.goal}
            />}

          {section === 4 &&
            <NumberInput
              number={number}
              setNumber={setNumber}
              data={data.age}
            />}

          {section === 5 &&
            <SelectInput
              choice={family}
              setChoice={setFamily}
              data={data.family}
            />}

          {section === 6 &&
            <div className="stats-container">
              {data.stats.allStats.map(item =>
                <RangeInput
                  className="stats-input"
                  key={item}
                  rangeName={item}
                  value={value}
                  setValue={setValue}
                />)}
            </div>}
          <div>
            <button onClick={handlePrevious}>Previous Question</button>
            <button onClick={handleNext}>Next Question</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
        <ProgressBar progress={section} />
      </>
    )
  }
}

export default App