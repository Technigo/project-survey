import React from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'

export const App = () => {
  return (
    <>
      <Header />
      <section className="about">
        <h2>Looking for something to read? Fill in the form below and you will receive an e-mail with 
        recommendations for your new reading adventure!</h2>
      </section>
      <Form />
    </>
  )
}
