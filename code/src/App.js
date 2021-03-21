import React from 'react'
import { Survey } from './components/Survey'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Survey />
      <Footer />
    </div>
  )
}
