import React, { useState } from 'react';

import NextButton from '../partials/NextButton';
import SubHeader from '../partials/SubHeader';

const ageGroups = ['18-24', '25-34', '35-44', '45+'];
const headerText = 'How old are you?';

const AgeInput = ({ changePage, retrieveAgeData }) => {
  const [ageGroup, setAgeGroup] = useState();

  return (
    <section className='page'>
      <SubHeader pageNumber={1} headerText={headerText}/>
      <form className='age-inputs'>
        Age Groups:
        {ageGroups.map(group => (
          <label key={group} htmlFor={`${group}-input`}>
            <input 
              type='radio'
              value={group}
              id={`${group}-input`}
              onChange={event => setAgeGroup(event.target.value)}
              checked={ageGroup === group}
            />
          {group}
          </label>
        ))}
      </form>
     <NextButton 
      changePage={changePage} 
      retrieveData={retrieveAgeData} 
      state={ageGroup} 
    />
    </section>
  )
};

export default AgeInput;