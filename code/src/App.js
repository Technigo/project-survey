import React, { useState } from 'react';
import { Back } from './components/Back'
import { Button } from './components/Button'
import { Flavor } from './components/Flavor'
import { Holiday, Water, Land } from './components/Holiday'
import { HotSauce } from './components/HotSauce'
import { Mayo } from './components/Mayo'
import { Region } from './components/Region'
// import { Results } from './components/Results'
import { ResultsWrapper } from './components/ResultsWrapper'
import { Sauce } from './components/Sauce'
import { Season } from './components/Season'
import { Self } from './components/Self'
import { StartOver } from './components/StartOver'
import { Summary } from './components/Summary'

export const App = () => {
  const [counter, setCounter] = useState(0)
  console.log(counter)
  const [flavor, setFlavor] = useState('')
  const [holiday, setHoliday] = useState('')
  const [hotsauce, setHotSauce] = useState('')
  const [land, setLand] = useState('')
  const [mayo, setMayo] = useState('')
  const [region, setRegion] = useState('')
  const [sauce, setSauce] = useState('')
  const [season, setSeason] = useState('')
  const [self, setSelf] = useState('')
  const [water, setWater] = useState('')

  return (
    <>
      {counter === 0 && (
        <>
          <h1>You look like a tasty dish!</h1>
          <p>Take this quiz and find out exactly which tasty dish you are.</p>
        </>
      )}
      {counter === 1 && (
        <>
          <h2>Question 1</h2>
          <Self self={self} setSelf={setSelf} />
        </>
      )}
      {counter === 2 && (
        <>
          <h2>Question 2</h2>
          <Holiday holiday={holiday} setHoliday={setHoliday} />
          {holiday === 'at the water' && (
            <Water water={water} setWater={setWater} setLand={setLand} />
          )}
          {holiday === 'on dry land' && (
            <Land land={land} setLand={setLand} setWater={setWater} />
          )}
        </>
      )}
      {counter === 3 && (
        <>
          <h2>Question 3</h2>
          <Sauce sauce={sauce} setSauce={setSauce} />
        </>
      )}
      {counter === 4 && (
        <>
          <h2>Question 4</h2>
          {sauce === '0' && (
            <p>Not gonna answer? Alrighty. Moving right along.</p>
          )}
          {sauce === '1' && (
            <HotSauce hotsauce={hotsauce} setHotSauce={setHotSauce} />
          )}
          {sauce === '2' && (
            <Mayo mayo={mayo} setMayo={setMayo} />
          )}
          {sauce === '3' && (
            <p>Not a sauce fan?  Moving right along.</p>
          )}
        </>
      )}
      {counter === 5 && (
        <>
          <h2>Question 5</h2>
          <Region region={region} setRegion={setRegion} />
        </>
      )}
      {counter === 6 && (
        <>
          <h2>Question 6</h2>
          <Flavor flavor={flavor} setFlavor={setFlavor} />
        </>
      )}
      {counter === 7 && (
        <>
          <h2>Question 7</h2>
          <Season season={season} setSeason={setSeason} />
        </>
      )}
      {counter === 8 && (
        <>
          <Summary
            self={self}
            holiday={holiday}
            destination={land || water}
            sauce={sauce}
            hotsauce={hotsauce}
            mayo={mayo}
            region={region}
            flavor={flavor}
            season={season} />
          <p>If not, you can start over!</p>
          <StartOver setCounter={setCounter} />
          <p>Or, click Next to see which tasty dish you are!</p>
        </>
      )}
      {counter === 9 && (
        <ResultsWrapper region={region} flavor={flavor} season={season} />
      )}
      {counter <= 9 && (
        <>
          <h2>----------</h2>
          <Back counter={counter} setCounter={setCounter} />
          <Button counter={counter} setCounter={setCounter} />
        </>
      )}
      {counter === 10 && (
        <h2>Thanks and Goodbye!</h2>
      )}
    </>
  );
}
