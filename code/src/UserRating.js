import React from 'react';

const rating = [
  'Very Poor',
  'Poor',
  'Average',
  'Good',
  'Excellent'
]

const UserRating = ({ userRating, onRatingChange }) => {
  return (
    <section className="user-rating-section">
      <p>How do you evaluate our AfterSales Services</p>
      <div>
        {rating.map(rate => {
        return (
          <label key={rate}>
            <input
              type="radio"
              value={rate}
              onChange={event => onRatingChange(event.target.value)}
              checked={userRating === rate}
            />
            {rate}
          </label>
        )
      })}
      </div>
    </section>
  );
};
 
export default UserRating;