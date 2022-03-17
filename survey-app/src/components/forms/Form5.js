import React from 'react';

import SubHeader from '../partials/SubHeader';
import RangeInput from '../partials/RangeInput';

import '../../styled-components/Slider.css';

const subHeaderData = {
  page: 5,
  title: 'If you had the opportunity to work in a flexible',
  title2: 'work environment, would you feel less stressed?',
  level: 'Less stressed'
};

const StressRange = ({ stressData }) => {
  const { nextPage, backPage, retrieveStressData, stress } = stressData;

  const rangeData = {
    nextPage,
    backPage,
    state: stress,
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
