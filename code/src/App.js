import React from 'react'
import { Form } from './Form.js'
import { Summary } from './Summary.js'

export const App = () => {

  // const handleSubmit = () => {
  //   preventDefault()
  // }

  return (
    <main>
      <div>
        <h1>CRAFT BEER SURVEY</h1>
        <p>Thanks for taking the time to take our craft been survey</p>
      </div>
      <div>        
          <Form />
      </div>
      <button type="submit">SUBMIT</button> 
      <div>
        <Summary />      
      </div>     
    </main>
  );
};
