import React, { useState } from "react";
import TextInput from 'InputTypes/TextInput.js'
import RadioInput from 'InputTypes/RadioInput.js'
import DropdownInput from 'InputTypes/DropdownInput.js'

const Form = ({ setCanBeSubmitted, questions, answers, setAnswers }) => {
  const [currentQuestion, setQuestion] = useState(questions[0]) /* start at the first question */

  const [dummy, setDummy] = useState(0)

  const handleRadioClick = (event) => {
    let tempAnswers = answers;
    tempAnswers[currentQuestion.index] = event.target.value;
    setAnswers(tempAnswers);
    
    setDummy(event.target.value) /* dummy variabel force re-render as setAnswer don't */
  }

  return (
    <form onSubmit={() => setCanBeSubmitted(true)}>
      <h2>Formulär</h2>
      <div className="ask">
        <h3>Fråga {currentQuestion.index + 1}</h3>
        <hr />
        <p>{currentQuestion.text}</p>
      </div>
    
      <div className="question">
      
        {currentQuestion.type === 'input' && 
          <TextInput 
            currentQuestion={currentQuestion}
            setAnswers={setAnswers}
            answers={answers}
            setDummy={setDummy}
          />
        }

        {currentQuestion.type === 'radio' && 
          currentQuestion.alternatives.map((alternative, index) => 
            <RadioInput
              key={index}
              label={alternative}
              onChange={handleRadioClick}
              checked={answers[currentQuestion.index] === alternative}
              answers={answers} /* for debug purposes */
            />
        )}

        {currentQuestion.type === 'dropdown' && 
          <DropdownInput
            answers = {answers}
            setAnswers = {setAnswers}
            alternatives={currentQuestion.alternatives}
            index = {currentQuestion.index}
            setDummy={setDummy}
          />
        }
      </div>
      
      <nav className="navigation">
        <button 
          onClick={() => setQuestion(questions[currentQuestion.index - 1])} 
          type="button"
          disabled={currentQuestion.index === 0 && true}
        >Prev</button>
        <button 
          onClick={() => setQuestion(questions[currentQuestion.index + 1])} 
          type="button"
          disabled={currentQuestion.index === questions.length - 1 && true}
        >Next</button>
        <button 
          onClick={() => setCanBeSubmitted(true)} 
          type="submit"
          disabled={answers.includes(null) && true}
        >Submit</button>
      </nav>
    </form>
  );
};

export default Form