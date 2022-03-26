import React from 'react';

import SubHeader from '../partials/SubHeader';
import RadioInput from '../partials/RadioInput'

const ageGroups = ['18-24', '25-34', '35-44', '45+'];
const subHeaderData = {
  page: 1,
  title: 'How old are you?'
};

const AgeInput = ({ ageData }) => {
  const { nextPage, prevPage, retrieveAgeData, age } = ageData;

  const radioData = {
    nextPage,
    prevPage,
    state: age,
    retrieveData: retrieveAgeData,
    label: 'age',
    allInputs: ageGroups
  };

  return (
    <section className='page'>
      <SubHeader subHeaderData={subHeaderData} />
      <RadioInput radioData={radioData} />
    </section>
  );
};

export default AgeInput;