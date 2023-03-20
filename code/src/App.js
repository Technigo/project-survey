import React, { useState } from 'react';

import './index.css'

import isabellefilms from './isabellefilms.json';
import generalfilms from './generalfilms.json';

import Intro from './components/Intro'
import Name from './components/Name'
import Isabelle from './components/Isabelle'
import Theme from './components/Theme'
import Location from './components/Location';
import MixedQuestions from './components/MixedQuestions'
import Summary from './components/Summary'
import Result1 from './components/Result1';
import Result2 from './components/Result2';
import ProgressBar from './components/ProgressBar';

export const App = () => {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('');
  const [isabelle, setIsabelle] = useState('');
  const [isabelleTheme, setIsabelleTheme] = useState('');
  const [theme, setTheme] = useState('');
  const [continent, setContinent] = useState('');
  const [country, setCountry] = useState('');
  const [open, setOpen] = useState('');
  const [genre, setGenre] = useState('');

  const handleGoback = () => {
    setCounter(counter - 1);
  }

  const handleReset = () => {
    setCounter(0);
    setName('');
    setIsabelle('');
    setIsabelleTheme('');
    setTheme('');
    setContinent('');
    setCountry('');
    setOpen('');
    setGenre('');
  };

  const classList = (...classes) => {
    return classes
      .filter((item) => !!item)
      .join(' ');
  }

  return (
    <div className={classList(
      'background-image',
      counter === 0 && 'image1',
      counter === 1 && 'image2',
      counter === 2 && 'image3',
      counter === 3 && 'image4',
      counter === 4 && 'image5',
      counter === 5 && 'image6',
      counter === 6 && 'image7'
    )}>
      <ProgressBar counter={counter} totalCount={5} />
      <div className="main-wrapper">
        {counter === 0 && (
          <Intro counter={counter} setCounter={setCounter} />
        )}
        {counter === 1 && (
          <Name
            name={name}
            setName={setName}
            counter={counter}
            setCounter={setCounter} />
        )}
        {counter === 2 && (
          <Isabelle
            isabelle={isabelle}
            setIsabelle={setIsabelle}
            counter={counter}
            setCounter={setCounter} />
        )}
        {counter === 3 && (
          <Theme
            isabelle={isabelle}
            isabelleTheme={isabelleTheme}
            setIsabelleTheme={setIsabelleTheme}
            theme={theme}
            setTheme={setTheme}
            counter={counter}
            setCounter={setCounter} />
        )}
        {counter === 4 && (
          <Location
            isabelleTheme={isabelleTheme}
            continent={continent}
            setContinent={setContinent}
            country={country}
            setCountry={setCountry}
            counter={counter}
            setCounter={setCounter} />
        )}
        {counter === 5 && (
          <MixedQuestions
            continent={continent}
            open={open}
            setOpen={setOpen}
            genre={genre}
            setGenre={setGenre}
            counter={counter}
            setCounter={setCounter} />
        )}
        {counter === 6 && (
          <Summary
            name={name}
            isabelle={isabelle}
            isabelleTheme={isabelleTheme}
            theme={theme}
            continent={continent}
            country={country}
            open={open}
            genre={genre}
            counter={counter}
            setCounter={setCounter} />
        )}
        {counter === 7 && isabelle === 'love' ? (
          <Result1
            isabelleTheme={isabelleTheme}
            continent={continent}
            open={open}
            isabellefilms={isabellefilms} />
        ) : counter === 7 && (
          <Result2
            theme={theme}
            country={country}
            genre={genre}
            generalfilms={generalfilms} />
        )}
        {counter > 0 && (
          <div className="button-container">
            <button type="button" onClick={handleGoback} aria-label="Go backwards" className="go-back-button">
              <i className="fa-solid fa-chevron-left" />
            </button>
            <button type="button" onClick={handleReset} aria-label="Button named Reset All" className="reset-button">
              Reset All
            </button>
          </div>)}
      </div>
    </div>
  )
}

