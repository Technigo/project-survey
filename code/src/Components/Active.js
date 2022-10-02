import React from 'react';

const Active= ({active, setActive, handlePreviousQuestionClick, handleNextQuestionClick, counter}) => {
    
  const handleActiveChange = (event) => {
    setActive(event.target.value)
  }
      
  return (    
  <>
    <div className="questionWrapper">
      <p> How active do you want to be?</p>
    </div>

    <div className="inputWrapper">    
    <form>
      <select 
      className='select'
      onChange={event => setActive(event.target.value)}
      value={active}
      >
        <option value="">Select option</option>
        <option value="go hiking.">Very Active</option>
        <option value="go sightseeing.">Little Active</option>
        <option value="just be lazy doing nothing.">I don't want to move att all</option>
        </select>
        </form>
    </div>

    <div className='buttonWrapper'>
      <button type="button" onClick={handlePreviousQuestionClick}> ◀︎ Back </button>
      <button type="button" onClick={handleNextQuestionClick}> Next ▶︎</button>
    </div>

    <div className='questionNumber'>
    <p> {counter} /4 </p>
    </div>
  </>
  );
}

export default Active;