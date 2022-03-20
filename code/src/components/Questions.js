import React, { useState } from 'react';
import questions from '../questions.json'
import Start from './Start.js';
import Submit from './Submit.js';
import Input from './Input.js';
import Dropdown from './Dropdown.js';
import Radio from './Radio.js';
import NextPrevious from './NextPrevious.js';
import Startover from './Startover.js';
import Summary from './Summary.js';

const QuestionContainer = (props) => {

  const [counter, setCounter] = useState(0);
  const [inputvalue, setInputValue] = useState('');
  const [radiovalue, setRadioValue] = useState();
  const [dropdownvalue, setAlternative] = useState();
  const [showSummary, setShowSummary] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  }

  const handleDropdownChange = (event) => {
    setAlternative(event.target.value);
  }

  const handleSubmit = (event) => {
    setShowSummary(true);
    event.preventDefault();
  }

  const startOver = (event) => {
    setCounter(0);
    setShowSummary(false);
  }

              let answerComponent;
              const questionsInTotal = questions.questions.length;

              questions.questions.forEach(question => {
                if (question.number === counter) {

                  switch (question.type) {
                    case 'input':
                      answerComponent = <Input 
                        question={question.question} 
                        inputvalue={inputvalue} 
                        onInputChange={handleInputChange} 
                      />;
                      break;
                    case 'radio':
                      answerComponent = <Radio 
                        question={question} 
                        onRadioChange={handleRadioChange} 
                      />
                      break;
                    case 'dropdown':
                      answerComponent = <Dropdown 
                          question={question.question} 
                          alternatives={question.alternatives} 
                          onDropdownChange={handleDropdownChange}
                          dropdownValue={dropdownvalue}
                        />;
                      break;
                  }
                }
              });
              
    return (
      <>
      <div className="question-container container">
        { counter === 0 && <Start /> }
        
            {!showSummary && answerComponent }
            
            {counter === questionsInTotal ? 
              <>
                {!showSummary && 
                <div className="buttons-container">
                  <NextPrevious counter={counter} setCounter={setCounter} hideNextQuestionButton={true} />
                  <Submit handleSubmit={handleSubmit} /> 
                </div>
                }
              </>
                : 
                <div className="container">
                  { counter > 0 && <p>You are now on question number {counter} and you have {questionsInTotal - counter} left. Keep going!</p> }
                  <NextPrevious counter={counter} setCounter={setCounter} />
                </div> 
            }
      </div>

      {showSummary && <>
          <Summary inputvalue={inputvalue} radioValue={radiovalue} dropdownValue={dropdownvalue} /> 
          <Startover counter={counter} onClick={startOver} />
        </> 
      }
      </>
    );
  };
  
  export default QuestionContainer;