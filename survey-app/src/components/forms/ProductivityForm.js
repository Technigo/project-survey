import React from 'react';

import RangeInput from '../partials/RangeInput';
import SubHeader from '../partials/SubHeader';

import '../../styled-components/Slider.css';

const subHeaderData = {
  page: 4,
  title: 'If you had the opportunity to work in a flexible',
  title2: 'work environment, would you be more productive?',
  level: 'Very productive'
};

const ProductivityRange = ({ productivityData }) => {
  const { nextPage, prevPage, retrieveProductivityData, productivity } = productivityData;

  const rangeData = {
    nextPage,
    prevPage,
    state: productivity,
    retrieveData: retrieveProductivityData,
    identifier: 'productivityRange'
  };

  return (
    <section className='page'>
      <SubHeader subHeaderData={subHeaderData} />
      <RangeInput rangeData={rangeData} />
    </section>
  );
};

export default ProductivityRange;