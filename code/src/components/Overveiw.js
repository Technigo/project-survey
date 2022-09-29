import React from 'react'

const hungerLevel = {
  1: 'You are full, but here are some recipes for later: ',
  2: 'You are feeling snacky, grab a cookie and check out these recipes: ',
  3: 'You are HUNGRY. Hurry, decide what you want to eat here: and run to the store!'
}

const Overveiw = ({ nameInput, preference, sortOfPasta, otherIngredient, hungerInput }) => {
  return (
    <div className="outer-wrapper">
      <div className="survey-container">
        <section className="overview-container">
          <h2>Rubrik för sammantsällning/recept </h2>
          <p>Name: {nameInput}</p>
          <p>Prefernce: {preference}</p>
          <p>Kind of pasta: {sortOfPasta}</p>
          <p>Second ingredient: {otherIngredient}</p>
          <p>Hunger: {hungerLevel[hungerInput]}</p>
          <h3>Thanks for participatin!</h3>
        </section>
        <footer>
          <h4>Created by Sarah Kneedler</h4>
        </footer>
      </div>
    </div>
  );
};

export default Overveiw