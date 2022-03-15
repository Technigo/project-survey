import React, {useState} from 'react'

import { Form } from 'components/Form'
import { Option } from 'components/Option'
import { Select } from 'components/Select'

import questions from './questions.json'
import { handleChange } from 'components/StateHandlers'

export const App = () => {
  const [selectMenuValue, setSelectMenuValue] = useState("default");
  const [textInputValue, setTextInputValue] = useState("")


  // const handleChange = (e) => {
  //   setSelectMenuValue(e.target.value);
  // };

  // prevents page from reload when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectMenuValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      
      {/* Select menu with a default value that is hidden */}
      <select defaultValue={selectMenuValue} onChange={handleChange(selectMenuValue, setSelectMenuValue)}>
        {<option value="default" disabled hidden>Choose age</option>}
        {questions.age.map((a) =>
          <Option
            value = {a}
          />
        )}
      </select>

      <input>
          
      </input>
      <button>Submit</button>
    </form>
  )
  // return (
  //   <div>
  //     <Form 
  //       select = {<Select />}
  //       questions = {questions}
  //     />

  //     {/* <Form 
  //       questions={questions}/> */}
  //   </div>
  // )
}
