import React from 'react'
import Form from './components/Form'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <section className="main-container">
        <h1 className="head-title">Välkommen in till 6/5/4 familjen!</h1>
        <p className="signup-text">
          Få reda på specialerbjudanden, nyheter, event och annat skoj!
        </p>
        <div>
          <Form />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
