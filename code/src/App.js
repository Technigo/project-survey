import React, { useState } from 'react';
import { Button } from './components/Button'
import { Holiday, Water, Land } from './components/Holiday'
import { Sauce } from './components/Sauce'
import { Self } from './components/Self'
import { Summary } from './components/Summary'

export const App = () => {
  const [counter, setCounter] = useState(0)
  console.log(counter)
  const [self, setSelf] = useState('')
  const [holiday, setHoliday] = useState('')
  const [water, setWater] = useState('')
  const [land, setLand] = useState('')
  const [sauce, setSauce] = useState('')
  return (
    <>
      <h1>Welcome to the survey</h1>
      <h2>Question 1</h2>
      <Self self={self} setSelf={setSelf} />
      <h2>Question 2</h2>
      <Holiday holiday={holiday} setHoliday={setHoliday} />
      {holiday === 'at the water' && (
        <Water water={water} setWater={setWater} />
      )}
      {holiday === 'on dry land' && (
        <Land land={land} setLand={setLand} />
      )}
      <h2>Question 3</h2>
      <Sauce sauce={sauce} setSauce={setSauce} />
      <h2>Click Next</h2>
      <Button counter={counter} setCounter={setCounter} />
      <Summary self={self} holiday={holiday} destination={water || land} sauce={sauce} />
    </>
  );
}
