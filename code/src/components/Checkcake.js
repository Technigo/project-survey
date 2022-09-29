import React from 'react';
import Choco from '../images/choco.jpg';

const Checkcake = (props) => {
  const { cakeOption, onCakeOptionChange, onCounterChange } = props
  return (
    <div className="container">
      <h3>Which cakes are your favourite? (please choose 2 or more)</h3>
      <div className="cake">
        <label htmlFor="cake" className="checkButtonContainer">
          <input
            type="checkbox"
            value="Red Velvet"
            checked={cakeOption.includes('Red Velvet')}
            onChange={() => onCakeOptionChange('Red Velvet')} />
          <img
            className="image"
            src={Choco}
            alt="choco" />
          <span className="checkmarkCheck" />
        </label>

        <label htmlFor="cake" className="checkButtonContainer">
          <input
            type="checkbox"
            value="Triple Chocolate"
            checked={cakeOption.includes('Triple Chocolate')}
            onChange={() => onCakeOptionChange('Triple Chocolate')} />
            Triple Chocolate
          <span className="checkmarkCheck" />
        </label>

        <label htmlFor="cake" className="checkButtonContainer">
          <input
            type="checkbox"
            value="Vanilla"
            checked={cakeOption.includes('Vanilla')}
            onChange={() => onCakeOptionChange('Vanilla')} />
            Vanilla
          <span className="checkmarkCheck" />
        </label>

        <label htmlFor="cake" className="checkButtonContainer">
          <input
            type="checkbox"
            value="Mango Passion"
            checked={cakeOption.includes('Mango Passion')}
            onChange={() => onCakeOptionChange('Mango Passion')} />
            Mango Passion
          <span className="checkmarkCheck" />
        </label>

        <label htmlFor="cake" className="checkButtonContainer">
          <input
            type="checkbox"
            value="Carrot Cake"
            checked={cakeOption.includes('Carrot Cake')}
            onChange={() => onCakeOptionChange('Carrot Cake')} />
            Carrot Cake
          <span className="checkmarkCheck" />
        </label>

        <label htmlFor="cake" className="checkButtonContainer">
          <input
            type="checkbox"
            value="Coffee Toffee"
            checked={cakeOption.includes('Coffee Toffee')}
            onChange={() => onCakeOptionChange('Coffee Toffee')} />
            Coffee Toffee
          <span className="checkmarkCheck" />
        </label>

      </div>
      <button type="button" onClick={onCounterChange}>Continue</button>
    </div>
  );
};

export default Checkcake;