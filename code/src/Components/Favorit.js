import React, { useState } from 'react';

export const Favorit = ({ whenNext }) => {
  const [favorit, setFavorit] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    whenNext(favorit);
  }
  return (
    <form onSubmit={handleSubmit} action="">
      <label>
      What's your favorit game?
        <input
          type="text"
          value={favorit}
          onChange={(event) => setFavorit(event.target.value)}/>
      </label>
      <button type="submit" className="next-button"></button>
    </form>
  )
}