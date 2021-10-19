import React from 'react'
import Form from './components/Form'

const App = () => {
  return (
    <>
      <header>
        <a href="https://654.se" target="_blank" rel="noopener noreferrer">
          <img
            className="img-logo"
            src="/assets/654-logo.png"
            alt="brand logo"
          />
        </a>
      </header>
      <section className="main-container">
        <h1 className="head-title">Välkommen in till 6/5/4 familjen!</h1>
        <p className="signup-text">
          Få reda på specialerbjudanden, nyheter, event och annat skoj!
        </p>
        <div>
          <Form />
        </div>
      </section>
      <footer className="footer">
        <div>Logo </div>
        <div> Contact </div>
        <div> Social icons </div>
      </footer>
    </>
  )
}

export default App
