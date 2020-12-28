import React, {useState} from 'react';

import { Name } from './Form components/Name.js';
import { Age } from './Form components/Age.js';
import { Type } from './Form components/Type.js';
import { Price } from './Form components/Price.js';
import { Special } from './Form components/Special.js';
import { Summary } from './Summary';
import { Welcome } from './Welcome';


export const Form = () => {
  /* handleSubmit is using the preventDefault method to stop the 
  page from reloading when the form is submitted when we click the button.
  It's also setting the setShowSummary to true which means that the form will
  be hidden and the summary will be show*/
  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };  

  const [name, setName] = useState();
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
                <Name name={name} setName={setName} />
              )}                
              {showFormQuestion === 1 && (
                <Age age={age} setAge={setAge} />
              )}
              {showFormQuestion === 2 && (
                <Type type={type} setType={setType} tabIndex="0"/>
              )}
              {showFormQuestion === 3 && (
                <Price price={price} setPrice={setPrice} tabIndex="0"/>
              )}
              {showFormQuestion === 4 && (
                <Special special={special} setSpecial={setSpecial} tabIndex="0"/>
              )}

              {/* If else statement which compares if the showFormQuestion is equals to 4 then the submit button will be show. Otherwise the next button will be shown */}
              {showFormQuestion === 4 ? (
                <> 
                <button type="submit" className="button yes-button" aria-label="Press submit to end the survey">SUBMIT</button>
                </>
              ) : (
                
                <button type="button" className="button yes-button" aria-label="Press the button to go to the next question" onClick={event => setShowFormQuestion(showFormQuestion +1)}>NEXT</button>
              )}               
            </form>
          </section>
        ) : ( 
          <section>
            <Summary name={name} age={age} type={type} price={price} special={special} welcome={Welcome}/>
          </section>       
        )}        
     </>    
    );
};