import React from 'react';

const WichTeam = [
  '🐢 Turtles ',
  '🐯 Tigers',
  '🦊 Foxes',
  '🐘 Elephants',
  '🦛 Hippos',
  '🦁 Lions'
]

const UserTeam = ({ userTeam, setUserTeam, userName }) => {
  const handleUserTeamInputChange = (event) => {
    setUserTeam(event.target.value)
  };
  return (
    <form>
      <h2> What is your team {userName} ?</h2>
      {WichTeam.map((group) => (
        <label htmlFor="age" key={group}>
          <input
            type="radio"
            value={group}
            onChange={handleUserTeamInputChange}
            checked={userTeam === group}
          />
          {group}
        </label>
      ))};
    </form>
  );
};

export default UserTeam;