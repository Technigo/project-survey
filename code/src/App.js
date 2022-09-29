/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Welcome } from './components/Welcome';
import { Age } from './components/Age';
import { Adult } from './components/Adult';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [ageGroup, setAgeGroup] = useState('');
  const [specialGroup, setSpecialGroup] = useState('');

  const habits = [];
  habits.push({ ageGroup });

  // Function for checking counter
  const checkAge = (ageRange) => {
    if (ageRange === '5 - 7') {
      return (
        <section className="main">
          <Child />
        </section>
      )
    } else if (ageRange === '18 - 64') {
      return (
        <section className="main">
          <Adult />
        </section>
      )
    } else if (ageRange === '65+') {
      return (
        <section className="main">
          <Senior />
        </section>
      )
    }
  }
  const handleNextButton = (event) => {
    setCounter(counter + 1);
  }
  // App rendering starts here:
  return (
    <>
      <Header />
      {counter === 0 && (
        <section className="main">
          <Welcome setCounter={setCounter} />
        </section>)}
      {counter === 1 && (
        <section className="main">
          <Age ageGroup={ageGroup} setAgeGroup={setAgeGroup} />
          {console.log('AGEGROUP:', ageGroup)}
          <button className="ok-btn" type="button" onClick={handleNextButton}>Next</button>
        </section>)}
      {counter === 2 && (
        <section className="main">
          {checkAge(ageGroup)}
        </section>)}
      <Footer />
    </>
  );
}

