/* eslint-disable linebreak-style */
import React from 'react'

export const Results = ({ name, genre, movie, show }) => {
  return (
    <>
      <h3>Final Results!</h3>
      <p className="textResults">Hey {name}</p>
      <p className="textResults">Your favorite genre is {genre}</p>
      <p className="textResults">Your favorite movie (from this selection) is {movie}</p>
      <p className="textResults">Your favorite show is {show}</p>
    </>
  )
}