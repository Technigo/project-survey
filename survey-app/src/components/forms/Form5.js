import React, { useState } from 'react';
import { AlertContainer } from 'react-custom-alert';

import Buttons from '../partials/Buttons';
import SubHeader from '../partials/SubHeader';
import Numbers from '../partials/Numbers';

import '../../styled-components/Slider.css';

const headerText = 'If you had the opportunity to work in a flexible';
const headerText2 = 'work environment, would you feel less stressed?';

const StressRange = ({ nextPage, backPage, retrieveStressData }) => {
  const [stress, setStress] = useState();

  return (
    <section className='page'>
      <SubHeader
        pageNumber={5}
        headerText={headerText}
        headerText2={headerText2} />
      <p>
        0 = no change
        <span className='text-right'>5 = less stressed</span>
      </p>
      <form>
        <label htmlFor='stressRange'>
          <input
            className='slider'
            type='range'
            id='stressRange'
            min='0'
            max='5'
            defaultValue='0'
            onChange={(event) => setStress(event.target.value)} />
          <Numbers />
        </label>
      </form>
      <AlertContainer floatingTime={2000} />
      <Buttons
        nextPage={nextPage}
        backPage={backPage}
        retrieveData={retrieveStressData}
        state={stress} />
    </section>
  )
};

export default StressRange;
