import React, { useState } from "react"

const songs = [
  'Happy birthday',
  'Itsy bitsy spider',
  'Row row row your boat',
]

export const Radio = () => {
  const [WhichSong, setWhichSong] = useState("")

  return (

    <form>
      <div className="song-check">

        <h2>Which of these songs do you sing while washing your hands?</h2>

        {songs.map(song => (
          <label key={song}>
            <input
              type="radio"
              value={song}
              onChange={event => setWhichSong(event.target.value)}
              checked={WhichSong === song}
            />
            {song}
          </label>
        ))}
      </div>
    </form >

  )
}