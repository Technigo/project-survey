import React, { useState } from "react";
import TextInput from 'InputTypes/TextInput.js'
import RadioInput from 'InputTypes/RadioInput.js'
import DropdownInput from 'InputTypes/DropdownInput.js'

const Form = ({ setAnswered, questions }) => {
    const defaultAnswers = questions.map(question => question.defaultAnswer);
    const [answers, setAnswers] = useState(defaultAnswers);
    const [currentQuestion, setQuestion] = useState(questions[0]) /* start at the first question */
  
    const handleRadioClick = (event) => {
      let tempAnswers = answers;
      tempAnswers[currentQuestion.index] = event.target.value;
      setAnswers(tempAnswers);
    }
  
    return (
        <form onSubmit={() => setAnswered(true)}>
          <h2>Form</h2>
          <h3>Question {currentQuestion.index} + 1</h3>
          <p>{currentQuestion.text}</p>
  
          {currentQuestion.type === 'input' && 
            <TextInput 
              currentQuestion={currentQuestion}
              setAnswers={setAnswers}
              answers={answers}
            />
          }
  
          {currentQuestion.type === 'radio' && 
            currentQuestion.alternatives.map((alternative, index) => 
              <RadioInput
                key={index}
                label={alternative}
                onChange={handleRadioClick}
                checked={answers[currentQuestion.index] === alternative}
              />
          )}
          
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
              onClick={() => setQuestion(questions[currentQuestion.index + 1])} 
              type="submit"
              disabled={answers.includes(null) && true}
            >Submit</button>
          </nav>
        </form>
    );
  };

  export default Form