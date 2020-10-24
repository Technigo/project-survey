import React from 'react'

const Question2 = ({section, setSection, livingspace,setLivingspace}) => {
    
    return(
      <>
      <div className="second-question-section">
        <label htmlFor='second-question'>
            <h2 className='second-question-heading' tabIndex='0'> Do you live in an apartment or in a house ? </h2>
        </label>
        <select
          id="third-question"
          onChange={(event) => setLivingspace(event.target.value)}
          value={livingspace}
          aria-label='select-menu'
          required>
            <option value=''>Pick a type how you live </option>
            <option value='Apartment'>Apartment </option>
            <option value='Small house'>Small house</option>
            <option value='Big house'>Big house </option>
        </select>
        <button className="next-button" 
              value="thirdQuestion"
              onClick={event => setSection(event.target.value)}
              type="button">Next question</button>
        </div>
      </>
          )
    }
      
export default Question2