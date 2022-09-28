import React from 'react';

export const MusicGenre = ({ genre, setGenre }) => {
  const handleMusicGenre = (e) => {
    setGenre(e.target.value)
  }
  return (
    <form>
      <p>What is your favorite music genre when visiting a concert?</p>
      <select
        onChange={handleMusicGenre}
        value={genre}>
        <option value="">Select a genre:</option>
        <option value="pop">Pop</option>
        <option value="rock">Rock</option>
        <option value="hiphop">HipHop</option>
        <option value="rnb">RnB</option>
        <option value="country">Country</option>
        <option value="blues">Blues</option>
        <option value="other">Other</option>
      </select>
    </form>
  )
}