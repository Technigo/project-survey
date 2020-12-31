import React, { useState, useRef } from 'react';
import ReactTooltip from 'react-tooltip';

import { NameQuestion } from '../components/NameQuestion.js';
import { AgeQuestion } from '../components/AgeQuestion.js';
import { TypeQuestion } from '../components/TypeQuestion.js';
import { PriceQuestion } from '../components/PriceQuestion.js';
import { SpecialQuestion } from '../components/SpecialQuestion.js';
import { Summary } from './Summary';

export const Form = () => {
  /* handleSubmit is using the preventDefault method to stop the 
  page from reloading when the form is submitted when we click the button.
  It's also setting the setShowSummary to true which means that the form will
  be hidden and the summary will be show*/

  const errorMessage = useRef(null);

  const handleSubmit = event => {
    if(showFormQuestion === 4){
      event.preventDefault();
      setShowSummary(true); 
    } else if (showFormQuestion === 2) {
      if (type.length < 1) {
        ReactTooltip.show(errorMessage.current);
        console.log(errorMessage);
        event.preventDefault(); 
      } else {
        event.preventDefault();
        setShowFormQuestion(showFormQuestion +1);
      }
    } else {
      event.preventDefault();
      setShowFormQuestion(showFormQuestion +1);
    }
  };  

  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [type, setType] = useState([]);
  const [price, setPrice] = useState("");
  const [special, setSpecial] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [showFormQuestion, setShowFormQuestion] = useState(0);

  return (
      /* Using ternary operators below to show and hide the form and summary and the different buttons - if (?) else (:) */
      /* Created the showFormQuestion state hook above so it can be used for the form components to be shown in a specific order when the button is clicked. Each of the comparison statements below compares if showFormQuestion is equals to that number then the specific form component should be shown. The showFormQuestion is incremented by 1 in the button below by way of the setShowFormQuestion function which allows for each of the form components to be shown depending on the number that showFormQuestion is storing. */
      <>
        {!showSummary ? (
          <section>
            <form onSubmit={handleSubmit} className="form-container"  >
              {showFormQuestion === 0 && (
                <NameQuestion name={name} setName={setName} />
              )}                
              {showFormQuestion === 1 && (
                <AgeQuestion age={age} setAge={setAge} showFormQuestion={showFormQuestion}/>
              )}
              {showFormQuestion === 2 && (
                <TypeQuestion type={type} setType={setType} errorMessage={errorMessage} />
              )}
              {showFormQuestion === 3 && (
                <PriceQuestion price={price} setPrice={setPrice} />
              )}
              {showFormQuestion === 4 && (
                <SpecialQuestion special={special} setSpecial={setSpecial} />
              )}

              {/* If else statement which compares if the showFormQuestion is equals to 4 then the submit button will be show. Otherwise the next button will be shown */}
              {showFormQuestion === 4 ? (
                <> 
                <button 
                  type="submit" 
                  className="button yes-button" 
                  aria-label="Press enter to submit the survey and see your answers.">
                    SUBMIT SURVEY
                </button>
                </>
              ) : (                
                <button 
                  type="submit" 
                  className="button yes-button" 
                  aria-label="Press enter to go to the next question" 
                  required
                  // onClick={event => setShowFormQuestion(showFormQuestion +1)}
                  >
                    NEXT QUESTION
                </button>
              )}               
            </form>
          </section>
        ) : ( 
          <section>
            <Summary name={name} age={age} type={type} price={price} special={special} />
          </section>       
        )}        
     </>    
    );
};