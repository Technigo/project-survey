import React from 'react';

const Firstquestion = (props) => {
  const { cakeArray, onCakeArrayChange } = props
  return (
    <div className="cakeContainer">
      <p className="labelStyle">Which cakes are your favourite?</p>
      <div className="cake">
        <div className="cakeContainer">
          <label htmlFor="cake" className="checkButtonContainer">Red Velvet
            <input
              type="checkbox"
              value="Red Velvet"
              checked={cakeArray.includes('Red Velvet')}
              onCakeChange={() => onCakeArrayChange('Red Velvet')} />
            <span className="checkmarkCheck" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Firstquestion;