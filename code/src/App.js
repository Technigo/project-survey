import React from 'react'
import Header from './Components/Header'
import Form from './Components/Form'
import Footer from './Components/Footer'


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
