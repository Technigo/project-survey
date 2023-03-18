import React from 'react';

const goingStatus = ['Feeling like a pile of poop on a hot summer day', 'Feeling as exciting as watching paint dry on a wall', 'Feeling so average that it is forgettable', 'Feeling like a unicorn on a rainbow slide!', 'Feeling like a leprechaun with a pot of gold at the end of a rainbow!'];

export const Going = ({ going, setGoing }) => {
  const handleGoingChange = (event) => {
    setGoing(event.target.value);
  }

  return (
    <form>
      <div className="goingComponent">
        <h2>What are your feelings after today?</h2>
        {goingStatus.map((goingType) => (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label key={goingType}>
            <input
              type="radio"
              aria-label="Choose how it is going"
              tabIndex="0"
              onChange={handleGoingChange}
              value={goingType}
              checked={going === goingType} />
            {goingType}
          </label>
        ))}
      </div>
    </form>
  )
}