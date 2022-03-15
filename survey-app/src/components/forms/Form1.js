import React, { useState } from 'react';

import Buttons from '../partials/Buttons';
import SubHeader from '../partials/SubHeader';

import '../../styled-components/Radio.css';

const ageGroups = ['18-24', '25-34', '35-44', '45+'];
const headerText = 'How old are you?';

const AgeInput = ({ changePage, retrieveAgeData }) => {
  const [ageGroup, setAgeGroup] = useState();

  return (
    <section className='page'>
      <SubHeader pageNumber={1} headerText={headerText} />
      <form className='age-inputs'>
        {ageGroups.map(group => (
          <label 
            key={group} 
            htmlFor={`${group}-input`} 
            className='container'
            aria-label='age groups'>
            <input 
              type='radio'
              value={group}
              id={`${group}-input`}
              onChange={event => setAgeGroup(event.target.value)}
              checked={ageGroup === group}
            />
            <span className='dot'></span>
          {group}
          </label>
        ))}
      </form>
     <Buttons 
      changePage={changePage} 
      retrieveData={retrieveAgeData} 
      state={ageGroup} 
    />
    </section>
  )
};

export default AgeInput;