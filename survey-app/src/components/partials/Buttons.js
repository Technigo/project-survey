import React from 'react';

const Button = ({ nextPage, backPage, innerText, retrieveData, state }) => {
  return (
    <div className='button-wrapper'>
      {(!innerText)
        ? <>
        <button
          className='back-button'
          onClick={() => {
            backPage(); 
            }}><span className='arrow'>{'<'}&nbsp;</span>Back
        </button>
        <button
          className='button'
          disabled={!state}
          onClick={() => {
            nextPage(); retrieveData(state)
            }}>Next &nbsp;<span className='arrow'>{'>'}</span>
        </button>
        </>
        : <>
          <button className='button' onClick={nextPage}>{innerText}</button>
          <p className='button-text'>press <span>Enter</span> ↵</p>
        </>
        }
    </div>
  )
};

export default Button;
