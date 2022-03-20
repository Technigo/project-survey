import React from 'react'

const SecondQuestion = ({flavourInput, handleSelectChange, backSlide, forwardSlide}) => {
  return (
    <div className='container'>
      <div className='form-container'>
          <form>
            <h1>Select your pizza flavour</h1>
              <select value={flavourInput} onChange={handleSelectChange}>
                <option value="">Select your pizza:</option>
                <option value="Margherita">Margherita</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Calzone">Calzone</option>
                <option value="Capricciosa">Capricciosa</option>
                <option value="Napoletana">Napoletana</option>
              </select>
          
            <div className='buttons'>
              <button className='button' onClick={backSlide}>
              Back
              </button>
              <button 
                className='button'
                disabled={flavourInput === ''} 
                onClick={forwardSlide}
                >
                Next
              </button> 
            </div>
          </form>       
      </div>
    </div>
    )
}

export default SecondQuestion;