import React from 'react'

import Form from './Form';


export const App = () => {
  


  return (
    <>
    <header className="header">
      <nav className="nav-bar">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
      </nav>
    </header>
    <div className="question-container">
      <Form />

  
    </div>
    </>
  )
}
