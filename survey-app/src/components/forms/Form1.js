import React, { useState } from 'react';

import SubHeader from '../partials/SubHeader';
import Form from '../partials/RadioInput'

const radioGroups = ['18-24', '25-34', '35-44', '45+'];
const headerText = 'How old are you?';

const AgeInput = ({ nextPage, backPage, retrieveAgeData }) => {
  const [ageGroup, setAgeGroup] = useState();

  return (
    <section className='age-input page'>
      <SubHeader pageNumber={1} headerText={headerText} />
      <Form
        nextPage={nextPage}
        backPage={backPage}
        label='age'
        state={ageGroup}
        setState={setAgeGroup}
        radioGroups={radioGroups}
        retrieveData={retrieveAgeData} />
    </section>
  )
};

export default AgeInput;
