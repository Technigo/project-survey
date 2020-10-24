import React from 'react';

const rating = [
  {
  value:"poor",
  label:"Poor",
  id:"poor"
  },
  {
    value:"very poor",
    label:"Very poor",
    id:"very poor"
  },
  {
    value:"average",
    label:"Average",
    id:"average"
  },
  {
    value:"good",
    label:"Good",
    id:"good"
  },
  {
    value:"excellent",
    label:"Excellent",
    id:"excellent"
  }
  // 'Average',
  // 'Good',
  // 'Excellent',
  // 'Poor',
  // 'Very Poor'
]

const UserRating = ({ userRating, onRatingChange }) => {
  return (
    <div className="section-user-rating" id="sectionUserRating">
      <p tabIndex="0">How do you evaluate our Aftersales services?</p>
      <div className="user-rating-container">
        {rating.map(rate => {
        return (
          <div className="user-rating-element" key={rate} >
            <label htmlFor={rate.id}>
              <input
                tabIndex="0"
                type="radio"
                id={rate.id}
                className="radio-button"
                value={rate.value}
                onChange={event => onRatingChange(event.target.value)}
                checked={userRating === rate.value}
              />
              {rate.label}
            </label>
          </div>
        )
      })}
      </div>
    </div>
  );
};
 
export default UserRating;