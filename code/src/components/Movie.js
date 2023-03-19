import React from 'react'

export const Movie = ({ movie, setMovie }) => {
  const handleMovieChange = (event) => (
    setMovie(event.target.value)
  )
  return (
    <>
      <h3 className="moviePrompt">What is your favorite movie?</h3>
      <form className="movieFav"
        value={movie}
        onChange={handleMovieChange}>
        <label>
        <input type="radio" value="Arrival"/>
        Arrival
        </label>
        <label>
        <input type="radio" value="Love Actually"/>
        Love Actually
        </label>
        <label>
        <input type="radio" value="Everything, Everywhere, All At Once" />
        Everything, Everywhere, All At Once
        </label>
        <label>
        <input type="radio" value="Game Night" />
        Game Night
        </label>
      </form>
    </>
  )
}