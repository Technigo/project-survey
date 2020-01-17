import React, { useState } from 'react'


// todo: 
// 3 Questions
// navigatoin between questions
// summary

// TODO bonus: extract values from: 
// inputRadio, select options

export const App = () => {
  const [name, setName ] = useState(null)
  const [dish, setDish] = useState(null)
  const [amount, setAmount] = useState(null)


  return (
    <div>

      <label>Tell me your name?
        <input type="text" 
          defaultValue={name} 
          onChange={ event => setName(event.target.value) } 
          placeholder="name"></input>
      </label>


      <label>
        What is your favorite dish?
      </label>

      <div>
        <label>
          <input required type="radio" name="dish" value="taco" 
          onClick={ event => setDish(event.target.value) } />
          Taco
        </label>

        <label>
          <input required type="radio" name="dish" value="abborre" 
            onClick={ event => setDish(event.target.value)}  />
          Aborre
        </label>

      </div>


      <div>

        <label htmlFor="sel">Hur många tacos äter du?</label>
        <select id="sel" 
          onChange={ event => setAmount(event.target.value) }> 
            <option value="">Ange antal</option>

            <option value="1">1</option>
            <option value="10">10</option>
            <option value="1000000000">Flera</option>
          

        </select>
          

      </div>


      <div>
        <h2>Dina svar</h2>
        <h3>namn: {name}</h3>
        <h3>fav dish: {dish}</h3>
        <h3>antal: {amount}</h3>
      </div>
      

    </div>
  )
}
