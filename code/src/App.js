import React, { useState } from 'react'
import { InputText } from 'components/InputText.js'
import { InputSelect } from 'components/InputSelect.js'
import { InputCheckbox } from 'components/InputCheckbox.js'
import { InputRadio } from 'components/InputRadio.js'
import 'css/app.css'

const ingredients = ['Lemon', 'Vanilla', 'Butter', 'Cream']
const genders = ['Woman', 'Man', 'Non binary']

export const App = () => {
  const [ingredient, setIngredient] = useState('')
  const [name, setName] = useState('')
  const [newsletter, setNewsletter] = useState(false)
  const [gender, setGender] = useState('')
  const [renderSummary, setRenderSummary] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setRenderSummary(true)
  }


  return (
    <div>
      {!renderSummary && (
        <form id="form" onSubmit={handleSubmit}>

          <InputText label="Name" state={name} setState={setName} />

          <InputSelect label="Ingredient" array={ingredients} state={ingredient} setState={setIngredient} />

          <InputCheckbox label="Newsletter" state={newsletter} setState={setNewsletter} />

          <InputRadio label="Gender" array={genders} state={gender} setState={setGender} />

          <button type="submit">Submit</button>

        </form>

      )}


      {renderSummary &&
        <div>
          <p>{name}</p>
          <p>{ingredient}</p>
          <p>{newsletter.toString()}</p>
          <p>{gender}</p>
        </div>
      }
    </div>
  )
}
