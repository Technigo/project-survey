import React from 'react';

import SubHeader from '../partials/SubHeader';
import SelectInput from '../partials/SelectInput';

const subHeaderData = { page: 3, title: 'How would you prefer to work?' }

const allLocations = [
  '-- choose a location --',
  'Fully in office',
  'Mostly in office',
  'Hybrid',
  'Mostly remote',
  'Fully remote'
];

const PreferredHoursInput = ({ locationData  }) => {
  const { nextPage, backPage, retrieveLocationData, location } = locationData;

  const selectData = {
    nextPage,
    backPage,
    state: location,
    retrieveData: retrieveLocationData,
    allInputs: allLocations
  }

  return (
    <section className='page'>
      <SubHeader subHeaderData={subHeaderData} />
      <SelectInput selectData={selectData} />
    </section>
  )
};

export default PreferredHoursInput;
