import React, { useState } from 'react'
import { Summary } from './Summary'

const colorFavorite = ["blue", "pink", "green"];
// const adventureGroup = ["surfing", "climbing", "hiking"];

export const App = () => {

  //const [name, setName] = useState("");
  const [color, setColor] = useState();
  //const [adventures, setAdventures] = useState();

  return (
    <section> 


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

          { <Summary  color={color}/>}

    </section>
  )
}
