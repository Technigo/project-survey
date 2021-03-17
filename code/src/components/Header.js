import React from 'react'

export const Header = () => {
  return (
    <>
      <header className="header">
        <picture>
          {/* <source srcset="/assets/books_small.jpg" media="(max-width: 600px)" alt="Hand holding up a stack of books"/>
          <source srcset="/assets/books_medium.jpg" media="(max-width: 900px)" alt="Hand holding up a stack of books"/> */}
          <img className="header-img" src="/assets/books_large.jpg" alt="Hand holding up a stack of books"/>
        </picture>
          <h1 className="header-text">Book tips</h1>
      </header>
      <section className="about">
        <h2>Hi, and welcome to Book Tips!</h2>
        <h3>Looking for something to read? Fill in the form below and you will receive an e-mail with 
        recommendations for your next reading adventure!</h3>
      </section>
    </>
  )
}