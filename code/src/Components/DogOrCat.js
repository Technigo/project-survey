import React from 'react'

import './dogOrCat.css'

export const DogOrCat = (props) => {
  const {animalLover, setAnimalLover} = props
  return (
    <div className="question">
            <label>
              <h3>Are you a dog person or a cat person?</h3>
                <div className="dropdown">
                  <select
                    onChange={event => setAnimalLover(event.target.value)}
                    value={animalLover}
                    required
                    >
                        <option value= "">Pick one!</option>
                        <option value= "a dog">Dog Lover</option>
                        <option value= "a cat">Cat Lover</option>
                        <option value= "not a">No animals!</option>
                        <option value= "a hamster">Hamsters!</option>
                  </select>
                </div>
            </label>
          </div>
  )
}