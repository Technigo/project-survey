import React from 'react';

const UserAnswers = ({ name, team, feelings }) => {
  return (
    <div>
      <h2> These are your answers {name}!</h2>
      <p>{team}</p>
      <p>{feelings}</p>
    </div>
  )
}

export default UserAnswers
