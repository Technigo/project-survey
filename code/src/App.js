import React, { useState } from 'react'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { InputText } from 'components/InputText'
import { InputSelect } from 'components/InputSelect'
import { InputCheckbox } from 'components/InputCheckbox'
import { InputRadio } from 'components/InputRadio'
import { SubmitButton } from 'components/SubmitButton'
import { Summary } from 'components/Summary'
import { ProgressCounter } from 'components/ProgressCounter'

import 'css/app.css'
import 'css/form.css'


export const App = () => {

  const [name, setName] = useState('')
  const [nut, setNut] = useState('')
  const [shape, setShape] = useState('')
  const [allergy, setAllergy] = useState(false)
  const [renderSummary, setRenderSummary] = useState(false)
  const [count, setCount] = useState(1)

  const nuts = ['Almond', 'Brazil nut', 'Cashew', 'Hazelnut', 'Macadamia', 'Peanut', 'Pecan', 'Pistachio', 'Walnut']
  const shapes = ['Burnt', 'Butter', 'Natural', 'Roasted', 'Salted', 'Sweet']
  const questionsTotal = 4; // Total number of questions


  const handleSubmit = (event) => {
    event.preventDefault()
    setCount(count + 1)
    count === questionsTotal && setRenderSummary(true) // Render summary when all questions are answered
  }


  return (
    <div className="wrapper">

      <Header heading="🥜" />

      <main className="main-content">
        <div className="form-container">

          {!renderSummary ?
            <form className="nut-form" onSubmit={handleSubmit}>

              {count === 1 && (
                <InputText
                  label="What's your name?"
                  id="inputName"
                  placeholder="Name"
                  state={name}
                  setState={setName}
                />
              )}
              {count === 2 && (
                <InputSelect
                  label="What is your favorite nut?"
                  id="inputNut"
                  array={nuts}
                  state={nut}
                  setState={setNut}
                />
              )}
              {count === 3 && (
                <InputRadio
                  label="How do you prefer your nuts?"
                  id="inputNutShape"
                  array={shapes}
                  state={shape}
                  setState={setShape}
                />
              )}
              {count === questionsTotal && (
                <InputCheckbox
                  label="I'm allergic to nuts"
                  id="inputAllergy"
                  state={allergy}
                  setState={setAllergy}
                />
              )}

              {/* Render different button content depending on questions answered */}
              {count < questionsTotal ? <SubmitButton content="→" /> : <SubmitButton content="Submit" />}

            </form>

            :

            <Summary
              name={name}
              nut={nut}
              shape={shape}
              allergy={allergy}
            />

          }
        </div>

        <ProgressCounter count={count} total={questionsTotal} />

      </main>

      <Footer text="stuff about nuts" />

    </div>
  )
}
