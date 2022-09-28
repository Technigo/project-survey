/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const UserAge = ({ userage, setUserage }) => {
  const ageGroups = ['0-18', '19-30', '30+']

  return (
    <>
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
    </>
  /*   <div>
      <label>
        <input
          type="radio"
          value="0-18"
          onChange={(event) => setUserage(event.target.value)}
          checked={userage === '0-18'} />
          0-18
      </label>

      <label>
        <input
          type="radio"
          value="19-30"
          onChange={(event) => setUserage(event.target.value)}
          checked={userage === '19-30'} />
          19-30
      </label>

      <label>
        <input
          type="radio"
          value="30+"
          onChange={(event) => setUserage(event.target.value)}
          checked={userage === '30+'} />
          30+
      </label>
    </div> */
  )
}

export default UserAge;