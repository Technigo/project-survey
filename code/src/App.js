import React, { useState } from 'react'
import { InputText } from 'components/InputText.js'
import { InputSelect } from 'components/InputSelect.js'
import { InputCheckbox } from 'components/InputCheckbox.js'
import { InputRadio } from 'components/InputRadio.js'
import 'css/app.css'


export const App = () => {
  const [ingredient, setIngredient] = useState('')
  const [name, setName] = useState('')
  const [newsletter, setNewsletter] = useState(false)
  const [genderChoice, setGenderChoice] = useState('')
  const [renderSummary, setRenderSummary] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setRenderSummary(true)
  }


  return (
    <div>
      {!renderSummary && (
        <form id="form" onSubmit={handleSubmit}>

          <InputText state={name} setState={setName} />

          <InputSelect state={ingredient} setState={setIngredient} />

          <InputCheckbox state={newsletter} setState={setNewsletter} />

          <InputRadio state={genderChoice} setState={setGenderChoice} />

          <button onClick={() => { console.log(name) }}>Submit</button>

        </form>

      )}


      {renderSummary &&
        <div>
          <p>{name}</p>
          <p>{ingredient}</p>
          <p>{newsletter.toString()}</p>
          <p>{genderChoice}</p>
        </div>
      }
    </div>
  )
}
