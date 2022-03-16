import React, { useState } from 'react';

import SubHeader from '../partials/SubHeader';
import Form from '../partials/RadioInput'

import '../../styled-components/Radio.css';

const preferences = ['Yes', 'No'];
const headerText = 'Would you prefer a company that offers flexible work hours?';

const WorkHoursInput = ({ nextPage, backPage, retrieveHoursData }) => {
  const [hours, setHours] = useState();

  return (
    <section className='page'>
      <SubHeader pageNumber={2} headerText={headerText} />
      <Form
        nextPage={nextPage}
        backPage={backPage}
        label='work hour'
        state={hours}
        setState={setHours}
        radioGroups={preferences}
        retrieveData={retrieveHoursData} />
    </section>
  )
};

export default WorkHoursInput;
