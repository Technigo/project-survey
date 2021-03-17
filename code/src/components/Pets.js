import React from 'react'


const Pets = ({setPets, pets}) => {

  return (
    <div className="survey-item pets">
      <label className="section-heading" htmlFor="pet">Do you have a pet?</label>
      <select onChange={(e) => {setPets(e.target.value)}} id="pet" value={pets}>
        <option disabled>Choose below</option>
        <option>a dog</option>
        <option>a cat</option>
        <option>a bird</option>
        <option>a reptile</option>
        <option>no pets</option>
      </select>
    </div>
  )
}

export default Pets