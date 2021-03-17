import React from 'react'
import { Form } from './components/Form.js'
import { Header } from './components/Header.js'
import { SubmitButton } from './components/SubmitButton.js'

export const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Form />
        <SubmitButton />
      </div>
    </div>
  )
}
