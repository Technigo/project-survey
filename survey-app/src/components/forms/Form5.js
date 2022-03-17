import React, { useState } from 'react';

import SubHeader from '../partials/SubHeader';

import '../../styled-components/Slider.css';
import RangeInput from '../partials/RangeInput';

const subHeaderData = {
  page: 5,
  title: 'If you had the opportunity to work in a flexible',
  title2: 'work environment, would you feel less stressed?',
  level: 'Less stressed'
};

const StressRange = ({ nextPage, backPage, retrieveStressData }) => {
  const [stress, setStress] = useState();

  const rangeData = {
    nextPage,
    backPage,
    state: stress,
    setState: setStress,
    retrieveData: retrieveStressData,
    identifier: 'stressRange'
  };

  return (
    <section className='page'>
      <SubHeader subHeaderData={subHeaderData} />
      <RangeInput rangeData={rangeData} />
    </section>
  );
};

export default StressRange;
