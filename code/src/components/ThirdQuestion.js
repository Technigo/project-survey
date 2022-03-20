import React from 'react'

const extras =["chilli", "kebab", "chicken", "salami"]

 const ThirdQuestion = ({radioInput, handleRadioChange, backSlide, forwardSlide}) => {
  
  return (
    <div className='container'>
      <div className='form-container'>
        Extra topping:
        {extras.map(element => (
          <label key={element} htmlFor="lang">
            <input
            id="lang" 
            type="radio"
            value={element}
            onChange={handleRadioChange}
            checked={radioInput === element}
            /> 
            {element}
          </label>
        ))}
      
        <div className='buttons'>
          <button className='button' onClick={backSlide}>
              Back
          </button>
          <button 
          className='button'
          disabled={radioInput === ''} 
          onClick={forwardSlide}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdQuestion;
