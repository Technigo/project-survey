import SubmitButton from 'components/SubmitButton/SubmitButton';
import React, { useState } from 'react';

import Question1 from '../Question1/Question1';
import Question2 from '../Question2/Question2';
import Question3 from '../Question3/Question3';
import Summary from '../Summary/Summary';
import ResetButton from '../ResetButton/ResetButton';

import './Form.css';

const Form = () => {
    const [username, setUsername] = useState('');
    const [lostItem, setLostItem] = useState('');
    const [lastTime, setLastTime] = useState('today');    
    const [showSummary, setShowSummary] = useState(false);

    const handleButtonClick = () => setShowSummary(true);
    const handleResetButtonClick = () => {
        // Add code 
    }

    const formContent = (
        <>
          <h1>Hello!</h1>
          <p>In order to help you we would kindly ask you to answer a few questions.</p>
          <Question1 username={username} setUsername={setUsername} />
          <Question2 username={username} lostItem={lostItem} setLostItem={setLostItem} />
          <Question3 username={username} lastTime={lastTime} setLastTime={setLastTime} />
          <br />
          <SubmitButton handleButtonClick={handleButtonClick} />
        </>
    )

    return (
        <form className='form' onSubmit={(event) => event.preventDefault()}> 
          {!showSummary && formContent} 
          {showSummary && (
              <>
                <Summary 
                username={username} 
                lostItem={lostItem} 
                lastTime={lastTime} />
                <ResetButton 
                  onButtonClick={handleResetButtonClick}/>
              </>
          )}
            
        </form> 
    )
  }
  
export default Form;