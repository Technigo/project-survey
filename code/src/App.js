/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React from 'react';
import { SurveyForm } from 'components/SurveyForm';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export const App = () => {
  return (
    <section className="outer-wrapper">
      <section className="inner-wrapper">
        <Header />
        <SurveyForm />
        <Footer />
      </section>
    </section>
  );
}
