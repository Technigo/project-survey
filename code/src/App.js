import React from 'react'
import { Form } from './components/Form.js'
import { Header } from './components/Header.js'
import { HeroImage } from './components/HeroImage.js'

export const App = () => {
  return (
    <>
      <div className="content">
        <div>
          <HeroImage class="heroimage" />
        </div>
        <div>
          <Header />
          <div className="container">
            <Form />
          </div>
        </div>
      </div>
    </>
  )
}
