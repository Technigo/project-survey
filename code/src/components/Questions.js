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
//console.log(questions.questions[0].type);



const QuestionContainer = () => {

  const [counter, setCounter] = useState(0);

              let answerComponent;
              let dropdownComponent;
              const questionsInTotal = questions.questions.length;

              // --> filter
              let actualQuestion;
              questions.questions.forEach(question => {
                if (question.number === counter) {
                  actualQuestion = question;

                  console.log(question.type);
                  switch (question.type) {
                    case 'input':
                      answerComponent = <Input question={question.question} />;
                      //return <Input />
                      console.log('hej input');
                      break;
                    case 'radio':
                      console.log('hej radio');
                      console.log('alternatives:' + typeof(question.alternatives));
                      console.log('alternative 1:' + question.alternatives[1]);

                      answerComponent = <Radio question={question.question} alternatives={question.alternatives} />
                      break;
                    case 'dropdown':
                      answerComponent = <Dropdown question={question.question} alternatives={question.alternatives} />;
                      console.log('hej dropdown');
                      break;
                  }
                }
              });





             // {questions.questions.map((question) => (
             //   {question.number === counter && <p>question.question</p>}
          //    ))}


    return (
      <>
      <div className="question-container container">
          <form onSubmit={handleSubmit}>            
            {/* props vilken fråga array mapa igenom? */}
            {/* <Question1 />
            <Question2 /> */}
            { answerComponent }
            { dropdownComponent }
            <p>{counter} </p>
            {/* <p>{ actualQuestion ? actualQuestion.question : ''}</p> */}




              

         {  /* ))}*/}
              

            <Submit />

          </form>
      </div>

      <p class="container">You are now on question number {counter} and you have {questionsInTotal - counter} left. Keep going! </p>

      <div className="container forward-next">
        <button onClick={() =>setCounter(counter + 1)}>Next question</button>
        <button onClick={() =>setCounter(counter - 1)}>Previous question</button>

      </div>
      </>
    );
  };


  
  export default QuestionContainer;
