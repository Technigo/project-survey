/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Welcome } from './components/Welcome';
import { Age } from './components/Age';
import { Adults } from './components/Adults';

import { Select } from './components/Select';
import { Input } from './components/Input';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [ageGroup, setAgeGroup] = useState('');
  const [habits, setHabits] = useState(0)
  const [specialGroup, setSpecialGroup] = useState('');
  const [frequency, setFrequency] = useState('');
  const [username, setUserName] = useState('');

  // Function for checking counter
  const checkAge = (ageRange) => {
    if (ageRange === '5 - 7') {
      return (
        <section className="main">
          <YoungOnes />
        </section>
      )
    } else if (ageRange === '18 - 64') {
      return (
        <section className="main">
          <Adults />
        </section>
      )
    } else if (ageRange === '65+') {
      return (
        <section className="main">
          <Seniors />
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
          {checkAge(ageGroup)};
          <button className="ok-btn" type="button" onClick={handleNextButton}>Next</button>
        </section>)}
      <Footer />
    </>
  );
}

