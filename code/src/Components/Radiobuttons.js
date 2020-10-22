import React from 'react'

/* Array for plants */
const favoritePlants = ['Monstera', 'Cactus', 'Begonia', 'Oxalis', 'Aloe Vera', 'Fiddle Leaf Fig', 'Chinese Money Plant', 'Philodendron', 'Umbrella tree'];

const Radiobuttons = (props) => {
    
    /* Sending in favouritePlant and onSelectRadio as props */
    const {favoritePlant, onSelectRadio } = props 

    return (
        <section className='question3-wrapper'>
            <h3 className="question-header">
                3. If you had to choose, which is your favorite plant?
                <span role="img" aria-label='cactus'> 🌵 </span> 
            </h3>

            {/* Mapping over the plants array, generating a lable and input for each of the array items */}
            {favoritePlants.map(plant => (
              <label htmlFor={favoritePlant} key={plant}> {/* When using an array, each item needs to be given a unique key */}
                  <input 
                  className="radio-btn"
                  type='radio'
                  name='radio'
                  value={plant}
                  id={plant}
                  onChange={event => onSelectRadio(event.target.value)}
                  checked={favoritePlant === plant}
                  />
                   {plant} 
              </label>
              ))}
        </section>
    )
}

export default Radiobuttons;