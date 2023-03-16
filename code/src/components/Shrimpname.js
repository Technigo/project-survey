import React from 'react'

export const Shrimpname = ({ shrimpName, setShrimpName }) => {
  const handleShrimpName = (event) => {
    const value = event.target.value === 'true'
    setShrimpName(value === event.target.value)
  }
  return (
    <>
      <p>Would you like us to name your shrimp for you?</p>
      <label htmlFor="yes">
        <input
          type="radio"
          value="true"
          checked={shrimpName === true}
          onChange={handleShrimpName} />
              Yes please
      </label>
      <label htmlFor="no">
        <input
          type="radio"
          value="false"
          checked={shrimpName === false}
          onChange={handleShrimpName} />
              No thanks
      </label>
      {shrimpName === true ? (
        <p>Great! Please note they will all get the same name,
        since they are so difficult to tell apart!
        </p>
      ) : (<p>Alright, we will let you name them!</p>
      )}
    </>
  )
}