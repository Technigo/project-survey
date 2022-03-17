import React, { useState } from 'react';

import SubHeader from '../partials/SubHeader';
import Form from '../partials/RadioInput'

const ageGroups = ['18-24', '25-34', '35-44', '45+'];
const subHeaderData = {
  page: 1,
  title: 'How old are you?'
}

const AgeInput = ({ nextPage, backPage, retrieveAgeData }) => {
  const [ageGroup, setAgeGroup] = useState();

  const radioData = {
    nextPage: nextPage,
    backPage: backPage,
    state: ageGroup,
    setState: setAgeGroup,
    retrieveData: retrieveAgeData,
    label: 'age',
    radioGroups: ageGroups
  }

  return (
    <section className='age-input page'>
      <SubHeader subHeaderData={subHeaderData} />
      <Form radioData={radioData} />
    </section>
  )
};

export default AgeInput;
