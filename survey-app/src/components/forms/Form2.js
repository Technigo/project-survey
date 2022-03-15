import React, { useState } from 'react';

import NextButton from '../partials/NextButton';
import SubHeader from '../partials/SubHeader';

const preferences = ['yes', 'no'];
const headerText = 'Would you prefer a company that offers flexible work hours?';

const WorkHoursInput = ({ changePage, retrieveHoursData }) => {
  const [hours, setHours] = useState();

  return (
    <section className='page'>
      <SubHeader pageNumber={2} headerText={headerText} />
      <form>
        {preferences.map(preference => (
          <p>
            <label key={preference} htmlFor={`${preference}-input`}>
              <input
                type='radio'
                value={preference}
                id={`${preference}-input`}
                onChange={event => setHours(event.target.value)}
                checked={preference === hours}
              />
              {preference}
            </label>
          </p>
        ))}
      </form>
      <NextButton 
        changePage={changePage} 
        retrieveData={retrieveHoursData} 
        state={hours} 
      />
    </section>
  )
};

export default WorkHoursInput;
