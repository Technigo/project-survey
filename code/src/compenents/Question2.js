import React from 'react'




const Question2 = ({ pet, house, Gryffindor, Hufflepuff, onPetChange, onStepChange}) => {
    
    const pets = ['Owl', 'Cat', 'Toad', 'Rat']



    return (
      <div>


        <section className="container">
            <article className="letter-container">
                <form className="form">
                    <h1>What pet would you like to bring with you?</h1>
                    <div className="pet-input-container">
                    {pets.map(pet => (
                        <label className="radio-button-text" key={pet}>
                            <input
                                className="radio-button"
                                type="radio"
                                value={pet}
                                onChange={onPetChange}
                                // checked={pets === pet}
                                >
                            </input>
                            {pet}
                        </label>
                    ))}
                    </div>
                   <button className='btn' type="button" onClick={onStepChange}>Next</button>
                   
                </form>
            </article>
        </section>
         

      </div>
    )
  }
  export default Question2