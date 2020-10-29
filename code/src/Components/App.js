import React from 'react'

import { Header } from './Header'
import { Survey } from './Survey.js'
import { Footer } from './Footer'

import './app.css'

export const App = () => {
  

  return (
    <>
    <Header mainHeading="Halloween" subHeading="Do you dare to take the survey?" />
    <main>
      <Survey />
    </main>
    <Footer />
    </>
  );
};

