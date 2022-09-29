import React from 'react';
import Survey from 'components/Survey';

export const App = () => {
  return (
    <section className="outer-wrapper">
      <section className="inner-wrapper">
        <div className="survey">
          <Survey />
        </div>
      </section>
    </section>
  );
};
