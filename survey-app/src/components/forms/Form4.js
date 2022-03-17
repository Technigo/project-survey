import React, { useState } from 'react';

import RangeInput from 'components/partials/RangeInput';
import SubHeader from '../partials/SubHeader';

import '../../styled-components/Slider.css';

const subHeaderData = {
  page: 4,
  title: 'If you had the opportunity to work in a flexible',
  title2: 'work environment, would you be more productive?',
  level: 'Very productive'
}

const ProductivityRange = ({ changePage, retrieveProductivityData }) => {
  const [productivity, setProductivity] = useState();
  const { nextPage, backPage } = changePage;

  const rangeData = {
    nextPage,
    backPage,
    state: productivity,
    setState: setProductivity,
    retrieveData: retrieveProductivityData,
    identifier: 'productivityRange'
  }

  return (
    <section className='page'>
      <SubHeader subHeaderData={subHeaderData} />
      <RangeInput rangeData={rangeData} />
    </section>
  )
};

export default ProductivityRange;
