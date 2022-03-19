import React from 'react';
import { AlertContainer } from 'react-custom-alert';

import Buttons from './Buttons';

const Form = ({ radioData }) => {
  const { nextPage, prevPage, state, retrieveData, allInputs, label } = radioData;
  const buttonData = { nextPage, prevPage, state };

  return (
    <>
      <form>
        {allInputs.map((group) => (
          <label
            key={group}
            htmlFor={`${group}-input`}
            className='container'
            aria-label={`${label} groups`}>
            <input
              type='radio'
              value={group}
              id={`${group}-input`}
              aria-checked='false'
              onChange={retrieveData}
              checked={state === group} />
            <span className='dot' />
            {group}
          </label>
        ))}
      </form>
      <AlertContainer floatingTime={2000} />
      <Buttons buttonData={buttonData} />
    </>
  );
};

export default Form;