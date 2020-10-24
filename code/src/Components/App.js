import React from 'react'
import './app.css'
import { Header } from './Header'
import { Survey } from './Survey.js'
import { Footer } from './Footer'


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

