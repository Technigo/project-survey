import React from 'react';

const Firstquestion = (props) => {
  const { cakeOption, onCakeOptionChange, onCounterChange } = props
  return (
    <div className="cakeContainer">
      <p className="labelStyle">Which cakes are your favourite?</p>
      <div className="cake">
        <div className="cakeContainer">
          <label htmlFor="cake" className="checkButtonContainer">Red Velvet
            <input
              type="checkbox"
              value="Red Velvet"
              checked={cakeOption.includes('Red Velvet')}
              onChange={() => onCakeOptionChange('Red Velvet')} />
            <span className="checkmarkCheck" />
          </label>
        </div>
        <div className="cakeContainer">
          <label htmlFor="cake" className="checkButtonContainer">Triple Chocolate
            <input
              type="checkbox"
              value="Triple Chocolate"
              checked={cakeOption.includes('Triple Chocolate')}
              onChange={() => onCakeOptionChange('Triple Chocolate')} />
            <span className="checkmarkCheck" />
          </label>
        </div>
        <div className="cakeContainer">
          <label htmlFor="cake" className="checkButtonContainer">Vanilla
            <input
              type="checkbox"
              value="Vanilla"
              checked={cakeOption.includes('Vanilla')}
              onChange={() => onCakeOptionChange('Vanilla')} />
            <span className="checkmarkCheck" />
          </label>
        </div>
        <div className="cakeContainer">
          <label htmlFor="cake" className="checkButtonContainer">Mango Passion
            <input
              type="checkbox"
              value="Mango Passion"
              checked={cakeOption.includes('Mango Passion')}
              onChange={() => onCakeOptionChange('Mango Passion')} />
            <span className="checkmarkCheck" />
          </label>
        </div>
        <div className="cakeContainer">
          <label htmlFor="cake" className="checkButtonContainer">Carrot Cake
            <input
              type="checkbox"
              value="Carrot Cake"
              checked={cakeOption.includes('Carrot Cake')}
              onChange={() => onCakeOptionChange('Carrot Cake')} />
            <span className="checkmarkCheck" />
          </label>
        </div>
        <div className="cakeContainer">
          <label htmlFor="cake" className="checkButtonContainer">Coffee Toffee
            <input
              type="checkbox"
              value="Coffee Toffee"
              checked={cakeOption.includes('Coffee Toffee')}
              onChange={() => onCakeOptionChange('Coffee Toffee')} />
            <span className="checkmarkCheck" />
          </label>
        </div>
      </div>
      <button type="button" onClick={onCounterChange}>Continue</button>
    </div>
  );
};

export default Firstquestion;