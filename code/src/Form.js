import React, {useState} from 'react'
import { Summary } from './Summary'
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

  /*includes() checks if an array contains a certain element
    filter() creates an array filled with all elements that pass a test implemented by the function
    ... spread operator - Allows for array elements to be made individual and spead out in the array.
    ? if : else

    Function onTypeChange checks if type variable contains whatever is in the kinds argument which is defined in the Type.js.
    if true -> then setType function will create an array in the type variable and not include those that are in the typeValue function
    else -> then setType will spread out all array elements in the type variable and add whatever values that are in the typeValue into the type array. 
  */
  const onTypeChange = kinds => {
    type.includes(kinds)
    ? setType ( type.filter(item => item !== kinds) ) 
    : setType( [...type, kinds] );
  };

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
              <Age age={age} setAge={setAge}/>
              <Type type={type} setType={setType} onTypeChange={onTypeChange} />
              <Price price={price} setPrice={setPrice} />
              <Special special={special} setSpecial={setSpecial} />

              <button type="submit">SUBMIT</button> 
            </form>
          </>
        ) : ( 
          <section>
            <Summary age={age} type={type} price={price} special={special}/>
          </section>       
        )}        
     </>    
    );
};