import React from 'react'


const Pets = (props) => {

  const [handleUserInput, input] = [props.handleUserInput, props.input]

  return (
    <div className="survey-item pets">
      <label className="section-heading" htmlFor="pet">Do you have a pet?</label>
      <select onChange={handleUserInput} id="pet">
        <option value="">Choose below</option>
        <option value={input} name="dog">Dog</option>
        <option value="cat" name="cat">Cat</option>
        <option value="bird" name="bird">Bird</option>
        <option value="reptile" name="reptile">Reptile</option>
        <option value="no pets" name="no-pets">I don't have a pet</option>
      </select>
    </div>
  )
}

export default Pets