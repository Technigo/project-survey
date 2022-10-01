import React from 'react';
import lion from 'assets/icons8-lion-100.png';
import turtle from 'assets/icons8-turtle-100.png';
import elephant from 'assets/icons8-elephant-100.png';
import fox from 'assets/icons8-fox-100.png';
import tiger from 'assets/icons8-tiger-face-100.png';
import hippo from 'assets/icons8-hippopotamus-100.png';

const WichTeam = [
  { text: 'Turtles', value: 'Turtles', id: 1, image: turtle },
  { text: 'Tigers', value: 'Tigers', id: 2, image: tiger },
  { text: 'Foxes', value: 'Foxes', id: 3, image: fox },
  { text: 'Elephants', value: 'Elephants', id: 4, image: elephant },
  { text: 'Hippos', value: 'Hippos', id: 5, image: hippo },
  { text: 'Lions', value: 'Lions', id: 6, image: lion }
]

const UserTeam = ({ userTeam, setUserTeam, userName }) => {
  const handleUserTeamInputChange = (event) => {
    setUserTeam(event.target.value)
  };
  return (
    <form className="form-wrapper">
      <h2 className="sub-header">Hello {userName}!</h2>
      <h3 className="question-title">What&apos;s your team ?</h3>
      {WichTeam.map((group) => (
        <label className="lable-wrapper" htmlFor={group.value} key={group.id}>
          <div className="input-wrapper">
            <input
              className="input-btn"
              type="radio"
              value={group.value}
              onChange={handleUserTeamInputChange}
              checked={userTeam === group.value}
              image={group.image}
              tabIndex="0"
            />
            <img className="animals" src={group.image} alt={group.value} />
          </div>
        </label>
      ))}
    </form>
  );
};

export default UserTeam;