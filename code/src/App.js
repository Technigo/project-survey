import React, { useState } from 'react'
import data from "./data.json"

import RadioInput from './components/RadioInput'
import RadioInputIcon from './components/RadioInputIcon'
import SelectInput from './components/SelectInput'
import TextInput from "./components/TextInput"
import RangeInput from './components/RangeInput'
import NumberInput from './components/NumberInput'
import CharacterSheet from './components/CharacterSheet'
import ProgressBar from 'components/ProgressBar'
import SubmitButton from 'components/SubmitButton'
import NavigateButton from 'components/NavigateButton'


const App = () => {
  const [renderSummary, setRenderSummary] = useState(false)
  const [section, setSection] = useState(0)
  const [name, setName] = useState("")
  const [characterClass, setCharacterClass] = useState()
  const [race, setRace] = useState("")
  const [number, setNumber] = useState()
  const [family, setFamily] = useState("")
  const [goal, setGoal] = useState("")
  const [icon, setIcon] = useState()
  const [str, setStr] = useState()
  const [int, setInt] = useState()
  const [dex, setDex] = useState()


  if (renderSummary) {
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
          str={str}
          int={int}
          dex={dex}
        />
        <SubmitButton
          text="Go back"
          renderSummary={renderSummary}
          setRenderSummary={setRenderSummary}
          setSection={setSection}
        />
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
            </div>}

          <div>
            <NavigateButton
              text="Previous Question"
              goNext={false}
              section={section}
              setSection={setSection}
            />
            <NavigateButton
              text="Next Question"
              goNext={true}
              section={section}
              setSection={setSection}
            />
            <SubmitButton
              text="Submit"
              renderSummary={renderSummary}
              setRenderSummary={setRenderSummary}
              setSection={setSection}
            />
          </div>
        </form>
        <ProgressBar progress={data.section[section]} />
      </>
    )
  }
}

export default App