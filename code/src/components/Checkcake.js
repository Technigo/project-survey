import React from 'react';
import Strawberry from '../images/strawberry.jpg';
import Caramel from '../images/caramel.jpg';
import Raspberryroll from '../images/raspberry.jpg';
import Peachwalnut from '../images/peachwalnut.jpg';
import Coffee from '../images/coffee.jpg';
import Orange from '../images/orange.jpg';

const Checkcake = (props) => {
  const { cakeOption, onCakeOptionChange, onCounterChange } = props
  return (
    <div className="container">
      <h3>Which cakes are your favourite? (please choose 2 or more)</h3>
      <div className="cake">
        <label htmlFor="cake" className="checkButtonContainer">
          <input
            type="checkbox"
            value="Strawberry Shortcake"
            checked={cakeOption.includes('Strawberry Shortcake')}
            onChange={() => onCakeOptionChange('Strawberry Shortcake')} />
          <a href="" target="_blank"> <img
            className="image"
            src={Strawberry}
            alt="Strawberry Shortcake" />
          </a>
        </label>

        <label htmlFor="cake" className="checkButtonContainer">
          <input
            type="checkbox"
            value="Salted Caramel Cake"
            checked={cakeOption.includes('Salted Caramel Cake')}
            onChange={() => onCakeOptionChange('Salted Caramel Cake')} />
          <img
            className="image"
            src={Caramel}
            alt="Salted Caramel Cake" />
        </label>

        <label htmlFor="cake" className="checkButtonContainer">
          <input
            type="checkbox"
            value="Raspberry Rollcake"
            checked={cakeOption.includes('Raspberry Rollcake')}
            onChange={() => onCakeOptionChange('Raspberry Rollcake')} />
          <img
            className="image"
            src={Raspberryroll}
            alt="Raspberry Rollcake" />
        </label>

        <label htmlFor="cake" className="checkButtonContainer">
          <input
            type="checkbox"
            value="Peach and Walnut Cake"
            checked={cakeOption.includes('Peach and Walnut Cake')}
            onChange={() => onCakeOptionChange('Peach and Walnut Cake')} />
          <img
            className="image"
            src={Peachwalnut}
            alt="Peach and Walnut Cake" />
        </label>

        <label htmlFor="cake" className="checkButtonContainer">
          <input
            type="checkbox"
            value="Coffee Latte Cake"
            checked={cakeOption.includes('Coffee Latte Cake')}
            onChange={() => onCakeOptionChange('Coffee Latte Cake')} />
          <img
            className="image"
            src={Coffee}
            alt="Coffee Latte Cake" />
        </label>

        <label htmlFor="cake" className="checkButtonContainer">
          <input
            type="checkbox"
            value="Orange Cake"
            checked={cakeOption.includes('Orange Cake')}
            onChange={() => onCakeOptionChange('Orange Cake')} />
          <img
            className="image"
            src={Orange}
            alt="Orange Cake" />
        </label>

      </div>
      <button type="button" onClick={onCounterChange}>Continue</button>
    </div>
  );
};

export default Checkcake;