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
  const [pageNumber, setPageNumber] = useState(0);

  console.log(pageNumber)

  const handleResetButtonClick = () => {
    setUsername('');
    setLostItem('');
    setLastTime('');
    setShowSummary(false);
    setPageNumber(0);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSummary(true);
  }

  

  const inputContent = (
    <>
      <br />
      <button
        className='submit-button'
        type="submit"
      >Show summary</button>
    </>
  )

  const summaryContent = (
    <>
      <Summary
        username={username}
        lostItem={lostItem}
        lastTime={lastTime} />
      <ResetButton
        onButtonClick={handleResetButtonClick} />
    </>
  )

  const whatToDisplay = (page) => {
    switch(page) {
      case 0:
        return <><h1>Hello!</h1><p>In order to help you we would kindly ask you to answer a few questions.</p></>
      case 1:
        return <Question1 username={username} setUsername={setUsername} />
      case 2:
        return <Question2 username={username} lostItem={lostItem} setLostItem={setLostItem} />
      case 3:
        return <Question3 username={username} lastTime={lastTime} setLastTime={setLastTime} />
      case 4: 
        return summaryContent
      default: 
        return <p>nej</p>
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      {whatToDisplay(pageNumber)}
      {pageNumber === 1 && inputContent}
      {showSummary && summaryContent}
    </form>
  )
}

export default Form;