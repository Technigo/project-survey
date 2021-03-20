import React, { useState } from "react"
import data from "./data.json"

import Heading from "./components/Heading"
import TextInput from "./components/TextInput"
import SelectInput from "./components/SelectInput"
import RadioInput from "./components/RadioInput"
import RangeInput from "./components/RangeInput"
import CheckInput from "./components/CheckInput"
import TextArea from "./components/TextArea"

export const App = () => {
  const [name, setName] = useState("")
  const [country, setCountry] = useState("")
  const [region, setRegion] = useState("")
  const [unit, setUnit] = useState("")
  const [amount, setAmount] = useState("")
  const [allergies, setAllergies] = useState("")
  const [other, setOther] = useState("")


  return (
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
      <CheckInput
      choice={allergies}
      setChoice={setAllergies}
      data={data.allergies}
      />
      <TextArea
      text={other}
      setText={setOther}
      data={data.other}
      />
    </form>
  )
}


