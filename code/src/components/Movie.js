/* eslint-disable linebreak-style */
/* eslint-disable global-require */
import React from 'react'
import './Movie.css'

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
        <div className="arrival">
          <img src={require('./Assets/arrival.jpg')} alt="Arrival Movie" />
          <input type="radio" value="Arrival" />
        Arrival
        </div>
        <div className="loveActually">
          <img src={require('./Assets/love-actually.jpg')} alt="Love Actually Movie" />
          <input type="radio" value="Love Actually" />
        Love Actually
        </div>
        <div className="eeaao">
          <img src={require('./Assets/everything-everywhere.jpg')} alt="Everything, Everywhere, All at Once Movie" />
          <input type="radio" value="Everything, Everywhere, All At Once" />
        Everything, Everywhere, All At Once
        </div>
        <div className="gameNight">
          <img src={require('./Assets/game-night.jpg')} alt="Game Night Movie" />
          <input type="radio" value="Game Night" />
        Game Night
        </div>
      </form>
    </>
  )
}