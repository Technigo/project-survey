/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Welcome } from './components/Welcome';
import { Age } from './components/Age';
import { Child } from './components/Child';
import { Adult } from './components/Adult';
import { Balance } from './components/Balance';
import { Select } from './components/Select';
import { Summary } from './components/Summary';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [ageGroup, setAgeGroup] = useState('');
  const [meetsCardio, setMeetsCardio] = useState(false);
  const [meetsStrength, setMeetsStrength] = useState(false);
  const [meetsMovement, setMeetsMovement] = useState(false);
  const [meetsBalance, setMeetsBalance] = useState(false);
  const [specialGroup, setSpecialGroup] = useState('');

  const handleNextButton = (event) => {
    setCounter(counter + 1);
  }

  // Function for checking counter
  const checkAge = (ageRange) => {
    if (ageRange === '5 - 17') {
      return (
        <section className="main">
          <Child
            meetsCardio={meetsCardio}
            setMeetsCardio={setMeetsCardio}
            meetsStrength={meetsStrength}
            setMeetsStrength={setMeetsStrength}
            meetsMovement={meetsMovement}
            setMeetsMovement={setMeetsMovement} />
          <button className="ok-btn" type="button" onClick={handleNextButton}>Next</button>
        </section>
      )
    } else if (ageRange === '18 - 64') {
      return (
        <section className="main">
          <Adult
            meetsCardio={meetsCardio}
            setMeetsCardio={setMeetsCardio}
            meetsStrength={meetsStrength}
            setMeetsStrength={setMeetsStrength}
            meetsMovement={meetsMovement}
            setMeetsMovement={setMeetsMovement} />
          <button className="ok-btn" type="button" onClick={handleNextButton}>Next</button>
        </section>
      )
    } else if (ageRange === '65+') {
      return (
        <section className="main">
          <Adult
            meetsCardio={meetsCardio}
            setMeetsCardio={setMeetsCardio}
            meetsStrength={meetsStrength}
            setMeetsStrength={setMeetsStrength}
            meetsMovement={meetsMovement}
            setMeetsMovement={setMeetsMovement} />
          <Balance
            meetsBalance={meetsBalance}
            setMeetsBalance={setMeetsBalance} />
          <button className="ok-btn" type="button" onClick={handleNextButton}>Next</button>
        </section>
      )
    }
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
          <Age ageGroup={ageGroup} setAgeGroup={setAgeGroup} handleNextButton={handleNextButton} />
          {/* <button className="ok-btn" type="button" onClick={handleNextButton}>Next</button> */}
        </section>)}
      {counter === 2 && (
        <section className="main">
          {checkAge(ageGroup)}
        </section>)}
      {counter === 3 && (
        <section className="main">
          <Select specialGroup={specialGroup} setSpecialGroup={setSpecialGroup} />
          <button className="ok-btn" type="button" onClick={handleNextButton}>Submit</button>
        </section>)}
      {counter === 4 && (
        <section className="main">
          <Summary
            ageGroup={ageGroup}
            specialGroup={specialGroup}
            meetsCardio={meetsCardio}
            meetsStrength={meetsStrength}
            meetsMovement={meetsMovement}
            meetsBalance={meetsBalance} />
        </section>
      )}
    </>
  );
}

