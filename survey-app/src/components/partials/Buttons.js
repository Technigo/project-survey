import React from 'react';

const Button = ({ changePage, innerText, retrieveData, state }) => {
  return (
    <div className='button-wrapper'>
      {(!innerText)
        ? <button
          className='button'
          disabled={!state}
          onClick={() => {
            changePage(); retrieveData(state)
          }}>Next
        </button>
        : <button className='button' onClick={changePage}>{innerText}</button>}
      <p className='button-text'>press <span>Enter</span> ↵</p>
    </div>
  )
};

export default Button;
