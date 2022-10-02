import React from 'react';

export const Drink = ({ drink, setDrink }) => {
  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  }
  return (
    <div className="outerWrapper">
      <div className="questionContainer">
        <img className="questionImage" alt="coffee" src="https://images.unsplash.com/photo-1621135177072-57c9b6242e7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
        <p className="question3">What would you like to drink?</p>
        <div>
          <div className="inputContainer">
            <input
              className="inputRadio"
              type="radio"
              id="drinkOne"
              value="Coffee"
              onChange={handleDrinkChange}
              checked={drink === 'Coffee'} /> Coffee
          </div>
          <div className="inputContainer">
            <input
              className="inputRadio"
              type="radio"
              value="Tea"
              onChange={handleDrinkChange}
              checked={drink === 'Tea'} /> Tea
          </div>
          <div className="inputContainer">
            <input
              className="inputRadio"
              type="radio"
              value="Fresh OJ"
              onChange={handleDrinkChange}
              checked={drink === 'Fresh OJ'} /> Fresh OJ
          </div>
          <div className="inputContainer">
            <input
              className="inputRadio"
              type="radio"
              value="Water"
              onChange={handleDrinkChange}
              checked={drink === 'Water'} /> Water
          </div>
        </div>
      </div>
    </div>
  );
}
export default Drink