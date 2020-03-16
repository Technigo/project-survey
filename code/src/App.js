import React, { useState } from 'react'
import { InputText } from 'components/InputText.js'
import { InputSelect } from 'components/InputSelect.js'
import { InputCheckbox } from 'components/InputCheckbox.js'
import { InputRadio } from 'components/InputRadio.js'
import 'css/app.css'


export const App = () => {
  const [name, setName] = useState('')
  const [nut, setNut] = useState('')
  const [shape, setShape] = useState('')
  const [allergy, setAllergy] = useState(false)
  const [renderSummary, setRenderSummary] = useState(false)
  const [count, setCount] = useState(0)

  const nuts = ['Almond', 'Brazil nut', 'Cashew', 'Hazelnut', 'Macadamia', 'Peanut', 'Pecan', 'Pistachio', 'Walnut']
  const shapes = ['Burnt', 'Butter', 'Natural', 'Roasted', 'Salted', 'Sweet']


  const handleSubmit = (event) => {
    event.preventDefault()
    setCount(count + 1)

    count === 3 && setRenderSummary(true)
  }


  return (
    <main className="main-content">

      <h1><span role="img" aria-label="Peanuts">🥜</span></h1>

      {!renderSummary ?
        <form className="nut-form" onSubmit={handleSubmit}>

          {count === 0 && (
            <InputText
              label="Name"
              state={name}
              setState={setName}
            />
          )}
          {count === 1 && (
            <InputSelect
              label="Favorite nut"
              array={nuts}
              state={nut}
              setState={setNut}
            />
          )}
          {count === 2 && (
            <InputCheckbox
              label="Allergy"
              state={allergy}
              setState={setAllergy}
            />
          )}
          {count === 3 && (
            <InputRadio
              label="Preferred shape"
              array={shapes}
              state={shape}
              setState={setShape}
            />
          )}


          {count < 3 ?
            <button type="submit">Next</button>
            :
            <button type="submit">Submit</button>
          }


        </form>

        :

        <section className="summary">
          <h2>
            Hi {name.charAt(0).toUpperCase() + name.slice(1)}! Your favorite nut is the {nut.toLowerCase()} and you prefer it {shape.toLowerCase()}.
            {allergy ? <> Sorry to hear you're allergic though.</> : <> Happy to hear you can eat them!</>}
          </h2>
        </section>

      }
    </main>
  )
}
