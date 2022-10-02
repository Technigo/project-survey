/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import Survey from 'components/Survey';

export const App = () => {
  return (
    <section className="outer-wrapper">
      <section className="inner-wrapper">
        <Survey />
      </section>
    </section>
  );
};
