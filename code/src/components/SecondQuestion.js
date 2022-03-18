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
    <label htmlFor="numberOne">imaginary monsters</label>
    <input
     id="numberOne"
        type="number"
        value={numberOne}
        onChange={onFirstNumberChange}
        />
        </div>
        <div>
          <label htmlFor="numberTwo">real monsters</label>
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