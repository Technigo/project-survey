import React from 'react';

import { StartSurvey } from './pages/StartSurvey';
import { Header } from './components/Header';

export const App = () => {

  return (
    <>
      <Header />
      <main>
        <StartSurvey /> 
      </main>
    </>
  );
};

 
