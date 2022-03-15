import React, { useState } from 'react';

import NextButton from '../partials/NextButton';
import SubHeader from '../partials/SubHeader';

const allLocations = [
  '-- choose a location --',
  'fully in office', 
  'mostly in office', 
  'hybrid', 
  'mostly remote', 
  'fully remote'
];

const headerText = 'How would you prefer to work?';

const PreferredHoursInput = ({ changePage, retrieveLocationData }) => {
  const [location, setLocation] = useState();

  return (
    <section className='page'>
      <SubHeader pageNumber={3} headerText={headerText} />
      <form>
        <label htmlFor='locationsOptions' aria-label='choose a location'>
          <select
            onChange={event => setLocation(event.target.value)}
            value={location}
            id='locationsOptions'
          >
          {allLocations.map(locations => (
            locations === '-- choose a location -- '
              ? <option value=''>{locations}</option>
              : <option value={locations}>{locations}</option>
          ))}
          </select>
        </label>
      </form>
      <NextButton 
        changePage={changePage} 
        retrieveData={retrieveLocationData} 
        state={location} 
      />
    </section>
  )
};

export default PreferredHoursInput;
