import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Form />
      <Footer />
    </div>
  );
};
