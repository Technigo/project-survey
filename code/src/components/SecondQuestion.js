import React from 'react';

const SecondQuestion = ({
    numberOne, 
    numberTwo, 
    onFirstNumberChange, 
    onSecondNumberChange
}) => {

return (
    <>
    <div>
    <label htmlFor="numberOne">Type first</label>
    <input
     id="numberOne"
        type="number"
        value={numberOne}
        onChange={onFirstNumberChange}
        />
        </div>
        <div>
          <label htmlFor="numberTwo">Type second</label>
    <input
     id="numberTwo"
        type="number"
        value={numberTwo}
        onChange={onSecondNumberChange}
        />
    </div>
    </>
)
}

export default SecondQuestion;