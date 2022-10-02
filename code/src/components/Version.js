/* eslint-disable linebreak-style */
import React from 'react';

export const Version = ({ version, setVersion }) => {
  const handleVersionChange = (event) => {
    setVersion(event.target.value);
  }
  return (
    <form>
      <p className="question">Which version would you like</p>
      <div className="version-selection">
        <label>
          <input type="radio" aria-label="First checkbox" value="Alan Lee" checked={version === 'Alan Lee'} onChange={handleVersionChange} />
        Illustrator: Alan Lee, publication date 2014
        </label>
        <label>
          <input type="radio" aria-label="Second checkbox" value="J.R.R Tolkien" checked={version === 'J.R.R Tolkien'} onChange={handleVersionChange} />
            Illustator: J.R.R Tolkien, publication date 2004
        </label>
        <label>
          <input type="radio" aria-label="Third checkbox" value="Tove Jansson" checked={version === 'Tove Jansson'} onChange={handleVersionChange} />
            Illustrator: Tove Jansson, publication date 1961
        </label>
      </div>
    </form>
  )
}