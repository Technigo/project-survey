import React from 'react'

const hungerLevel = {
  1: 'You are full, but here are some recipes for later: ',
  2: 'You are feeling snacky, grab a cookie and check out these recipes: ',
  3: 'You are HUNGRY. Hurry, decide what you want to eat here: and run to the store!'
}

const Overveiw = ({ nameInput, preference, sortOfPasta, otherIngredient, hungerInput }) => {
  return (
    <div className="survey-container">
      <section className="overview-container">
        <h2>Thanks for participating {nameInput}!</h2>
        <div className="overveiw-summary">
          <p>You are in the mood for some {preference}</p>
          <p>You prefere {sortOfPasta}, nice!</p>
          <p>And with that {sortOfPasta} you would like {otherIngredient}</p>
          <p>{hungerLevel[hungerInput]}</p>
        </div>
        <form>
          <button className="restart-button" type="submit">Restart</button>
        </form>
      </section>
    </div>
  );
};

export default Overveiw