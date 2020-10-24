import React from 'react';

const rating = [
  'Average',
  'Good',
  'Excellent',
  'Poor',
  'Very Poor'
]

const UserRating = ({ userRating, onRatingChange }) => {
  return (
    <div className="section-user-rating" id="sectionUserRating">
      <p>How do you evaluate our Aftersales services?</p>
      <div className="user-rating-container">
        {rating.map(rate => {
        return (
          <div className="user-rating-element" key={rate}>
            <label htmlFor="userRating">
              <input
                id="userRating"
                type="radio"
                className="radio-button"
                value={rate}
                onChange={event => onRatingChange(event.target.value)}
                checked={userRating === rate}
              />
              {rate}
            </label>
          </div>
        )
      })}
      </div>
    </div>
  );
};
 
export default UserRating;