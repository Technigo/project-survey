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
      <div className="cake-container">
        <form className="cake-checkbox">
          <input
            className="checkboxes"
            type="checkbox"
            value="Strawberry Shortcake"
            checked={cakeOption.includes('Strawberry Shortcake')}
            onChange={() => onCakeOptionChange('Strawberry Shortcake')} />
          <div className="cake-image"><img
            src={Strawberry}
            alt="Strawberry Shortcake" />
          </div>
        </form>
        <form className="cake-checkbox">
          <input
            className="checkboxes"
            type="checkbox"
            value="Salted Caramel Cake"
            checked={cakeOption.includes('Salted Caramel Cake')}
            onChange={() => onCakeOptionChange('Salted Caramel Cake')} />
          <div className="cake-image"><img
            src={Caramel}
            alt="Salted Caramel Cake" />
          </div>
        </form>

        <form className="cake-checkbox">
          <input
            className="checkboxes"
            type="checkbox"
            value="Raspberry Rollcake"
            checked={cakeOption.includes('Raspberry Rollcake')}
            onChange={() => onCakeOptionChange('Raspberry Rollcake')} />
          <div className="cake-image"><img
            src={Raspberryroll}
            alt="Raspberry Rollcake" />
          </div>
        </form>

        <form className="cake-checkbox">
          <input
            className="checkboxes"
            type="checkbox"
            value="Peach and Walnut Cake"
            checked={cakeOption.includes('Peach and Walnut Cake')}
            onChange={() => onCakeOptionChange('Peach and Walnut Cake')} />
          <div className="cake-image"><img
            src={Peachwalnut}
            alt="Peach and Walnut Cake" />
          </div>
        </form>
        <form className="cake-checkbox">
          <input
            className="checkboxes"
            type="checkbox"
            value="Coffee Latte Cake"
            checked={cakeOption.includes('Coffee Latte Cake')}
            onChange={() => onCakeOptionChange('Coffee Latte Cake')} />
          <div className="cake-image"><img
            src={Coffee}
            alt="Coffee Latte Cake" />
          </div>
        </form>
        <form className="cake-checkbox">
          <input
            className="checkboxes"
            type="checkbox"
            value="Orange Cake"
            checked={cakeOption.includes('Orange Cake')}
            onChange={() => onCakeOptionChange('Orange Cake')} />
          <div className="cake-image"><img
            src={Orange}
            alt="Orange Cake" />
          </div>
        </form>

      </div>
      <button type="button" onClick={onCounterChange}>Continue</button>
    </div>
  );
};

export default Checkcake;