import React, { useState } from 'react';
import Footer from 'components/Footer';
import Landing from 'components/Landing';
import Questionnaire from 'components/Questionnaire';

export const App = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [name, setName] = useState('');

  console.log(name);

  const router = pageIndex => {
    switch (pageIndex) {
      case 0:
        return <Landing setPageIndex={setPageIndex} />;
      case 1:
        return (
          <Questionnaire
            label="Let's get started - what's your name?"
            pageIndex={pageIndex}
            inputType="name"
            setName={setName}
          />
        );
      default:
        return <div>Under construction yo, number {pageIndex}</div>;
    }
  };

  document.querySelector('body').addEventListener('keypress', event => {
    if (event.key === 'Enter') {
      setPageIndex(pageIndex + 1);
    }
  });

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">{router(pageIndex)}</div>
      {pageIndex > 0 && (
        <Footer pageIndex={pageIndex} setPageIndex={setPageIndex} />
      )}
    </div>
  );
};
