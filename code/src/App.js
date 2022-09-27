/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Welcome } from './components/Welcome';
import { Select } from './components/Select';
import { Checkbox } from './components/Checkbox';
import { Radio } from './components/Radio';
import { Input } from './components/Input';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [username, setUserName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(0);
  const [frequency, setFrequency] = useState('');

  // Function for checking counter
  const nextQuestion = (number) => {
    if (number === 1) {
      return (
        <section className="main">
          <Input />
        </section>
      )
    } else if (number === 2) {
      return (
        <section className="main">
          <Select />
        </section>
      )
    } else if (number === 3) {
      return (
        <section className="main">
          <Checkbox />
        </section>
      )
    }
  }
  const handleOKButton = (event) => {
    setCounter(counter + 1);
  }
  // App rendering starts here:
  return (
    <>
      <Header />
      {counter === 0 && (
        <section className="main1">
          <Welcome setCounter={setCounter} />
        </section>)}
      {counter === 1 && (
        <section className="main2">
          <Input name={username} setName={setUserName} />
          <button className="ok-btn" type="button" onClick={handleOKButton}>OK</button>
        </section>)}
      {counter === 2 && (
        <section className="main3">
          <Select location={gender} setLocation={setGender} />
          {console.log('GEnder:', gender)}
          <button className="ok-btn" type="button" onClick={handleOKButton}>OK</button>
        </section>)}
      <Footer />
    </>
  );
}

