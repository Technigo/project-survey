import React from 'react'
import { Header } from './Header'
import { Form } from './Form'
import './App.css'

export const App = () => {
  return (
    <section className="content-container">
      <header>
        <Header />
      </header>
      <Form />
    </section>
  )
}
