import React, { useState } from 'react';

import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Submit from './Submit';
import Summary from './Summary';

const Form = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [formData, setFormData] = useState({name: '', sushi: '', ingredient: ''});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSummary(true);
  };

  const handleInputChange = (name, value) => {
    const newFormData = { ...formData };            //create a variable, newFormData, containing a copy of the object formData using spread syntax
    newFormData[name] = value;                      //assigns newFormData the property (incl. the value) of the components respectively 
    setFormData(newFormData);                       //invoke the setFormData function which changes the state of formData (changes the value), 
                                                      //which React will listen to and render (in the summary in my solution)
    // setFormData({ ...formData, [name]: value });     does the same as the above, but this is a shorthand
  };

  return (
    <>
      {!showSummary ? (
        <form onSubmit={handleSubmit}>
          <Question1 name={formData.name} callbackOnChange={handleInputChange} />
          <Question2 sushi={formData.sushi} callbackOnChange={handleInputChange} />
          <Question3 ingredient={formData.ingredient} callbackOnChange={handleInputChange} />
          <Submit />
        </form>
      ) : (
          <Summary formData={formData}/>
        )}
    </>
  );
};

export default Form;