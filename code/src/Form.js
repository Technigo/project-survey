import React, { useState } from 'react';

import "./style.css"
import "./form.css"

import NameInput from 'Components/NameInput';
import MaincourseInput from 'Components/MaincourseInput';
import DrinksInput from 'Components/DrinksInput';
import DessertInput from 'Components/DessertInput';
import Summary from './Summary';

const Form = () => {
  const [name, setName] = useState('');
  const [maincourse, setMaincourse] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [dessert, setDessert] = useState('');
  const [section, setSection] = useState('startMessage')


  const handleSubmit = event => {
    event.preventDefault()

  };

  return (

    <form onSubmit={handleSubmit}>

     
      {section === 'startMessage' && (
        <>
         <h1>Welcome to Restaurant Starmountain</h1>
          <h2>Please start your order</h2>
          <button
            type="button"
            onClick={event => { setSection(event.target.value) }}
            value='firstQuestion'>
            Order </button>
        </>
      )}
      {section === 'firstQuestion' && (
        <>
          <NameInput userName={name} userSetName={setName} />
          <button
            type="button"
            onClick={event => { setSection(event.target.value) }}
            value='secondQuestion'>
            Next </button>
        </>
      )}
      {section === 'secondQuestion' && (
        <>
          <MaincourseInput userMaincourse={maincourse} userSetMaincourse={setMaincourse} />
          <button
            type="button"
            onClick={event => { setSection(event.target.value) }}
            value='thirdQuestion'>
            Next </button>
        </>
      )}
      {section === 'thirdQuestion' && (
        <>
          <DrinksInput userDrinks={drinks} userSetDrinks={setDrinks} />
          <button
            type="button"
            onClick={event => { setSection(event.target.value) }}
            value='fourthQuestion'>
            Next </button>
        </>
      )}
      {section === 'fourthQuestion' && (
        <>
          <DessertInput userDessert={dessert} setUserDessert={setDessert} />
          <button
            type="button"
            onClick={event => { setSection(event.target.value) }}
            value='summary'>
            Next </button>
        </>
      )}
      {section === 'summary' && (
        <>
          <Summary
            userName={name}
            userMaincourse={maincourse}
            userDrinks={drinks}
            userDessert={dessert}
          />
          
        </>
      )}
    </form>
  )
}

export default Form;

{/* //     <form onSubmit={handleSubmit}>
    //         <NameInput userName={name} userSetName={setName} />
    //         <MaincourseInput userMaincourse={maincourse} userSetMaincourse = {setMaincourse} />
    //         <DrinksInput userDrinks={drinks} userSetDrinks={setDrinks} /> 
    //         <DessertInput userDessert={dessert} setUserDessert={setDessert} />
    //        <button className="btn" type="submit"  */}
    //         disabled={name === '' || maincourse === ''|| drinks === '' || dessert === ''}>
    //             Submit</button>     
    //     </form>

    //     <Summary
    //     userName={name}
    //     userMaincourse={maincourse}
    //     userDrinks={drinks}
    //     userDessert={dessert}
    // />