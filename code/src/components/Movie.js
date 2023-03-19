/* eslint-disable linebreak-style */
import React from 'react'

export const Movie = ({ movie, setMovie }) => {
  const handleMovieChange = (event) => (
    setMovie(event.target.value)
  )
  return (
    <>
      <h3 className="moviePrompt">What is your favorite movie?</h3>
      <form
        className="movieFav"
        value={movie}
        onChange={handleMovieChange}>
        <div>
          <input type="radio" value="Arrival" />
        Arrival
        </div>
        <div>
          <input type="radio" value="Love Actually" />
        Love Actually
        </div>
        <div>
          <input type="radio" value="Everything, Everywhere, All At Once" />
        Everything, Everywhere, All At Once
        </div>
        <div>
          <input type="radio" value="Game Night" />
        Game Night
        </div>
      </form>
    </>
  )
}