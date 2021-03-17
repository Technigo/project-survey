import React from 'react'

export const Summary = (props) => {
  const [name, genre, language, email] = [props.name, props.genre, props.language, props.email]
  
  return (
    <div className="summary">
      <p>Name: {name}</p>
      <p>Genre: {genre}</p>
      <p>Language: {language}</p>
      <p>E-mail: {email}</p>
    </div>
  )
}