import React, { useState } from 'react'

// import TextInput from './TextInput'
// import Select from './Select'
// import Button from './Button'

const CreateQuestions = (props) => {
const { setFormQuestions, setFormStatus, setValues, values } = props 
// const { userQuestions, userValues, setUserQuestions, setUserValues, userCreateStep, setUserCreateStep } = props 

const defaultValues = () => {
  return {
    type: '',
    options: ['ett', 'två'],
    questionText: '',
    placeholder: '',
    required: 'false',
    inputId: ''
  }
}

  // const [userValues, setUserValues] = useState([])
  const [userQuestions, setUserQuestions] = useState([])
  const [userQuestion, setUserQuestion] = useState(defaultValues())
  const [userCreateStep, setUserCreateStep] = useState(1)
  const [optionsArr, setOptionsArr] = useState([])

  const userCreateInputResponse = (value, id) => {
    console.log(`userCreateInputResponse received ${value} from ${id}`)
    setUserQuestion({...userQuestion, [id]: value})
    // console.log(userQuestion)
    console.log('userQuestion ' + JSON.stringify(userQuestion, null, 2));

  }

  const setUserQuestionsState = (value) => {
    console.log('setUserQuestionsState')
    setUserQuestions([...userQuestions, value])
    console.log('userQuestions ' + userQuestions)

  }

  const userCreateButtonResponse = (value, id) => {
    console.log('value' + value)
    console.log('id ' + id)
    switch (id) {
      case 'save' :
        // console.log('value.options ' + value.options)
        // const arr = value.options.split(",")
        // setOptionsArr(arr)
        // console.log(optionsArr)
        // setUserQuestion({ ...userQuestion, options: optionsArr })
        // console.log(userQuestion)
        
        setUserQuestionsState(userQuestion)        
        setUserCreateStep(userCreateStep + 1)
        setUserQuestion(defaultValues())

      break

      case 'done':
      console.log(JSON.stringify(values, null, 2))
      console.log('uj')
      const newKeys = userQuestions.map(question => question.inputId)
      console.log(newKeys)
      newKeys.map(key => 
        setValues({...values, [key]: ''}))
      console.log(JSON.stringify(values, null, 2))

      setFormQuestions(userQuestions)
      setFormStatus('question')

      break
      default :
      return 
    }
  }

  return (
    <div className="create-question">
      <h1 className="question-number">Question #{userCreateStep}</h1>
      <h3>Question name</h3>
      <input 
      className="input text"
        type="text" 
        id="inputId"
        label="What is this question about?"
        value={userQuestion.inputId}
        placeholder="Type question name here"
        onChange={(e) => userCreateInputResponse(e.target.value, e.target.id)}
        />

        <h3>Question text</h3>
        <input 
        className="input text"
        type="text" 
        id="questionText"
        label="Your question"
        value={userQuestion.questionText}
        placeholder="Type your question here"
        onChange={(e) => userCreateInputResponse(e.target.value, e.target.id)}
        />

      <h3>Question type</h3>
        <select 
        type="select"
        className="input select" 
        label="What kind of question is this?"
        id="type" 
        value={userQuestion.type}
        onChange={(e) => userCreateInputResponse(e.target.value, e.target.id)}
        >
        <option hidden >Choose question type</option>
        <option value="textInput">Text input</option>
        <option value="select">Drop-down</option>
        <option value="checkboxes">Checkboxes</option>
        <option value="radio">Radio buttons</option>
        </select>
  
      <h3>Options</h3>
      <input 
        className="input text options"
        type="text"
        id='options'
        label="What different options should be available in the drop-down? Separate the values with a comma!"
        value={userQuestion.options}
        placeholder="Type options here"
        onChange={(e) => userCreateInputResponse(e.target.value, e.target.id)}/>

      <h3>Placeholder</h3>
      <input 
        className="input text"
        type="text" 
        label="Want to add some placeholder text? It's- real nice!"
        id='placeholder'
        value={userQuestion.placeholder}
        placeholder="Placeholder"
        onChange={(e) => userCreateInputResponse(e.target.value, e.target.id)}
      />
{/* 
      <h3>Is this a required field?</h3>
      <div>
      <input 
        type="radio" 
        className="input radio"
        label="A required field need to be filled out before the user can continue"
        id="required" 
        values={userQuestion.required}
        onChange={(e) => userCreateInputResponse(e.target.value, e.target.id)}
        options={['Yes', 'No']}
      />
      </div> */}

      <button 
        className="button"
        id="save"
        value="save"
        label="Save"
        onClick={(e) => userCreateButtonResponse(userQuestion, e.target.id)}>Save
      </button>
      
      <button 
        className="button secondary"
        value="done"
        id="done"
        label="Done"
        onClick={(e) => userCreateButtonResponse(userQuestions, e.target.id)}>Done
      </button>
      
      <p>{JSON.stringify(userQuestion, null, 2)}</p>
      <p>{JSON.stringify(userQuestions, null, 2)}</p>

    </div>
  )
}

export default CreateQuestions
