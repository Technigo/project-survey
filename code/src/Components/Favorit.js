import React, { useState } from 'react';

export const Favorit = ({ whenNext }) => {
  const [favorit, setFavorit] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    whenNext(favorit);
  }
  return (
    <form onSubmit={handleSubmit} className="question-box">
      <label>
        <div className="question">
          <h2 className="question-text"> What's your favorit game?</h2>
          <input
          className="fav-style"
            type="text"
            value={favorit}
            onChange={(event) => setFavorit(event.target.value)} />
      </div>
      </label>
      <button type="submit" className="next-button" />
    </form>
  )
}