import React from 'react';
import { Button } from 'components/Button';

export const FavoriteArtist = ({ favoriteArtist, setFavoriteArtist, step, percentage }) => {
  const handleFavoriteArtist = (event) => {
    setFavoriteArtist(event.target.value)
  }
  return (
    <>
      <div className="question-number">
        {step <= 5 && <p>Question number: {step}/5</p>}
        <div className="progress-bar">
          <div className="progress-filler" style={{ width: `${percentage}%` }}>{percentage}%</div>
        </div>
      </div>
      <label htmlFor="favoriteArtist">
        Which artist do you want to see the next time you go to a concert?
        <input id="favoriteArtist" type="text" value={favoriteArtist} onChange={handleFavoriteArtist} required />
      </label>
      <Button button="Summary" />
    </>
  );
}