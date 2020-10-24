import React, {useState} from 'react'
import { Name } from './Form components/Name.js'
import { Age } from './Form components/Age.js'
import { Type } from './Form components/Type.js'
import { Price } from './Form components/Price.js'
import { Special } from './Form components/Special.js'
import { Summary } from './Summary'

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
      /* Using ternary operators below to show and hide the form and summary - if (?) else (:) */
      <>
        {!showSummary ? (
          <>
            <form onSubmit={handleSubmit}>
              {showFormQuestion === 0 && (
                <Name name={name} setName={setName} />
              )}                
              {showFormQuestion === 1 && (
                <Age age={age} setAge={setAge}/>
              )}
              {showFormQuestion === 2 && (
                <Type type={type} setType={setType} />
              )}
              {showFormQuestion === 3 && (
                <Price price={price} setPrice={setPrice} />
              )}
              {showFormQuestion === 4 && (
                <Special special={special} setSpecial={setSpecial} />
              )}

              {showFormQuestion === 4 ? (
                <> 
                  <p>Submit your answers!</p>               
                  <button type="submit">SUBMIT</button>
                </>
              ) : (
                <button type="button" className="form-button" onClick={event => setShowFormQuestion(showFormQuestion +1)}>Next</button>
              )}               
            </form>
          </>
        ) : ( 
          <section>
            <Summary name={name} age={age} type={type} price={price} special={special} />
          </section>       
        )}        
     </>    
    );
};