import React from 'react'
//import "./summary.css"

export const Summary = ({ firstName, lastName, occupation, location, education, wantsNewsletter, ageGroup, gender }) => {

  const news = wantsNewsletter ? 'News' : 'No news'

  return (
    <>
      <h1>Hej {firstName} {lastName}! You live in {location} are {ageGroup} and like {news} </h1>
      <h1>{occupation}</h1>
      <h1>{education}</h1>
      <h1>{gender}</h1>
    </>
  )
}



