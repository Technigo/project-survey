import React from 'react'
import { Dropdown } from './question1'
import { RadioButton1 } from './question2'
import { RadioButton2 } from './question3'
import { RadioButton3 } from './question4'
import { FreeText } from './question5'


export const App = () => {
  return (
    <div>
      <h1>Book a table at <span>Elsita & Alfredo</span></h1>
      <p>
        <span>Elsita & Alfredo</span> is a small family run authentic pizzeria. 
        Due to our small and intimate setting we don't have the capability of seating groups larger than 8 people.
        PLease note that <span>Elsita & Alfredo</span> only accepts bookings for the upcoming weekend of the current week.
        Luckily our delivery service delivers you favourite pizzas all days of the week, please 
        visit <a href="https://vibrant-ritchie-da31af.netlify.com">our website</a> for more information!
      </p>

      <form>
        <Dropdown />
        <RadioButton1 />
        <RadioButton2 />
        <RadioButton3 />
        <FreeText />
      </form>

      <button>Book table</button>
    </div>
  );
};
