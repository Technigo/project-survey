import React from 'react';

const condimentsArray = ["mustard", "mayo", "tomato sauce", "garlic sauce", "remoulade"];


const Condiments = ( {onCondimentChange} ) => {
 
  return (
    <>
    <div className='condiments-header'>
      <h1 tabIndex="0" className='condiments-heading'>What is your go-to condiment?</h1>
      {condimentsArray.map(id => (
        <label
        key={id}
        label='condiment'
        className='condiments-container'
        >
          <input
            name='condiment'
            className='condiments'
            type="radio"
            value={id}
            onChange={onCondimentChange}
            />
        </label>
      ))}
    </div>
    </>
    );
  };


 export default Condiments;