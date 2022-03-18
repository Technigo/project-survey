import React from 'react'

const Question2 = ({ pet,  onPetChange, onStepChange}) => {
    
    const pets = ['Owl', 'Cat', 'Toad', 'Rat']

    return (
      <div>
            <article className="letter-container">
                <form className="form">
                    <h1 tabindex="0">What pet would you like to bring with you?</h1>
                    <div className="pet-input-container">
                        {pets.map(pet => (
                            <label className="radio-button-text" key={pet} tabindex="0">
                                <input
                                    className="radio-button"
                                    type="radio"
                                    value={pet}
                                    onChange={onPetChange}
                                    tabindex="0"
                                    >
                                </input>
                                {pet}
                            </label>
                        ))}
                    </div>
                   <button className='btn' type="button" onClick={onStepChange} tabindex="0">Next</button>  
                </form>
            </article>
      </div>
    )
  }
  export default Question2