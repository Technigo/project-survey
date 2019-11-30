import React from 'react'
import { Form } from './Components/Form'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Form />
      <Footer />
    </div>
  )
}
