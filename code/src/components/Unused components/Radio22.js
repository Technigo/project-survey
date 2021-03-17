import React, {useState} from 'react'
// Denna är superviktig. försök få till den

const ageGroups = ["0-18","19-30","30+"]

const Radio2 = () => {
    const [ageGroup, setageGroup] = useState();

    return (
        <label>
        <p>Age Group:</p>


        {ageGroups.map(group => (
              <label key={group}>
              <input
                type="radio"
                value={group}
                onChange={event => setageGroup(event.target.value)}
                checked={ageGroup === group}
              />
              {group}
            </label>
      ))}
        </label>
    )
}

export default Radio2