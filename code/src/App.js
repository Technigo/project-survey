import React, { useState } from "react"
import data from "./data.json"

import Heading from "./components/Heading"
import TextInput from "./components/TextInput"
import SelectInput from "./components/SelectInput"
import RadioInput from "./components/RadioInput"
import RangeInput from "./components/RangeInput"
import CheckboxInput from "./components/CheckboxInput"
import TextArea from "./components/TextArea"
import SubmitButton from "components/SubmitButton"
import SwapCard from "./components/SwapCard"
import ReturnButton from "./components/ReturnButton"

export const App = () => {
  const [name, setName] = useState("")
  const [country, setCountry] = useState("")
  const [region, setRegion] = useState("")
  const [unit, setUnit] = useState("")
  const [amount, setAmount] = useState("")
  const [allergies, setAllergies] = useState("")
  const [other, setOther] = useState("")
  const [summary, setSummary] = useState(false)

  const isRequired = () => {
    if (name === "") {
      return false
    }
    if (country === "") {
      return false
    }
    if (region === "") {
      return false
    }
    if (unit === "") {
      return false
    }
    if (amount === "") {
      return false
    }
    else {
      return true
    }
  }

  if (summary) {
    return (
      <div className="summary">
        <SwapCard
          name={name}
          country={country}
          region={region}
          unit={unit}
          amount={amount}
          allergies={allergies}
          other={other}
        />
        <ReturnButton
          setSummary={setSummary}
        />
      </div>
    )
  } else {
    return (
      <div className="form-container">
        <form>
          <Heading/>
          <TextInput
            text={name}
            setText={setName}
            data={data.name}
          />
          <TextInput
            text={country}
            setText={setCountry}
            data={data.country}
          />
          <SelectInput
            choice={region}
            setChoice={setRegion}
            data={data.region}
          />
          <RadioInput
            choice={unit}
            setChoice={setUnit}
            data={data.unit}
          />
          <RangeInput
            value={amount}
            setValue={setAmount}
            data={data.amount}
          />
          <CheckboxInput
            choice={allergies}
            setChoice={setAllergies}
            data={data.allergies}
          />
          <TextArea
            text={other}
            setText={setOther}
            data={data.other}
          />
          <SubmitButton
            setSummary={setSummary}
            isRequired={isRequired}
          />
        </form>
      </div>
    )
  }
}


