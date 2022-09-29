/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const UserAge = ({ userage, setUserage }) => {
  const ageGroups = ['0-18', '19-30', '30+']

  return (
    <div>
    Age group:
      {ageGroups.map((group) => (
        <label key={group}>
          <input
            type="radio"
            value={group}
            onChange={(event) => setUserage(event.target.value)}
            checked={userage === group} />
          {group}
        </label>
      ))}
    </div>
  )
}

export default UserAge;