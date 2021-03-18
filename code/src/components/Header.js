import React from 'react'

export const Header = () => {
  return (
    <>
      <header className="header">
        <img className="header-img" src="/assets/books.jpg" alt="Hand holding up a stack of books"/>
        <h1 className="header-text">Book Tips</h1>
      </header>
      <section className="about">
        <h2>Hi, and welcome to Book Tips!</h2>
        <h3>Looking for something to read? Fill in the form below and you will receive an e-mail with 
        recommendations for your next reading adventure!</h3>
      </section>
    </>
  )
}