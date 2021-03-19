import React from 'react'

export const Summary = (props) => {
  const { genre, favorite, language, name, email } = props 
  // const [name, genre, language, email] = [props.name, props.genre, props.language, props.email]
  
  return (
    <>
      <div className="summary-wrapper">
        <div className="summary-text-container">
          <h2>Thank you {name}!</h2>
          <h3>This is a summary of your answers. Within a few minutes you will receive an e-&nbsp; mail with recommendations on books that we think you will love!</h3>
        </div>
        <div className="answers-container">
          <p><span className="bold-span">Genre: </span> {genre}</p>
          <p><span className="bold-span">Favorite book: </span> {favorite}</p>
          <p><span className="bold-span">Language: </span> {language}</p>
          <p><span className="bold-span">E-mail: </span> {email}</p>
        </div>
        </div>
        <div className="summary-img-container">
          <img className="summary-img" src="/assets/books_twig.jpg" alt="Three books with a twig with green leaves on top"/>
        </div>
    </>
  )
}