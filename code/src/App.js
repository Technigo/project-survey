/* eslint-disable*/
import React from 'react';
import { SurveyWraper } from 'components/SurveyWraper';


export const App = () => {
  return (
    <div className='mainContainer'>
      <section className="logoImage">
        <img src="./logoImg.webp" alt=""/>
      </section>
      <section className='surveyWrap'>
        <SurveyWraper />
      </section>
    </div>
  );
}