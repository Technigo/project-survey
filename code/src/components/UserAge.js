/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const UserAge = ({ userage, setUserage }) => {
  const ageGroups = ['0-18', '19-30', '30+']

  return (
    <div>
      <h1 className="check-h1" tabIndex="0">Age group: </h1>
      {ageGroups.map((group) => (
        <label className="label" tabIndex="0" key={group}>
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