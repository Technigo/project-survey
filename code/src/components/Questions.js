import React, { useState } from 'react';
import questions from '../questions.json'


import Submit from './Submit.js';
import Input from './Input.js';
import Dropdown from './Dropdown.js';
import Radio from './Radio.js';
import NextPrevious from './NextPrevious.js';




console.log(questions);



const QuestionContainer = (props) => {

  //const [counter, setCounter] = useState(0);
 // const [inputvalue, setInputValue] = useState('');

  const [counter, setCounter] = useState(0);

  // const handleInputChange = (event) => {
  //   props.setInputValue(event.target.value);
  //   console.log(props.inputvalue); 
  // }



  const handleSubmit = (event) => {
    event.preventDefault();
    //props.handleInputChange(event);
    //handleDropdownChange(event);
    //props.handleRadioChange(event);
  }


              let answerComponent;
              const questionsInTotal = questions.questions.length;

              // --> filter????
              questions.questions.forEach(question => {
                if (question.number === counter) {

                  switch (question.type) {
                    case 'input':
                      answerComponent = <Input question={question.question} inputvalue={props.inputvalue} onInputChange={props.handleInputChange} />;
                      break;
                    case 'radio':
                      answerComponent = <Radio question={question} onRadioChange={props.handleRadioChange} />
                      break;
                    case 'dropdown':
                      answerComponent = <Dropdown 
                          question={question.question} 
                          alternatives={question.alternatives} 
                          onDropdownChange={props.handleDropdownChange}
                          dropdownValue={props.dropdownValue}
                        />;
                      break;
                  }
                }
              });

    return (
      <>
      <div className="question-container container">
          <form onSubmit={handleSubmit}>            
            { answerComponent }
            {counter === questionsInTotal ? <Submit /> : <div className="container"><p>You are now on question number {counter} and you have {questionsInTotal - counter} left. Keep going!</p><NextPrevious counter={counter} setCounter={setCounter} /></div> }
          </form>
      </div>


      {/* Egen component */}
      {/* <div className="container forward-next">
        <button onClick={() =>setCounter(counter - 1)}>Previous question</button>
        <button onClick={() =>setCounter(counter + 1)}>Next question</button>
      </div> */}
      </>
    );
  };

  

  
  export default QuestionContainer;
