import React from 'react'

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

{/* <option value= "">Select option:</option>
          <option value= "dogs">Dog Lover <span role="img" aria-label="dog emoji">{'\u{1F436}'}</span></option>
          <option value= "cats">Cat Lover <span role="img" aria-label="cat emoji">🐱</span></option>
          <option value= "hatesAnimals">No animals! <span role="img" aria-label="poop emoji">💩</span></option>
          <option value= "hamsters">Hamsters! <span role="img" aria-label="hamster emoji">🐹</span></option> */}