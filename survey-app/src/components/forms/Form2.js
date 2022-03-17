import React, { useState } from 'react';

import SubHeader from '../partials/SubHeader';
import Form from '../partials/RadioInput'

import '../../styled-components/Radio.css';

const preferences = ['Yes', 'No'];
const subHeaderData = {
  pageNumber: 2,
  title: 'Would you prefer a company that offers flexible work hours?'
}

const WorkHoursInput = ({ nextPage, backPage, retrieveHoursData }) => {
  const [hours, setHours] = useState();

  const radioData = {
    nextPage,
    backPage,
    state: hours,
    setState: setHours,
    retrieveData: retrieveHoursData,
    label: 'work hour', 
    allInputs: preferences
  }

  return (
    <section className='page'>
      <SubHeader subHeaderData={subHeaderData} />
      <Form radioData={radioData} />
    </section>
  )
};

export default WorkHoursInput;
