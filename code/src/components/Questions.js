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
              //The questions are in the json file questions.json, 
              //together with the type of the question (input, dropdown or radio buttons), questions number, 
              //and with the answer alternatives. 
              //A foreach function go through all of the questions, checks what number it should display 
              //and what type and answer alternatives that queations has.

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
                    default: 
                      answerComponent = null;
                      break;
                  }
                }
              });
              
    return (
      <>
      <div className="question-container container">

        {/* Start page should be displayed as page number 0 */}
        { counter === 0 && <Start /> }

        {/* The questions in the answerComponent should be displayed if we are not on the summary page. */}
        {!showSummary && answerComponent }
        
        {/* If the counter has the same value as the questions are in total, then we should show the submit button,
        otherwise show the text about how manu questions that are left */}
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