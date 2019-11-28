import React from 'react'
import hero from './hero.png'

import './App.css'
import './index.css'
import './header.css'


export const App = () => {
  return (

    <div>
      <header>
        <img src={hero} height="400px" width="auto" />
        <h1>How well do you really know each other?</h1>
        <button onClick="">Find out here</button>
      </header>
      <article>
        <h1>All the questions</h1>
        <h2>What is your name? - Text field</h2>
        <h2>Question 2- What is your nickname of your partner? - Text field</h2>
        <h2>Question 3 - Do you know your partner? - Radio button yes/no</h2>
        <h2>Question 4 - What is your partner to you? Choose from the list. - Drop down menu</h2>
        <button onClick="">Submit</button>
        <h1>The result</h1>
      </article>
      <footer>
      </footer>
    </div>
  )
}
