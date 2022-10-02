import React, { useState } from 'react';

import { Name } from "./Name";
import { Age } from './Age';
import { FirstQuestion } from './FirstQuestion';
import { SecondQuestion } from './SecondQuestion';
import { ThirdQuestion } from './ThirdQuestion';
import { FourthQuestion } from './FourthQuestion.js';
import { Answers } from './Answers';
import { Thanks } from './Thanks'

export const Survey = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState('')
  const [trip, setTrip] = useState('')
  const [fly, setFly] = useState('')
  const [meal, setMeals] = useState('')
  const [emplo, setEmplo] = useState('')
  
  let increase = () => {
    setCount(count +1)
  };
  let decrease = () => {
    if (count > 0 ) {
        setCount(count -1)
    } else {
        setCount(count)
    }
  };
  let reset = () => {
    setCount(0)
  };
  let quest1 = () => {
    setCount(1)
  };
  let quest2 = () => {
    setCount(2)
  };
  let quest3 = () => {
    setCount(3)
  };
  let quest4 = () => {
    setCount(4)
  };
  let quest5 = () => {
    setCount(5)
  };


  if (count === 0 ) {
  return (
    <Name name={name} setName={setName} increase={increase}/>
)} else if ( count === 1) {
  return (
    <Age setAge={setAge} name={name} increase={increase} decrease={decrease}/>
)} else if ( count === 2) {
  return (
    <FirstQuestion setTrip={setTrip} increase={increase} decrease={decrease}/>
)} else if ( count === 3) {
    return (
      <SecondQuestion setFly={setFly} increase={increase} decrease={decrease}/>
)} else if ( count === 4) {
  return (
    <ThirdQuestion setMeals={setMeals} increase={increase} decrease={decrease}/>
)} else if ( count === 5) {
  return (
    <FourthQuestion setEmplo={setEmplo} increase={increase} decrease={decrease}/>
)} else if ( count === 6) {
  return (
    <Answers name={name} age={age} trip={trip} fly={fly} meal={meal} emplo={emplo} reset={reset} quest1={quest1} quest2={quest2} quest3={quest3} quest4={quest4} quest5={quest5} increase={increase}/>
)} else if ( count === 7) {
  return (
    <Thanks name={name} reset={reset}/>
)}

}