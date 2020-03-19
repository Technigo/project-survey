import React from 'react'
//import "./summary.css"

export const Summary = ({ name, lastName, location, wantsNewsletter, ageGroup }) => {

  const news = wantsNewsletter ? 'News' : 'No news'

  return (
    <div>
      <h1>Hej {name} {lastName}! You live in {location} are {ageGroup} and like {news} </h1>
    </div>
  )
}



