import React from 'react';
import SnapSection from 'SnapSection';
import Header from './Header';
import SurveyForm from './SurveyForm';

export const App = () => {
  return (
    <div>
      <SnapSection>
        <Header />
      </SnapSection>
      <SurveyForm />
    </div>
  );
};
