import React, { useState } from 'react'
import { Summary } from './Summary'
import { Header } from './Header'

const sodaFavorite = ["fanta", "pepsi", "sprite"];

export const App = () => {

  const [pizza, setPizza] = useState("");
  const [soda, setSoda] = useState();
  const [sauce, setSauce] = useState();
  const [submitted, setSubmitted] = useState(false)

  return (
    <section> 

      <Header />

        {!submitted && (

        <form onSubmit={event => event.preventDefault()}>

          <section className="firstSection">

          <p>Which type of pizza you prefer?</p>
          <select 
            className="formDropdown"
            onChange={event => setPizza(event.target.value)}
            value={pizza}
          >
            <option value="">Choose your favorite!</option>
            <option value="Margarita">Margarita</option>
            <option value="Calzone">Calzone</option>
            <option value="Vesuvio">Vesuvio</option>
          </select>

          </section>

          <section className="secondSection">

          <p>Which sauce do you prefer for your pizza?</p>
          <select className="formDropdown"
            onChange={event => setSauce(event.target.value)}
            value={sauce}
          >
            <option value="">Choose your favorite!</option>
            <option value="garlic">Garlic</option>
            <option value="béarnaise">Béarnaise</option>
            <option value="hot sauce">Hot Sauce</option>
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

          <section className="buttonSection">

          <button className="submitButton"
            onClick={ () => setSubmitted(true)}
          >SUBMIT
              </button>
            </section>
          </form>

          )}
            {submitted && <Summary  soda={soda} pizza={pizza} sauce={sauce}/>}
    </section>
  )
}
