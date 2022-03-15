import React, { useState } from 'react';

import NextButton from '../partials/NextButton';
import SubHeader from '../partials/SubHeader';

const headerText = 'If you had the opportunity to work in a flexible';
const headerText2 = 'work environment, would you feel less stressed?';

const StressRange = ({ changePage, retrieveStressData }) => {
  const [stress, setStress] = useState();

  return (
    <section className='page'>
      <SubHeader 
        pageNumber={5} 
        headerText={headerText} 
        headerText2={headerText2} 
      />  
      <p>0 = no change
        <span className='text-right'>5 = less stressed</span>
      </p>
      <form>
        <label htmlFor='stressRange'>
          <input
            type='range'
            id='stressRange'
            min='0'
            max='5'
            defaultValue='0'
            onChange={event => setStress(event.target.value)}
          />
          <p className='numbers'>
            <span>0</span>
            <span className='numbers-right'>5</span>
          </p>
        </label>
      </form>
      <NextButton 
        changePage={changePage} 
        retrieveData={retrieveStressData} 
        state={stress} 
      />
    </section>
  )
};

export default StressRange;
