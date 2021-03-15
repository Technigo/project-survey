import React from 'react'


const Pets = (props) => {

  const {pets, setPets} = props

  const onPetsChange = (e) => {
    setPets(e.target.value)
    console.log(e.target.name)
  }

  return (
    <div className="survey-item pets">
      <label className="section-heading" htmlFor="pet">Do you have a pet?</label>
      <select name="pet" id="pet">
        <option value="">Choose below</option>
        <option onChange={onPetsChange} value={pets} name="dog">Dog</option>
        <option onChange={onPetsChange} value={pets} name="cat">Cat</option>
        <option onChange={onPetsChange} value={pets} name="bird">Bird</option>
        <option onChange={onPetsChange} value={pets} name="reptile">Reptile</option>
        <option onChange={onPetsChange} value={pets} name="no pets">I don't have a pet</option>
      </select>
    </div>
  )
}

export default Pets