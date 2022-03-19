import React from 'react';

import SubHeader from '../partials/SubHeader';
import Form from '../partials/RadioInput'

import '../../styled-components/Radio.css';

const preferences = ['Yes', 'No'];
const subHeaderData = { page: 2, title: 'Would you prefer a company that offers flexible work hours?' };

const WorkHoursInput = ({ hoursData }) => {
  const { nextPage, prevPage, retrieveHoursData, hours } = hoursData;

  const radioData = {
    nextPage,
    prevPage,
    state: hours,
    retrieveData: retrieveHoursData,
    label: 'work hour',
    allInputs: preferences
  };

  return (
    <section className='page'>
      <SubHeader subHeaderData={subHeaderData} />
      <Form radioData={radioData} />
    </section>
  );
};

export default WorkHoursInput;
