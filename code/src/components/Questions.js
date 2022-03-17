import propTypes from 'eslint-plugin-react/lib/rules/prop-types';
import React, { useState } from 'react';
import questions from '../questions.json'

import Question1 from './Question1.js';
import Question2 from './Question2.js';
import Submit from './Submit.js';
import Input from './Input.js';
import Dropdown from './Dropdown.js';
import Radio from './Radio.js';


const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(setName(userName));    
}

console.log(questions);



const QuestionContainer = () => {

  const [counter, setCounter] = useState(0);

              let answerComponent;
              const questionsInTotal = questions.questions.length;

              // --> filter????
              let actualQuestion;
              questions.questions.forEach(question => {
                if (question.number === counter) {
                  actualQuestion = question;

                  switch (question.type) {
                    case 'input':
                      answerComponent = <Input question={question.question} />;
                      break;
                    case 'radio':
                      answerComponent = <Radio question={question.question} alternatives={question.alternatives} />
                      break;
                    case 'dropdown':
                      answerComponent = <Dropdown question={question.question} alternatives={question.alternatives} />;
                      break;
                  }
                }
              });

    return (
      <>
      <div className="question-container container">
          <form onSubmit={handleSubmit}>            
            { answerComponent }
            {counter === questionsInTotal ? <Submit /> : <p class="container">You are now on question number {counter} and you have {questionsInTotal - counter} left. Keep going! </p> }
          </form>
      </div>


      <div className="container forward-next">
        <button onClick={() =>setCounter(counter + 1)}>Next question</button>
        <button onClick={() =>setCounter(counter - 1)}>Previous question</button>

      </div>
      </>
    );
  };


  
  export default QuestionContainer;
