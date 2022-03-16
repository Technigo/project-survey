import React, { useState } from 'react';

import RangeInput from 'components/partials/RangeInput';
import SubHeader from '../partials/SubHeader';

import '../../styled-components/Slider.css';

const headerText = 'If you had the opportunity to work in a flexible';
const headerText2 = 'work environment, would you be more productive?';

const ProductivityRange = ({ nextPage, backPage, retrieveProductivityData }) => {
  const [productivity, setProductivity] = useState();

  return (
    <section className='page'>
      <SubHeader
        pageNumber={4}
        headerText={headerText}
        headerText2={headerText2} />
      <p>0 = No change
        <span className='text-right'>5 = Very productive</span>
      </p>
      <RangeInput
        nextPage={nextPage}
        backPage={backPage}
        state={productivity}
        setState={setProductivity}
        forAndClassname='productivityRange'
        retrieveData={retrieveProductivityData} />
    </section>
  )
};

export default ProductivityRange;
