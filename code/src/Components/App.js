import React from 'react'
import './app.css'
import { Header } from './Header'
import { Survey } from './Survey.js'
import { Footer } from './Footer'


export const App = () => {
  

  return (
    <>
    <Header mainHeading="Trick or treat?" subHeading="Take the Halloween survey" />
    <main>
      <Survey />
    </main>
    <Footer />
    </>
  );
};

