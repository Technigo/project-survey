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
    <section className="story-container">
      <img src="images/parchment.png" className="book-img" alt="a book" />
      <container className="side-in-book">
        <div className="form-div">
          {step === 1 && (
            <>
              <h1>Let us write your fairytale</h1>
              <Fairyname fairyName={fairyName} setFairyName={setFairyName} />
            </>
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
            <>
              <Name name={name} setName={setName} />
              <button
                className="next-question-btn"
                type="submit"
                onClick={handleNextQuestion}>
                Create your fairytale
              </button>
            </>
          )}
          {step >= 6 && (
            <Story fairyName={fairyName} color={color} horn={horn} loveAct={loveAct} name={name} />
          )}
          {step < 5 && (
            <button
              className="next-question-btn"
              type="submit"
              onClick={handleNextQuestion}>
              Next question
            </button>
          )}
        </div>
      </container>
    </section>
  )
}
