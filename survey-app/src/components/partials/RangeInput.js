import React from 'react';
import { AlertContainer } from 'react-custom-alert';

import Buttons from './Buttons';
import Numbers from './Numbers';

const RangeInput = ({ nextPage, backPage, state, setState, forAndClassname, retrieveData }) => {
  return (
    <>
      <form>
        <label htmlFor={forAndClassname}>
          <input
            className='slider'
            type='range'
            id={forAndClassname}
            min='0'
            max='5'
            defaultValue='0'
            onChange={(event) => setState(event.target.value)} />
          <Numbers />
        </label>
      </form>
      <AlertContainer floatingTime={2000} />
      <Buttons
        nextPage={nextPage}
        backPage={backPage}
        retrieveData={retrieveData}
        state={state} />
    </>
  )
};

export default RangeInput;
