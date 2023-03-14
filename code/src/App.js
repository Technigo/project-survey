
import React, { useState } from 'react';
import { Section } from './components/Section'
import { Header } from './components/Header'
import SubmitButton from './components/Button'
import { Result } from './components/Result'

export const App = () => {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')
  const [mood, setMood] = useState(5)
  const [difficulties, setDifficulties] = useState('')
  const [equipment, setEquipment] = useState([])
  const [support, setSupport] = useState('')
  const steps = [1, 2, 3, 4, 5]
  return (
    <div>
      {counter === 0
&& <Header counter={counter} setCounter={setCounter} />}
      {counter === steps.find((step) => step === counter)
&& <Section
  counter={counter}
  setCounter={setCounter}
  name={name}
  setName={setName}
  mood={mood}
  setMood={setMood}
  difficulties={difficulties}
  setDifficulties={setDifficulties}
  equipment={equipment}
  setEquipment={setEquipment}
  support={support}
  setSupport={setSupport} />}
      {counter === 6
&& <SubmitButton className="test" counter={counter} setCounter={setCounter} name="Submit" />}
      {counter > 6
&& <Result
  name={name}
  mood={mood}
  difficulties={difficulties}
  equipment={equipment}
  support={support} />}
    </div>
  );
}
