//Question 3
import React from "react";

const games = ["Tipspromenad", "Kubb", "I don't like games"];
const snacks = [
  "Popcorn",
  "Chips",
  "Icecream",
  "Cockies",
  "I dont like snacks",
];
const licorice = ["Salty licorice", "Sweet licorice", "I don't like licorice"];
const drinks = ["Soda", "Bear", "Wine", "I can't decide..."];

const Preferences = ({
  game,
  onGameChange,
  onStepChange,
  snack,
  onSnacksChange,
  licoriceCandy,
  onLicoriceCandyChange,
  drink,
  onDrinkChange,
}) => {
  return (
    <div className="container">
      <div className="thirdQuestion">
        <h1>What do you like better?</h1>
        <h2>Pick the one alternative you like the most!</h2>

        <form className="radio-buttons">
          <h3>What would you like to drink at the party?</h3>
          {drinks.map((currentDrink) => (
            <label key={currentDrink}>
              <input
                type="radio"
                onChange={onDrinkChange}
                value={currentDrink}
                checked={drink === currentDrink}
              ></input>
              {currentDrink}
            </label>
          ))}
        </form>

        <form className="radio-buttons">
          <h3>what kind of game do you like?</h3>
          {games.map((currentGame) => (
            <label key={currentGame}>
              <input
                type="radio"
                onChange={onGameChange}
                value={currentGame}
                checked={game === currentGame}
              ></input>
              {currentGame}
            </label>
          ))}
        </form>
        <form className="radio-buttons">
          <h3>What kind of snack do you like?</h3>
          {snacks.map((currentSnacks) => (
            <label key={currentSnacks}>
              <input
                type="radio"
                onChange={onSnacksChange}
                value={currentSnacks}
                checked={snack === currentSnacks}
              ></input>
              {currentSnacks}
            </label>
          ))}
        </form>

        <form className="radio-buttons">
          <h3>
            I love licorice, so there will be some different kinds at the party,
            witch kind do you like?
          </h3>
          {licorice.map((currentLicorice) => (
            <label key={currentLicorice}>
              <input
                type="radio"
                onChange={onLicoriceCandyChange}
                value={currentLicorice}
                checked={licoriceCandy === currentLicorice}
              ></input>
              {currentLicorice}
            </label>
          ))}
        </form>

        <button onClick={onStepChange}>Next Question</button>
      </div>
    </div>
  );
};

export default Preferences;
