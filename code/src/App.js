import React, { useState } from 'react'
import { Question1 } from './components/Question1'
import { Question2 } from './components/Question2'
import { Question3 } from './components/Question3'
import { Name } from './components/Name'
import style from 'style.css'
import index from 'index.js'
import radio from 'radio.css'
import dropdown from 'dropdown.css'
import { Summary } from './components/Summary'

export const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    setshowSummary(true)
  }
  const [name, setName] = useState("")
  const [animal, setAnimal] = useState("Cockroach")
  const [wouldYouRather, setwouldYouRather] = useState()
  const [riding, setRiding] = useState()
  const [showSummary, setshowSummary] = useState(false)

  return (
    <div className="container">
      <header>
        <h1 className="heading">Silly Questions 🤪</h1>
        <h2>made only for my amusement</h2>
      </header>


      {!showSummary ? (
        <form onSubmit={handleSubmit}>
          <div className="form-container">

            <section className="name">
              < Name name={name} setName={setName} />
            </section>

            <section className="question1">
              <Question1 animal={animal} setAnimal={setAnimal} />
            </section>


            <section className="question2">
              <Question2 wouldYouRather={wouldYouRather} setwouldYouRather={setwouldYouRather} />

            </section>

            <section className="Question3">

              <Question3 riding={riding} setRiding={setRiding} />
            </section>

            <section className="submit">
              <button type="submit">Submit your answers!</button>
            </section>
          </div>
        </form>



      ) : (
          <section className="submit">
            < Summary name={name} riding={riding} animal={animal} />
          </section>
        )}

    </div>
  )
}



