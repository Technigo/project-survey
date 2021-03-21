import React from 'react'

import { Form } from './components/Form'
import { Header } from './components/Header'
import { Footer } from './components/Footer'


export const App = () => {
  return (
    <>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <Form />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </>
  )
}
