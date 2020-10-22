import React, {useState} from 'react'
import { Summary } from './Summary'
import { Age } from './Form components/Age.js'
import { Type } from './Form components/Type.js'
import { Price } from './Form components/Price.js'

export const Form = () => {
  /* handleSubmit is using the preventDefault method to stop the 
  page from reloading when the form is submitted when we click the button.
  It's also setting the setShowSummary to true which means that the form will
  be hidden and the summary will be show*/
  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };

  const [age, setAge] = useState();
  const [type, setType] = useState([]);
  const [price, setPrice] = useState();
  const [special, setSpecial] = useState();
  const [showSummary, setShowSummary] = useState(false);

    return (
      /* Using ternary operators below to show and hide the form and summary - if (?) else (:) */
      <>
        {!showSummary ? (
          <div> 
            <form onSubmit={handleSubmit}>
              <Age age={age} setage={setAge}/>
              <Type type={type} setType={setType} />
              <Price price={price} setPrice={setPrice} />

              <button type="submit">SUBMIT</button> 
            </form>
          </div>
        ) : (        
          <Summary age={age} type={type} price={price} />
        )}        
     </>    
    );
};