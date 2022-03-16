import React from 'react';
import { AlertContainer } from 'react-custom-alert';

import Buttons from './Buttons';

const Form = ({ nextPage, backPage, label, radioGroups, state, setState, retrieveData }) => {
  return (
    <>
      <form>
        {radioGroups.map((group) => (
          <label
            key={group}
            htmlFor={`${group}-input`}
            className='container'
            aria-label={`${label} groups`}>
            <input
              type='radio'
              value={group}
              id={`${group}-input`}
              onChange={(event) => setState(event.target.value)}
              checked={state === group} />
            <span className='dot' />
            {group}
          </label>
        ))}
      </form>
      <AlertContainer floatingTime={2000} />
      <Buttons
        nextPage={nextPage}
        backPage={backPage}
        retrieveData={retrieveData}
        state={state} />
    </>
  )
}

export default Form;
