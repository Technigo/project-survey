import React, { useState } from 'react';
import { AlertContainer } from 'react-custom-alert';

import Buttons from '../partials/Buttons';
import SubHeader from '../partials/SubHeader';

import '../../styled-components/Radio.css';

const preferences = ['yes', 'no'];
const headerText = 'Would you prefer a company that offers flexible work hours?';

const WorkHoursInput = ({ nextPage, backPage, retrieveHoursData }) => {
  const [hours, setHours] = useState();

  return (
    <section className='page'>
      <SubHeader pageNumber={2} headerText={headerText} />
      <form>
        {preferences.map((preference) => (
          <p key={preference}>
            <label
              htmlFor={`${preference}-input`}
              className='container'>
              <input
                type='radio'
                value={preference}
                id={`${preference}-input`}
                onChange={(event) => setHours(event.target.value)}
                checked={preference === hours} />
              <span className='dot' />
              {preference}
            </label>
          </p>
        ))}
      </form>
      <AlertContainer floatingTime={2000} />
      <Buttons
        nextPage={nextPage}
        backPage={backPage}
        retrieveData={retrieveHoursData}
        state={hours} />
    </section>
  )
};

export default WorkHoursInput;
