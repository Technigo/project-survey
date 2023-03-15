/* eslint-disable*/
import React from 'react';
import { SurveyWraper } from 'components/SurveyWraper';


export const App = () => {
  return (
    <>
      <section className="logoImage">
        <div className="imgBox">
         <img src="./logoImg.webp" alt=""/>
        </div>
      </section>
      <section className='surveyWrap'>
        <div className='surveryWrap'>
          <SurveyWraper />
        </div>
      </section>
  </>
  );
}