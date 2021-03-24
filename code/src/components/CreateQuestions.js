import React, { useState } from 'react'

const CreateQuestions = (props) => {
const { setFormQuestions, setFormStatus, setValues, defaultValues, setStep, defaultQuestions } = props 

const defaultUserCreateValues = () => {
  return {
    type: '',
    options: '',
    questionText: '',
    placeholder: '',
    required: false,
    inputId: ''
  }
}

  const [userQuestions, setUserQuestions] = useState([])
  const [userQuestion, setUserQuestion] = useState(defaultUserCreateValues())
  const [userCreateStep, setUserCreateStep] = useState(1)

  // Local event handler for input fields changes
  const userCreateInputResponse = (value, id) => {
    console.log(`userCreateInputResponse received ${value} from ${id}`)
    setUserQuestion({...userQuestion, [id]: value})
    
  }
  
  // Local button handler for Save and Done buttons
  const userCreateButtonResponse = (value, id) => {
    console.log(`userCreateButtonResponse received ${value} from ${id}`)
    switch (id) {
      // When one complete question is saved
      case 'save' :
        if (questionTypeNeedsOptions()) { 
          const arr = value.options.split(",")
          setUserQuestions([...userQuestions, {...userQuestion, options: arr}])
        } else {
          setUserQuestions([...userQuestions, userQuestion])
        }
        setUserCreateStep(userCreateStep + 1)
        setUserQuestion(defaultUserCreateValues())
      break

      // When all questions are finished 
      case 'done':
      const inputIdObj = userQuestions.reduce((result, question) => {
        return {
          ...result,
          [question.inputId]: ""
        }
      }, {})
      setValues(inputIdObj)
      setFormQuestions(userQuestions)
      setFormStatus('question')
      break
      
      case 'cancel':
      setValues(defaultValues())
      setFormQuestions(defaultQuestions())
      setFormStatus('question')
      setStep(1)


      break
      default :
      return 
    }
  }
  
  // Should save-button be rendered?  
  const userQuestionIsReady = () => {
    if (userQuestion.type && 
      userQuestion.questionText && 
      userQuestion.inputId &&
      optionsReady()) {
        return true
      } else {
        return false
    }
  }

  const optionsReady = () => {
    if (!questionTypeNeedsOptions()) {
      return true
    } else {
      if (userQuestion.options.includes(',')) {
        return true
      } else {return false}
    }
  }

  const questionTypeNeedsOptions = () => {
    if (userQuestion.type 
      && userQuestion.type !== 'textInput') {
        return true
      } else {return false}
  }
  console.log('questionTypeNeedsOptions ' + questionTypeNeedsOptions())
  console.log('optionsReady: ' + optionsReady())
  console.log('userQuestionIsReady:' + userQuestionIsReady())

  return (
    <form className="create-question">
      <h1 className="question-number">Question #{userCreateStep}</h1>
      <h3>Question topic</h3>
      <input 
        className="input text"
        type="text" 
        id="inputId"
        spellCheck="false"
        autoComplete="off"
        // label="What is this question about? Oh and - sorry, but no spaces allowed here"
        value={userQuestion.inputId}
        placeholder="No spaces allowed for topic (sorry)"
        onChange={(e) => {
          userCreateInputResponse(e.target.value, e.target.id)}
        }
      />

      <h3>Question text</h3>
      <input 
        className="input text"
        type="text" 
        id="questionText"
        // label="Your question"
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
        <option hidden>Choose question type</option>
        <option value="textInput">Text input</option>
        <option value="select">Drop-down</option>
        <option value="checkboxes">Checkboxes</option>
        <option value="radio">Radio buttons</option>
      </select>

      {questionTypeNeedsOptions() &&
        <>
          <h3>Options</h3>
          <input 
          className="input text options"
          type="text"
          id='options'
          label="What different options should be available in the drop-down? Separate the values with a comma!"
          value={userQuestion.options}
          placeholder="Type options here"
          onChange={(e) => userCreateInputResponse(e.target.value, e.target.id)}/>
        </>
      }
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
      <h3>Is this a required field?</h3>
      <div>
      <label>Yes
        <input 
          type="radio" 
          className="input radio create"
          id="required" 
          name="required" 
          value={true}
          onChange={(e) => userCreateInputResponse(e.target.value, e.target.id)}
        />
        </label>
        <label>No
        <input 
          type="radio" 
          className="input radio create"
          id="required" 
          name="required" 
          value={false}
          onChange={(e) => userCreateInputResponse(e.target.value, e.target.id)}
        />
        </label>
      </div>
      {userQuestionIsReady() &&
        <button 
        className="button"
        id="save"
        value="save"
        label="Save"
        onClick={(e) => userCreateButtonResponse(userQuestion, e.target.id)}>Save question
      </button>
      }
      { userQuestions.length &&
      <button 
        className="button secondary"
        value="done"
        id="done"
        onClick={(e) => userCreateButtonResponse(userQuestions, e.target.id)}>
          Start the survey!
        </button>
      }
      <button 
        className="button secondary"
        value="cancel"
        id="cancel"
        onClick={(e) => userCreateButtonResponse(userQuestions, e.target.id)}>
          Cancel
        </button>
    </form>
  )
}

export default CreateQuestions
