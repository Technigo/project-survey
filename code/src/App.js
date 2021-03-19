import React, { useState } from 'react'
import data from "./data.json"

import TextInput from "./components/TextInput"
import SelectInput from './components/SelectInput'
import RadioInput from './components/RadioInput'
import NumberInput from './components/NumberInput'
import RadioInputIcon from './components/RadioInputIcon'
import RangeInput from './components/RangeInput'
import NavigateButton from './components/NavigateButton'
import ReturnButton from './components/ReturnButton'
import SubmitButton from './components/SubmitButton'
import CharacterSheet from './components/CharacterSheet'
import ProgressBar from './components/ProgressBar'
import Footer from './components/Footer'


const App = () => {
  const [renderSummary, setRenderSummary] = useState(false)
  const [section, setSection] = useState(0)
  const [name, setName] = useState("")
  const [characterClass, setCharacterClass] = useState("")
  const [equipment, setEquipment] = useState("")
  const [race, setRace] = useState("")
  const [number, setNumber] = useState("")
  const [family, setFamily] = useState("")
  const [goal, setGoal] = useState("")
  const [icon, setIcon] = useState("")
  const [str, setStr] = useState("")
  const [int, setInt] = useState("")
  const [dex, setDex] = useState("")
  const [chr, setChr] = useState("")

  const isComplete = () => {
    if (name === "") {
      return false
    }
    if (characterClass === "") {
      return false
    }
    if (equipment === "") {
      return false
    }
    if (race === "") {
      return false
    }
    if (number === "") {
      return false
    }
    if (family === "") {
      return false
    }
    if (goal === "") {
      return false
    }
    if (icon === "") {
      return false
    }
    if (str === "") {
      return false
    }
    if (int === "") {
      return false
    }
    if (dex === "") {
      return false
    }
    if (chr === "") {
      return false
    }
    else {
      return true
    }
  }

  if (renderSummary) {
    return (
      <>
        <div className="summary">
          <CharacterSheet
            name={name}
            race={race}
            class={characterClass}
            equipment={equipment}
            number={number}
            family={family}
            goal={goal}
            icon={icon}
            str={str}
            int={int}
            dex={dex}
            chr={chr}
          />
          <ReturnButton
            setRenderSummary={setRenderSummary}
            setSection={setSection}
          />
        </div>
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <form
          className="form"
          onSubmit={(event) => event.preventDefault()}
        >
          <h1>Character Creator</h1>
          {data.section[section] === "firstSection" &&
            <TextInput
              text={name}
              setText={setName}
              data={data.name}
            />}

          {data.section[section] === "secondSection" &&
            <RadioInput
              choice={race}
              setChoice={setRace}
              data={data.race}
            />}

          {data.section[section] === "thirdSection" &&
            <SelectInput
              choice={characterClass}
              setChoice={setCharacterClass}
              data={data.class}
            />}

          {data.section[section] === "fourthSection" &&
            <RadioInputIcon
              choice={equipment}
              setChoice={setEquipment}
              data={data.equipment}
              characterClass={characterClass}
            />}

          {data.section[section] === "fifthSection" &&
            <TextInput
              text={goal}
              setText={setGoal}
              data={data.goal}
            />}

          {data.section[section] === "sixthSection" &&
            <NumberInput
              number={number}
              setNumber={setNumber}
              data={data.age}
            />}

          {data.section[section] === "seventhSection" &&
            <SelectInput
              choice={family}
              setChoice={setFamily}
              data={data.family}
            />}

          {data.section[section] === "eighthSection" &&
            <RadioInputIcon
              choice={icon}
              setChoice={setIcon}
              data={data.icon}
            />}

          {data.section[section] === "ninthSection" &&
            <div className="stats-container">
              <h2>Stats</h2>
              <RangeInput
                value={str}
                setValue={setStr}
                data={data.stats.strength}
              />
              <RangeInput
                value={int}
                setValue={setInt}
                data={data.stats.intelligence}
              />
              <RangeInput
                value={dex}
                setValue={setDex}
                data={data.stats.dexterity}
              />
              <RangeInput
                value={chr}
                setValue={setChr}
                data={data.stats.charisma}
              />
            </div>}

          <div className="button-container">

            {data.section[section] !== "firstSection" &&
              <NavigateButton
                source="./assets/arrow-left.svg"
                goNext={false}
                section={section}
                setSection={setSection}
              />}

            {data.section[section] !== "ninthSection" &&
              <NavigateButton
                source="./assets/arrow-right.svg"
                goNext={true}
                section={section}
                setSection={setSection}
              />}

            <SubmitButton
              setRenderSummary={setRenderSummary}
              isComplete={isComplete}
              section={section}
            />

          </div>

          <ProgressBar progress={data.section[section]} section={data.section} />

        </form>
      </>
    )
  }
}

export default App