import React from 'react'

import { Form } from './components/Form'
import { Header } from './components/Header'


export const App = () => {
  return (
    <main className="main">
      <div className="header">
      <Header />
      </div>
      <div className="form">
      <Form />
      </div>
    </main>
  )
}
