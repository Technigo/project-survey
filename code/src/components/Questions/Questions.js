import React, { useState } from 'react';
import Dropdown from 'components/Dropdown/Dropdown'
import RadioProtein from 'components/Radio/RadioProtein'
import RadioCarbs from 'components/Radio/RadioCarbs'
import DropdownSides from 'components/Dropdown/DropdownSides';
import InputField from 'components/InputField/InputField';

const Questions = (props) => {
  const [question, setQuestion] = useState(1);
  const nextQuestion = () => {
    setQuestion(question + 1);
  };
  const previousQuestion = () => {
    setQuestion(question - 1);
  };

  return (
    <div className="main-container">
      {question === 1 && (
        <div className={Questions}>
          <h1>Question 1</h1>
          <h2>On a scale from 1 to 10, how hungry are you currently?</h2>
          <Dropdown />
          <button type="button" onClick={nextQuestion}>
            Next
          </button>
        </div>
      )}
      {question === 2 && (
        <div className={Questions}>
          <h1>Question 2</h1>
          <h2>Which protein are you feeling like today?</h2>
          <RadioProtein />
          <button type="button" onClick={nextQuestion}>
          Next
          </button>
          <button type="button" onClick={previousQuestion}>
          Back
          </button>
        </div>
      )}
      {question === 3 && (
        <div className={Questions}>
          <h1>Question 3</h1>
          <h2>How about carbs?</h2>
          <RadioCarbs />
          <button type="button" onClick={nextQuestion}>
            Next
          </button>
          <button type="button" onClick={previousQuestion}>
            Back
          </button>
        </div>
      )}
      {question === 4 && (
        <div className={Questions}>
          <h1>Question 4</h1>
          <h2>Any sides perhaps?</h2>
          <DropdownSides />
          <h3>If there is anything you would like to add, please do so here:</h3>
          <InputField />
          <button type="button" onClick={props.nextPage}>
            Next
          </button>
          <button type="button" onClick={previousQuestion}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Questions;