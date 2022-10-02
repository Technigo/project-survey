import React from 'react';


const UserName= ({userName, setUserName, handleNextQuestionClick, counter}) => {

  const handleUserNameChange = (event) => {
    setUserName(event.target.value)
    }

  return (
  <>
    <div className="questionWrapper">
      <p> Whats your name? </p>
    </div>

      <div className="inputWrapper">
        <input
          type="text"
          placeholder='Type your name here'
          value={userName} 
          onChange={handleUserNameChange}
        />
      </div>

    <div className='buttonWrapper'>
      <button type="button" onClick={handleNextQuestionClick}> Next ▶︎</button>
    </div>

    <div className='questionNumber'>
      <p>Question number {counter} /5 </p>
    </div>
  </>
  );
}

export default UserName;