import React from 'react';

import SubHeader from '../partials/SubHeader';
import Form from '../partials/RadioInput'

const ageGroups = ['18-24', '25-34', '35-44', '45+'];
const subHeaderData = {
  page: 1,
  title: 'How old are you?'
}

const AgeInput = ({ ageData  }) => {
  const { nextPage, backPage, retrieveAgeData, age } = ageData;

  const radioData = {
    nextPage,
    backPage,
    state: age,
    retrieveData: retrieveAgeData,
    label: 'age',
    allInputs: ageGroups
  }

  return (
    <section className='age-input page'>
      <SubHeader subHeaderData={subHeaderData} />
      <Form radioData={radioData} />
    </section>
  )
};

export default AgeInput;