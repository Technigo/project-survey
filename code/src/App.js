import React, { useState } from 'react'
import { Fairyname } from 'components/Fairyname'
import { Color } from 'components/Color'
import { Adjective } from 'components/Adjective'
import { Loveact } from 'components/Loveact'
import { Name } from 'components/Name'
import { Story } from 'components/Story'

export const App = () => {
  const [step, setStep] = useState(1)
  const [fairyName, setFairyName] = useState('')
  const [color, setColor] = useState('')
  const [horn, setHorn] = useState('')
  const [loveAct, setLoveAct] = useState('')
  const [name, setName] = useState('')
  // const [story, setStory] = useState('')

  const handleNextQuestion = () => {
    setStep(step + 1)
  }
  return (
    <container className="story-container">
      <p>Let us write your fairytale</p>
      {step === 1 && (
        <Fairyname fairyName={fairyName} setFairyName={setFairyName} />
      )}
      {step === 2 && (
        <Color color={color} setColor={setColor} />
      )}
      {step === 3 && (
        <Adjective horn={horn} setHorn={setHorn} />
      )}
      {step === 4 && (
        <Loveact loveAct={loveAct} setLoveAct={setLoveAct} />
      )}
      {step === 5 && (
        <Name name={name} setName={setName} />
      )}
      {step >= 6 && (
        <Story fairyName={fairyName} color={color} horn={horn} loveAct={loveAct} name={name} />
      )}

      <button
        type="button"
        onClick={handleNextQuestion}>
        Next question
      </button>
    </container>
  )
}
