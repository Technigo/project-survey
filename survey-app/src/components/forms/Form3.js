import SelectInput from 'components/partials/SelectInput';
import React, { useState } from 'react';

import SubHeader from '../partials/SubHeader';

const subHeaderData = {
  page: 3,
  title: 'How would you prefer to work?'
}

const allLocations = [
  '-- choose a location --',
  'Fully in office',
  'Mostly in office',
  'Hybrid',
  'Mostly remote',
  'Fully remote'
];

const PreferredHoursInput = ({ changePage, retrieveLocationData }) => {
  const [location, setLocation] = useState();
  const { nextPage, backPage } = changePage;

  const selectData = {
    nextPage,
    backPage,
    state: location,
    setState: setLocation,
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
