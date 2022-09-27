import React, { useState}  from 'react';
import UserName from 'Components/UserName';



export const App = () => {
  const [counter, setCounter] = useState(1); //Counts questions
  const [userInput, setUserInput] = useState('') 
  const [userName, setUserName] = useState('') // 1 question UserName

  const handleCounterButtonClick = (shouldIncrease) => {
    if (shouldIncrease && counter < 4) {
    setCounter(counter+1)
  } else if(!shouldIncrease && counter > 0) {
    setCounter(counter-1)
  }
  }

  // const handleUserInputChange = (event) => {
  //   setUserInput(event.target.value)
  // }

  const handleClearButtonClick =() => {
    setUserInput('')
  }

  const handleUserNameInputChange = (event) => {
    setUserName(event.target.value)
  }

  return (
    <div>
      Question number {counter}
    <button type="button" onClick={() => handleCounterButtonClick(false)}>
    (Previous question) </button>
    <button type="button" onClick={() => handleCounterButtonClick(true)}>
    (Next Question) </button>

    {/* <input type="text" value={userInput} onChange={handleUserInputChange} /> */}
    
    {counter === 2 && (
    <UserName name={userName} setName={setUserName}/>
    )}
    
    <p> {userInput} </p>
    <p>
    <button type="button" value={userName} onChange={handleUserNameInputChange}> Continue </button>
    </p>


   { counter === 0 && (
   <div>
      <p> Hello, please type in your name</p>
      <input type="text" value={userName} onChange={handleUserNameInputChange} />
    </div> 
    )}

   { counter === 5 && (
   <div>
      <p> Summary </p>
      <p>Name: {userName}</p>
      <p>Input: {userInput}</p>
      <p>Current counter: {counter} </p>
    </div> 
    )}

    </div> 
  );
}


