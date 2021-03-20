import React from 'react';

const condiment = ["mustard", "mayo", "tomato sauce", "garlic sauce", "remoulade"];


const Condiments = ({onCondimentChange}) => {
 
  return (
    <>
    <div className='condiments'>
      <h1 tabIndex="0" className='condiments-heading'>What is your go-to condiment?</h1>
      {condiment.map(value => (
        <label
        key={value}
        label='condiment'
        className='condiments'
        >
          <input
            name='condiment'
            className='condiments'
            type="radio"
            value={condiment}
            onChange={onCondimentChange}
            />
        </label>
      ))}
    </div>
    </>
    );
  };


 export default Condiments;