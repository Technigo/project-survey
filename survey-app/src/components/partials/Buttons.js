import React from 'react';
import { alert } from 'react-custom-alert';

const Button = ({ buttonData }) => {
  const alertWarning = () => alert({ message: 'Please select an option.', type: 'warning' });

  const { nextPage, backPage, innerText, retrieveData, state } = buttonData;

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
        : <button className='button' onClick={nextPage}>{innerText}</button>}
    </div>
  )
};

export default Button;
