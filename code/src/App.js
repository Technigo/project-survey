import React from 'react'
import Header from './Header'
import Form from './Form'
import Footer from './Footer'

export const App = () => {
  return (
    <>
    <div>
      <Header/>
    </div>
    <div className="form-container">
      <Form/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}
