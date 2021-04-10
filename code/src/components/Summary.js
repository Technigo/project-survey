import React from 'react'

export const Summary = props => {
  const { genre, favorite, language, name, email } = props 
  
  return (
    <>
      <div className="summary-wrapper">
        <div className="summary-text-container">
          <h2>Thank you {name}!</h2>
          <h3>This is a summary of your answers. Within a few minutes you will receive an e-mail with recommendations on books that we think you will love!</h3>
        </div>
        <div className="answers-container">
          <p><span className="bold-span">Genre: </span> {genre}</p>
          <p><span className="bold-span">Favorite book: </span> {favorite}</p>
          <p><span className="bold-span">Language: </span> {language}</p>
          <p><span className="bold-span">E-mail: </span> {email}</p>
        </div>
      </div>
    </>
  )
}