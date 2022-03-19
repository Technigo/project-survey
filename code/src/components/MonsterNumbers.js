import React from 'react';

const MonsterNumbers = ({
    numberOne, 
    numberTwo, 
    onFirstNumberChange, 
    onSecondNumberChange
}) => {

return (
    <>
    <div>
    <label htmlFor="numberOne">
        <p className="question-text">imaginary monsters</p>
        </label>
    <input className="choice-boxes"
     id="numberOne"
        type="number"
        value={numberOne}
        onChange={onFirstNumberChange}
        />
        </div>
        <div>
          <label htmlFor="numberTwo">
          <p className="question-text">real monsters</p>
          </label>
    <input className="choice-boxes"
     id="numberTwo"
        type="number"
        value={numberTwo}
        onChange={onSecondNumberChange}
        />
    </div>
    </>
)
}

export default MonsterNumbers;
