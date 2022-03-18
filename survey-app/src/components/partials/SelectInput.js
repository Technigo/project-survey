import React from 'react';
import { AlertContainer } from 'react-custom-alert';

import Buttons from './Buttons';

const SelectInput = ({ selectData }) => {
  const { nextPage, backPage, state, retrieveData, allInputs } = selectData;
  const buttonData = { nextPage, backPage, state };

  return (
    <>
      <form>
        <label htmlFor='locationsOptions' aria-label='choose a location'>
          <div className='select-container'>
          <select
            onChange={retrieveData}
            value={state}
            id='locationsOptions'>
            {allInputs.map((locations) => (
              (locations === '-- choose a location --')
                ? <option disabled key={locations} value=''>{locations}</option>
                : <option key={locations} value={locations}>{locations}</option>
            ))}
          </select>
          </div>
        </label>
      </form>
      <AlertContainer floatingTime={2000} />
      <Buttons buttonData={buttonData} />
    </>
  )
}

export default SelectInput;