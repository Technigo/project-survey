import React from 'react';

import Question1 from './Question1.js';
import Question2 from './Question2.js';
import Submit from './Submit.js';




const QuestionContainer = () => {
    
    return (
      <div className="question-container container">
          <form onSubmit={(event) => event.preventDefault()}>
            A container with all of the questions
            {/* props vilken fråga array mapa igenom? */}
            <Question1  />
            <Question2 />
            <Submit />
          </form>
      </div>
    );
  };
  
  export default QuestionContainer;