import React, { useState } from 'react';
import { AlertContainer } from 'react-custom-alert';

import Buttons from '../partials/Buttons';
import SubHeader from '../partials/SubHeader';
import Numbers from '../partials/Numbers';

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
      <form>
        <label htmlFor='productivityRange'>
          <input
            className='slider'
            type='range'
            id='productivityRange'
            min='0'
            max='5'
            defaultValue='0'
            onChange={(event) => setProductivity(event.target.value)} />
          <Numbers />
        </label>
      </form>
      <AlertContainer floatingTime={2000} />
      <Buttons
        nextPage={nextPage}
        backPage={backPage}
        retrieveData={retrieveProductivityData}
        state={productivity} />
    </section>
  )
};

export default ProductivityRange;
