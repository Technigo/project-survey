import React from 'react';
import { alert } from 'react-custom-alert';

const Button = ({ nextPage, backPage, innerText, retrieveData, state }) => {
  const alertWarning = () => alert({ message: 'Please select an option.', type: 'warning' });

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
            aria-disabled='true'
            onClick={() => {
              (!state)
                ? alertWarning()
                : nextPage(); retrieveData(state)
            }}>
            Next &nbsp;<span className='arrow'>{'>'}</span>
          </button>
        </>
        : <>
            <button className='button' onClick={nextPage}>{innerText}</button>
            <p className='button-text'>press <span>Enter</span> ↵</p>
          </>}
    </div>
  )
};

export default Button;
