import React from 'react';
import ten from 'assets/icons8-10-100.png';
import fifteen from 'assets/icons8-15-100.png';
import twenty from 'assets/icons8-20-100.png';

const HowManyHours = [
  { text: '10', value: '10', id: 2, image: ten },
  { text: '15', value: '20', id: 3, image: fifteen },
  { text: '20', value: '40', id: 4, image: twenty }
]

const UserHours = ({ userHours, setUserHours }) => {
  const handleUserHours = (event) => {
    setUserHours(event.target.value)
  };
  return (
    <form className="form-wrapper">
      <h2 className="sub-header">Free solo! Hans Solo!</h2>
      <h3 className="question-title">Take a moment to think how many hours did you code</h3>
      {HowManyHours.map((group) => (
        <label className="lable-wrapper" htmlFor={group.value} key={group.id}>
          <div className="input-wrapper">
            <input
              className="input-btn"
              type="radio"
              value={group.value}
              onChange={handleUserHours}
              checked={userHours === group.value}
              image={group.image}
            />
            <img className="animals" src={group.image} alt={group.value} />
          </div>
        </label>
      ))}
    </form>
  );
};

export default UserHours;