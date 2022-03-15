import React, { useState } from 'react';

import NextButton from '../partials/NextButton';
import SubHeader from '../partials/SubHeader';

const headerText = 'If you had the opportunity to work in a flexible';
const headerText2 = 'work environment, would you be more productive?';

const ProductivityRange = ({ changePage, retrieveProductivityData }) => {
  const [productivity, setProductivity] = useState();

  return (
    <section className='page'>
      <SubHeader 
        pageNumber={4} 
        headerText={headerText} 
        headerText2={headerText2}
      />  
      <p>0 = no change
        <span className='text-right'>5 = very productive</span>
      </p>
      <form>
        <label htmlFor='productivityRange'>
          <input
            type='range'
            id='productivityRange'
            min='0'
            max='5'
            defaultValue='0'
            onChange={(event) => setProductivity(event.target.value)}
          />
          <p className='numbers'>
            <span>0</span>
            <span className='numbers-right'>5</span>
          </p>
        </label>
      </form>
      <NextButton 
        changePage={changePage} 
        retrieveData={retrieveProductivityData} 
        state={productivity} 
      />
    </section>
  )
};

export default ProductivityRange;
