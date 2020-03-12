import React, { useState } from 'react'
import { Summary } from './Summary'

const colorFavorite = ["blue", "pink", "green"];
const foodFavorite = ["pizza", "pasta", "sushi"];
//const sodaFavorite = ["fanta", "sprite", "coca cola"];



export const App = () => {

  const [color, setColor] = useState();
  const [food, setFood] = useState();
  const [pizza, setPizza] = useState("");
  //const [mostImportant, setMostImportant] = useState("");
  
  

  return (
    <section> 


          <p>Which type of pizza you prefer?</p>
          <select className="formDropdown"
            onChange={event => setPizza(event.target.value)}
            value={pizza}
          >
            <option value="">Choose your favorite!</option>
            <option value="margarita">Margarita</option>
            <option value="calzone">Calzone</option>
            <option value="vesuvio">Vesuvio</option>
          </select>


        <p>What color is your favorite?</p>
          <div className="Color">
            {colorFavorite.map(favorite => (
              <label key={favorite}>
                <input className="color"
                  type="checkbox"
                  value={favorite}
                  onChange={event => setColor(event.target.value)}
                  checked={color === favorite}
                />
                {favorite}
              </label>
            ))}
          </div>

          <p>Which type of food you prefer?</p>
          <div className="Food">
            {foodFavorite.map(favorite => (
              <label key={favorite}>
                <input className="food"
                  type="checkbox"
                  value={favorite}
                  onChange={event => setFood(event.target.value)}
                  checked={food === favorite}
                />
                {favorite}
              </label>
            ))}
          </div>

          { <Summary  color={color} food={food} pizza={pizza}/>}

    </section>
  )
}
