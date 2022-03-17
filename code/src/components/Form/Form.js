import React, { useState } from 'react';

import Question1 from '../Question1/Question1';
import Question2 from '../Question2/Question2';
import Question3 from '../Question3/Question3';
import Summary from '../Summary/Summary';

import './Form.css';

const Form = () => {
    const [username, setUsername] = useState('');

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    }

    return (
        <form className='form' onSubmit={(event) => event.preventDefault()}> 
          <h1>This is the form component speaking</h1>
          <hr />
          <Question1 username={username} onInputChange={handleInputChange} />
          <Question2 username={username}/>
          <Question3 />
          <Summary username={username} />
        </form> 
    )
  }
  
export default Form;