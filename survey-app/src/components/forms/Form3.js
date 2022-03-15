import React, { useState } from 'react';

import Buttons from '../partials/Buttons';
import SubHeader from '../partials/SubHeader';

const allLocations = [
  '-- choose a location --',
  'Fully in office', 
  'Mostly in office', 
  'Hybrid', 
  'Mostly remote', 
  'Fully remote'
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
      <Buttons
        changePage={changePage} 
        retrieveData={retrieveLocationData} 
        state={location} 
      />
    </section>
  )
};

export default PreferredHoursInput;
