import React, { useState } from 'react';

import SubHeader from '../partials/SubHeader';

import '../../styled-components/Slider.css';
import RangeInput from '../partials/RangeInput';

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
        0 = No change
        <span className='text-right'>5 = Less stressed</span>
      </p>
      <RangeInput
        nextPage={nextPage}
        backPage={backPage}
        retrieveData={retrieveStressData}
        state={stress}
        setState={setStress}
        forAndClassname='stressRange' />
    </section>
  )
};

export default StressRange;
