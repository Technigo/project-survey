import React from 'react'

const hungerLevel = {
  1: 'You are full, but here are some recipes for later:',
  2: 'You are feeling snacky, grab a cookie and check out these recipes: ',
  3: 'You are HUNGRY. Hurry, decide what you want to eat, and run to the store! Link here:'
}

const Overveiw = ({ nameInput, preference, sortOfPasta, otherIngredient, hungerInput }) => {
  return (
    <div className="survey-container">
      <section className="overview-container">
        <h2>Thanks for participating {nameInput}!</h2>
        <div className="overveiw-summary">
          <p>You are in the mood for some {preference} food</p>
          <p>You prefere {sortOfPasta}, with some {otherIngredient}, nice!</p>
          <p>{hungerLevel[hungerInput]} <a href="https://www.yummly.com/recipes?q=pasta&taste-pref-appended=true" target="_blank" rel="noreferrer">Recipes!</a></p>
        </div>
        <form>
          <button className="restart-button" type="submit">Restart</button>
        </form>
      </section>
    </div>
  );
};

export default Overveiw