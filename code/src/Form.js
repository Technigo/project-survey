import React, {useState} from 'react'
import { Summary } from './Summary'
import { Name } from './Form components/Name.js'
import { Age } from './Form components/Age.js'
import { Type } from './Form components/Type.js'
import { Price } from './Form components/Price.js'
import { Special } from './Form components/Special.js'


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
  const [price, setPrice] = useState();
  const [special, setSpecial] = useState("");
  const [showSummary, setShowSummary] = useState(false);

    return (
      /* Using ternary operators below to show and hide the form and summary - if (?) else (:) */
      <>
        {!showSummary ? (
          <>
            <form onSubmit={handleSubmit}>
              <Name name={name} setName={setName} />
              <Age age={age} setAge={setAge}/>
              <Type type={type} setType={setType} />
              <Price price={price} setPrice={setPrice} />
              <Special special={special} setSpecial={setSpecial} />

              <button type="submit">SUBMIT</button> 
            </form>
          </>
        ) : ( 
          <section>
            <Summary age={age} type={type} price={price} special={special} name={name}/>
          </section>       
        )}        
     </>    
    );
};