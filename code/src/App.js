import React, { useState } from 'react'
import { InputText } from 'components/InputText.js'
import { InputSelect } from 'components/InputSelect.js'
import { InputCheckbox } from 'components/InputCheckbox.js'
import { InputRadio } from 'components/InputRadio.js'
import 'css/app.css'


export const App = () => {
  const [nut, setNut] = useState('')
  const [name, setName] = useState('')
  const [allergy, setAllergy] = useState(false)
  const [shape, setShape] = useState('')
  const [renderSummary, setRenderSummary] = useState(false)

  const nuts = ['Almond', 'Brazil nut', 'Cashew', 'Hazelnut', 'Macadamia', 'Peanut', 'Pecan', 'Pistachio', 'Walnut']
  const shapes = ['Burnt', 'Butter', 'Natural', 'Roasted', 'Salted', 'Sweet']

  const handleSubmit = (event) => {
    event.preventDefault()
    setRenderSummary(true)
  }

  return (
    <main className="main-content">

      {!renderSummary ?

        <form id="form" onSubmit={handleSubmit}>

          <InputText
            label="Name"
            state={name}
            setState={setName}
          />

          <InputSelect
            label="Favorite nut"
            array={nuts}
            state={nut}
            setState={setNut}
          />

          <InputCheckbox
            label="Allergy"
            state={allergy}
            setState={setAllergy}
          />

          <InputRadio
            label="Preferred shape"
            array={shapes}
            state={shape}
            setState={setShape}
          />

          <button type="submit">Submit</button>

        </form>

        :

        <section className="summary">
          <h2>
            Hi {name}! Your favorite nut is the {nut.toLowerCase()} and you prefer it {shape.toLowerCase()}.
            {allergy ? <>Sorry to hear that you're allergic though.</> : <>Happy to hear you can eat them.</>}
          </h2>
        </section>
      }
    </main>
  )
}
