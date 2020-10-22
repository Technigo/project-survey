import React, { useState } from 'react';
import { Submit } from 'Submit';
import { Dropdown } from './Dropdown';
import { Radio } from './Radio';
import { Text } from './Text';
import { Checkbox } from './Checkbox';
import { Summary } from './Summary';
import './survey.css';

export const Survey = () => {
  const [ageGroup, setAgeGroup] = useState();
  const [checkbox, setCheckbox] = useState(false); /* Needs to be specified to either true or false to be controlled from the start */
  const [celebrationDrink, setCelebrationDrink] = useState('');
  const [rainyFood, setRainyFood] = useState('');
  const [restaurantHunt, setRestaurantHunt] = useState('');
  const [saladMaker, setSaladMaker] = useState('');
  const [userText, setUserText] = useState();
  const [showSummary, setShowSummary] = useState(false);

  /* This function uses a for-loop to extract the 'text' from each object inside the different 
  arrays so that the text is displayed in summary and not the value.
  The value could be used for backend instead (although at the moment it's just not used) */
  const getUserInput = (userValue, optionsArray) => {
    for (let i = 0; i < optionsArray.length; i++) {
      if (optionsArray[i].value === userValue)
        return optionsArray[i].text
    } return 'no text found'
  }
 /* Arrays with objects for each components, needs to be definied outside of the component-scope so that getUserInput() can access it. */
  const drinkArray= [
    {
      text: "Choose your poison",
      value: "",
    },
    {
      text: "Something sparkly",
      value: "sparkly",
    },
    {
      text: "Beer",
      value: "beer",
    },
    {
      text: "Wine",
      value: "wine",
    },
    {
      text: "Non-alcoholic fancy cocktail",
      value: "non-alcoholic",
    },
    {
      text: "TEQUILA BABY",
      value: "tequila",
    },
  ]

  const comfortFoodArray = [
    {
      text: "Choose your comfortfood",
      value: "",
    },
    {
      text: "Hot, steamy ramen",
      value: "ramen",
    },
    {
      text: "Freshly baked bread with loads of butter",
      value: "bread",
    },
    {
      text: "Rain or shine is Icecream-time",
      value: "icecream",
    },
    {
      text: "Big freaking bowl of pasta",
      value: "pasta",
    },
    {
      text: "Just a salad please",
      value: "salad",
    },
  ]

  const restaurantMethodArray = [
    {
      text: "Choose your method",
      value: "",
    },
    {
      text:
        "Tons of research, google ratings and interviews with previous visitors",
      value: "meticulous",
    },
    {
      text: "I just go to the nearest joint around the corner",
      value: "lazy",
    },
    {
      text: "Does it have roaches? No? Then I am good to go",
      value: "eats everything",
    },
    {
      text: "Guide Michelin all day baby",
      value: "fancypants",
    },
    {
      text:
        "Anything where you can order macrobiotic, nonprocessed and prefereably raw food please",
      value: "dietician",
    },
  ]

  const saladArray = [
    {
      text: "Choose your veggie:",
      value: "",
    },
    {
      text: "Avocado",
      value: "avocado",
    },
    {
      text: "Loads of tomato",
      value: "tomato",
    },
    {
      text: "Cheese and meat. Cows eat green, that counts right?",
      value: "carnivore",
    },
    {
      text: "Broccoli",
      value: "broccoli",
    },
    {
      text: "Some fruits are always nice.",
      value: "fruit",
    },
  ]

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSummary(true);
  };
  return (
    <>
      {!showSummary ? (
        <form className='survey__form' onSubmit={handleSubmit}>
          <Dropdown
            selectValue={celebrationDrink}
            setSelectValue={setCelebrationDrink}
            question={
              'It is friday night, you just finished a great project and want to celebrate. What are you ordering?'
            }
            optionsArray={drinkArray}
          />
          <Dropdown
            selectValue={rainyFood}
            setSelectValue={setRainyFood}
            question={'On a rainy day, what would you rather have?'}
            optionsArray={comfortFoodArray}
          />
          <Dropdown
            selectValue={restaurantHunt}
            setSelectValue={setRestaurantHunt}
            question={'What is your process of choosing a restaurant?'}
            optionsArray={restaurantMethodArray}
          />
          <Dropdown
            selectValue={saladMaker}
            setSelectValue={setSaladMaker}
            question={'You are making a salad. What is the main ingrediens?'}
            optionsArray={saladArray}
          />
          <Radio
            ageGroup={ageGroup}
            setAgeGroup={setAgeGroup}
            question={'Thanks for doing this survey! Please check your agegroup:'}
            threeRadioButtonsArray={[
              {
                value: '0-20',
                message: 'Teeny tiny baby'
              },
              {
                value: '21-60',
                message: 'Prime years baby'
              },
              {
                value: '61-100',
                message: 'Oldie but goldie'
              }
            ]}
          />
          <Checkbox
            checkbox={checkbox}
            setCheckbox={setCheckbox}
            question={'Would you take this survey again?'}
            answer={'Yes, most definately'}
          />
          <Text
            userText={userText}
            setUserText={setUserText} />
          <Submit />
        </form>
      ) : (
          <Summary
            drink={getUserInput(celebrationDrink, drinkArray)}
            rainyFood={getUserInput(rainyFood, comfortFoodArray)}
            restMethod={getUserInput(restaurantHunt, restaurantMethodArray)}
            veggie={getUserInput(saladMaker, saladArray)}
            age={ageGroup}
            surveyAgain={checkbox.answer}
            userMessage={userText}
          />
        )}
    </>
  );
};
