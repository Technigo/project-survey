import React, { useState } from 'react'
import { Summary } from './Summary'
import { Header } from './Header'

const sodaFavorite = ["fanta", "coca cola", "sprite"];
const sauceFavorite = ["garlic", "béarnaise", "hot sauce"];

export const App = () => {

  const [pizza, setPizza] = useState("");
  const [soda, setSoda] = useState();
  const [sauce, setSauce] = useState();
  const [submitted, setSubmitted] = useState(false)

  return (
    <section> 

      <Header />

        <section className="Main">

        {!submitted && (

        <form onSubmit={event => event.preventDefault()}>

          <section className="firstSection">

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

          </section>
        
          <div className="Soda">
          <p>Which drink do you prefer for your pizza?</p>
            {sodaFavorite.map(favorite => (
              <label key={favorite}>
                <input className="soda"
                  type="radio"
                  value={favorite}
                  onChange={event => setSoda(event.target.value)}
                  checked={soda === favorite}
                />
                {favorite}
              </label>
            ))}
          </div>

          <div className="Sauce">
          <p>Which sauce do you prefer for your pizza?</p>
            {sauceFavorite.map(favorite => (
              <label key={favorite}>
                <input className="sauce"
                  type="radio"
                  value={favorite}
                  onChange={event => setSauce(event.target.value)}
                  checked={sauce === favorite}
                />
                {favorite}
              </label>
            ))}
          </div>

         <button className="submitButton"
          onClick={ () => setSubmitted(true)}
         >SUBMIT
            </button>
          </form>

          )}
            {submitted && <Summary  soda={soda} pizza={pizza} sauce={sauce}/>}
            </section>
    </section>
  )
}
