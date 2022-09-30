import React from 'react';
import alone from 'assets/icons8-developer-100.png';
import buddy from 'assets/icons8-paired-100.png';

const UserBuddy = [
  { text: 'Alone', value: 'Alone', id: 1, image: alone },
  { text: 'In pair', value: 'Pair', id: 2, image: buddy }
]

const UserAloneOrBuddy = ({ userAloneOrBuddy, setUserAloneOrBuddy, userName }) => {
  const handleUserAloneOrBuddyInputChange = (event) => {
    setUserAloneOrBuddy(event.target.value)
  };
  return (
    <form className="form-wrapper">
      <h2 className="sub-header">You have every right to feel that way. Keep your mood up!</h2>
      <h3 className="question-title">Did you code alone or +1 {userName}?</h3>
      {UserBuddy.map((group) => (
        <label className="lable-wrapper" htmlFor={group.value} key={group.id}>
          <div className="input-wrapper">
            <input
              className="input-btn"
              type="radio"
              value={group.value}
              onChange={handleUserAloneOrBuddyInputChange}
              checked={userAloneOrBuddy === group.value}
              image={group.image}
            />
            <img className="animals" src={group.image} alt={group.value} />
          </div>
        </label>
      ))}
    </form>
  );
};

export default UserAloneOrBuddy;