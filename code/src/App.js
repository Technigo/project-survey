import React from 'react'
import './index.css'
import { useState } from 'react'
import { Holiday } from './components/Holiday'
import { NameOne } from './components/NameOne'
import { CostumeOne } from './components/CostumeOne'
import { CostumeTwo } from './components/CostumeTwo'
import { Food } from './components/Food'
import { Hustle } from './components/Hustle'
import { Things } from './components/Things'
import { ThingsTwo } from './components/ThingsTwo'
import { Phrase } from './components/Phrase'
import { Button } from './components/Button'
import { Summary } from 'components/Summary'


const thing = [
  "broken code",
  "phone number",
  "coupons"
]


const thingsTwos = [
  "toilet paper",
  "eggs",
  "yarn"
]


export const App = () => {
  const [holiday, setHoliday] = useState("");
  const [nameOne, setNameOne] = useState("");
  const [costumeOne, setCostumeOne] = useState("");
  const [costumeTwo, setCostumeTwo] = useState("");
  const [food, setFood] = useState("");
  const [hustle, setHustle] = useState("");
  const [things, setThings] = useState("");
  const [thingsTwo, setThingsTwo] = useState()
  const [phrase, setPhrase] = useState("")

  const [summary, setSummary] = useState(false)

  const handleSubmit = event => {
    event.preventDefault();
    setSummary(true);
  };
  return (


    <div className="container">
      <div className="header"><h1>Time For HalloweenMad Lib</h1></div>
      <form onSubmit={handleSubmit}>
        <div className="mad-container">

          <Holiday holiday={holiday} setHoliday={setHoliday} />
          <NameOne name={nameOne} setNameOne={setNameOne} />
          <CostumeOne costumeOne={costumeOne} setCostumeOne={setCostumeOne} />
          <CostumeTwo costumeTwo={costumeTwo} setCostumeTwo={setCostumeTwo} />
          <Food food={food} setFood={setFood} />
          <Hustle hustle={hustle} setHustle={setHustle} />
          <Things things={things} setThings={setThings} />
          <ThingsTwo thingsTwo={thingsTwo} setThingsTwo={setThingsTwo} />
          <Phrase phrase={phrase} setPhrase={setPhrase} />
        </div>
        <Button />
      </form>
     
      {summary && (

        <section>

          <Summary
            holiday={holiday}
            nameOne={nameOne}
            costumeOne={costumeOne}
            costumeTwo={costumeTwo}
            food={food}
            hustle={hustle}
            things={things}
            thingsTwo={thingsTwo}
            food={food}
            phrase={phrase}
          />


        </section>
      )}

    </div>



  );
}