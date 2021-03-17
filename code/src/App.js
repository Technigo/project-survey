import React, { useState } from 'react'
import data from "./data.json"

import RadioInput from './components/RadioInput'
import RadioInputIcon from './components/RadioInputIcon'
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
  const [number, setNumber] = useState("")
  const [family, setFamily] = useState("")
  const [goal, setGoal] = useState("")
  const [icon, setIcon] = useState()
  const [value, setValue] = useState(0)

  const handleSubmit = () => {
    console.log(Character)
    setIsFilledIn(!isFilledIn)
    setSection(0)
  }

  const handleNext = () => {
    if (section < 7) {
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
        <CharacterSheet
          name={name}
          number={number}
          class={characterClass}
          race={race}
          family={family}
          goal={goal}
          icon={icon}
        />
        <button onClick={handleSubmit}>Go back</button>
      </>
    )
  } else {
    return (
      <>
        <form onSubmit={(event) => event.preventDefault()}>

          {data.section[section] === "firstSection" &&
            <TextInput
              text={name}
              setText={setName}
              data={data.name}
            />}

          {data.section[section] === "secondSection" &&
            <SelectInput
              choice={characterClass}
              setChoice={setCharacterClass}
              data={data.class}
            />}

          {data.section[section] === "thirdSection" &&
            <RadioInput
              choice={race}
              setChoice={setRace}
              data={data.race}
            />}

          {data.section[section] === "fourthSection" &&
            <TextInput
              text={goal}
              setText={setGoal}
              data={data.goal}
            />}

          {data.section[section] === "fifthSection" &&
            <NumberInput
              number={number}
              setNumber={setNumber}
              data={data.age}
            />}

          {data.section[section] === "sixthSection" &&
            <SelectInput
              choice={family}
              setChoice={setFamily}
              data={data.family}
            />}

          {data.section[section] === "seventhSection" &&
            <RadioInputIcon
              choice={icon}
              setChoice={setIcon}
              data={data.icon}
            />}

          {data.section[section] === "eighthSection" &&
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
        <ProgressBar progress={data.section[section]} />
      </>
    )
  }
}

export default App