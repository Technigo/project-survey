import React from 'react'
import './index.css'


const animalsArray = ["long hair", "short hair", "naked"];

<div>
  <header>
    <h1>What kind of cat do you want?</h1>
  </header>

  <form className="form" >
    
    <div>
      What animal would you like to have?
      {animalsArray.map(animal => (
        <label key={animal}>
          <input
            type='radio'
            value={animal}
            onChange={event => setAnimal(event.target.value)}
            checked={petAnimal === animal}
            required
          />
          {animal}
        </label>
      ))}
    </div>
    
    <div>
      <label>Cats gender</label>
      <select
        id="gender"
        required
        onChange={event => setGender(event.target.value)}
      >
        <option value="">Select</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Does not matter">Does not matter</option>
      </select>
    </div>

    <div>
      <label>What color do you like best on a cat</label>
      <input
      type='text'
      onChange={event => setColor(event.target.value)}
      required
      value={color}
      />
    </div>

    <div>
      <label>Your cats name</label>
      <input
      type='text'
      onChange={event => setName(event.target.value)}
      required
      value={name}
      />
    </div>
   <button type="submit">Send</button>
  </form>
</div>
