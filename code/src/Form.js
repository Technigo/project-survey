import React, { useState } from 'react';

import 'Styles/style.css'
import 'Styles/form.css'
import RestaurantPic from 'assets/restaurant.jpg'
import MealPic from 'assets/meal.jpg'


import NameInput from 'Components/NameInput';
import MaincourseInput from 'Components/MaincourseInput';
import DrinksInput from 'Components/DrinksInput';
import DessertInput from 'Components/DessertInput';
import Buttons from 'Components/Buttons';
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

    <section className="container-wrapper">
      <form className="servey-form" onSubmit={handleSubmit}>

        {section === 'startMessage' && (
          <div className="message-container">
            <img className="message-img" src={RestaurantPic} alt="restaurant" />
            <h1 className="welcome" tabIndex="0">Welcome to Restaurant Starmountain</h1>
            <h2 tabIndex="0">Please start your order</h2>
            <div className="button-container">
              <Buttons
                name="Order"
                setSection={setSection}
                value='firstQuestion' />
            </div>
          </div>
        )}
        {section === 'firstQuestion' && (
          <div className="message-container">
            <h2 tabIndex="0">What's your name?</h2>
            <NameInput name={name} setName={setName} section={section} setSection={setSection} />
            <div className="button-container">
              <Buttons
                name="Back"
                setSection={setSection}
                value='startMessage' />
              <Buttons
                name="Next"
                setSection={setSection}
                value='secondQuestion' />
            </div>
          </div>
        )}
        {section === 'secondQuestion' && (
          <div className="message-container">
            <h2 tabIndex="0">Choose your meal</h2>
            <MaincourseInput maincourse={maincourse} setMaincourse={setMaincourse} />
            <div className="button-container">
              <Buttons
                name="Back"
                setSection={setSection}
                value='firstQuestion' />
              <Buttons
                name="Next"
                setSection={setSection}
                value='thirdQuestion' />
            </div>
          </div>
        )}
        {section === 'thirdQuestion' && (
          <div className="message-container">
            <h2 tabIndex="0">Choose your drinks:</h2>
            <DrinksInput drinks={drinks} setDrinks={setDrinks} />
            <div className="button-container">
              <Buttons
                name="Back"
                setSection={setSection}
                value='secondQuestion' />
              <Buttons
                name="Next"
                setSection={setSection}
                value='fourthQuestion' />
            </div>
          </div>
        )}

        {section === 'fourthQuestion' && (
          <div className="message-container">
            <h2 tabIndex="0">Choose your dessert:</h2>
            <DessertInput dessert={dessert} setDessert={setDessert} />
            <div className="button-container">
              <Buttons
                name="Back"
                setSection={setSection}
                value='thirdQuestion' />
              <Buttons
                name="Next"
                setSection={setSection}
                value='summary' />
            </div>
          </div>
        )}
        {section === 'summary' && (
          <div className="summary-container">
            <img className="meal-img" src={MealPic} alt="meal" />
            <Summary
              userName={name}
              userMaincourse={maincourse}
              userDrinks={drinks}
              userDessert={dessert}
            />

          </div>
        )}
      </form>
    </section>
  )
}

export default Form;

