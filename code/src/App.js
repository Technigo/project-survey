import React from 'react';
import Survey from 'components/Survey';
import Hero from 'components/Hero';

export const App = () => {
  return (
    <>
      <div className="hero">
        <Hero />
      </div>
      <div className="survey-body">
        <Survey />
      </div>
    </>
  );
}
