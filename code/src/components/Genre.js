/* eslint-disable linebreak-style */
import React from 'react'

export const Genre = ({ genre, setGenre }) => {
  const handleGenreChange = (event) => {
    setGenre(event.target.value)
  }
  return (
    <>
      <div className="genrePrompt">
        <p>What is your favorite genre?</p>
      </div>
      <div className="genreDropdown">
        <select
          value={genre}
          onChange={handleGenreChange}>
          <option disabled value="">Select your fav!</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Romance">Romance</option>
        </select>

      </div>
    </>
  )
}

/*

const options = [
    { value: 'action', label: 'Action' },
    { value: 'drama', label: 'Drama' },
    { value: 'comedy', label: 'Comedy' },
    { value: 'romance', label: 'Romance' }
  ]

  export const Genre = ({ genre, setGenre }) => {
    const handleGenreChange = (event) => {
      setGenre(event.target.value)
    }
    return (
      <div className="genreDropdown">
        <select
          value={genre}
          onChange={handleGenreChange}>
          {options.map((option) => (
          value={option.value}
          label={option.label}
          ))}
        </select>
      </div>
    )
  } */