import React from 'react';
import { AlertContainer } from 'react-custom-alert';

import Buttons from './Buttons';
import Numbers from './Numbers';

const RangeInput = ({ rangeData }) => {
  const { nextPage, prevPage, state, retrieveData, identifier } = rangeData;
  const buttonData = { nextPage, prevPage, state };

  return (
    <>
      <form>
        <label htmlFor={identifier}>
          <input
            className='slider'
            type='range'
            id={identifier}
            min='0'
            max='5'
            defaultValue='0'
            onChange={retrieveData} />
          <Numbers />
        </label>
      </form>
      <AlertContainer floatingTime={2000} />
      <Buttons buttonData={buttonData} />
    </>
  );
};

export default RangeInput;