import React from 'react'

/* a food component? food is the PROPS? */
export const Food = ({ food, setFood }) => {
/* a function? */
/* Anna, don´t forget to put a ( after return and a ) to close */
  const handleFoodChange = (event) => {
    /* is this a varible? */
    setFood(event.target.value);
  }
  return (
    <>
      <p>What is your fave food?</p>
      <input type="text" value={food} onChange={handleFoodChange} />
    </>
  );
}

/* what is object destructuring? */
/* when do I use the { } ? */
/* why is the { } in the food component? */
/* is the type=TEXT the event? */
/* value and onChange is connecting what? app.js? */
/* what does return do? */
/* what does the statehook do? */
/* what is use state? */
/* does the parent component always has to be in App.js? */
/* what is the App.js file? why is it like the mothership of all js.files? */
/* import { Name } from 'components/Name'; why do I need  { crumelurs } here in the import? */

/* {step === 1 && (
    <Name name={name} setName={setName} />
  )} */
/* what does the === mean? why Name name={name} and setName{setName} <-- Is setName a function
that allaows the user to enter different names? Ex Anna? Jonas? Kalle? */
