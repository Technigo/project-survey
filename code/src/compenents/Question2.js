import React from 'react'




const Question2 = ({ pet, onPetChange, onStepChange}) => {
    
    const pets = ['Owl', 'Cat', 'Toad', 'rat']

    return (
      <div>
        <section className="container">
            <article class="letter-container">
                <form className="form">
                    <h1>What pet would you like to bring with you?</h1>
                    {pets.map(pet => (
                        <label className="radio-button-overlay" key={pet}>
                            <input
                                className="radio-button"
                                type="radio"
                                value={pet}
                                onChange={onPetChange}
                                checked={pets === pet}>
                            </input>
                            {pet}
                        </label>
                    ))}
                </form>
                <button className='next-btn' type="button" onClick={onStepChange}>Next</button>
            </article>
        </section>
         

      </div>
    )
  }
  export default Question2