import React, { useState } from 'react';
import { FormPage } from './components/pages/FormPage';
import { SummaryPage } from './components/pages/SummaryPage';

export const App = () => {
  const [summaryPageActive, setSummaryPageActive] = useState(false);
  const [summary, setSummary] = useState({});

  const onSubmit = input => {
    setSummary({ ...input });
    setSummaryPageActive(true);
  };

  const goBack = () => {
    setSummaryPageActive(false);
  };

  return (
    <div className="app">
      {summaryPageActive ? (
        <SummaryPage data={summary} goBack={goBack} />
      ) : (
        <FormPage onSubmit={onSubmit} />
      )}
    </div>
  );
};
