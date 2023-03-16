/* eslint-disable*/
import React from 'react';
import { SurveyWraper } from 'components/SurveyWraper';


export const App = () => {
  return (
    <>
      <section className="logoImage">
        
         <img src="./logoImg.webp" alt=""/>
        
      </section>
      <section className='surveyWrap'>
        <div className='surveryWrap'>
          <SurveyWraper />
        </div>
      </section>
  </>
  );
}