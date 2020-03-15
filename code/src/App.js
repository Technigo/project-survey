import React from 'react'
import { Question1 } from './components/Question1'
import { Question2 } from './components/Question2'
import { Question3 } from './components/Question3'
import { Name } from './components/Name'
import style from 'style.css' 
import index from 'index.js'

export const App = () => {
  return (
    <section className="Container">
      <header>
      <h1 class="heading">3 silly Questions!</h1>
      <h2>-asked purely for fun</h2>
    </header>
    <div className="name">
      <Name />
    </div>
    <section className="questions">
      <div class="question1">
        < Question1 />
      </div>
      <div className="question2">
        < Question2 />
      </div>
      <div className="question3">
        < Question3 />
      </div>
    </section>
    </section>
    )
  }
  