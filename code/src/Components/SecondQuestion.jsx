import React from "react";

// object with locations
const SecondQuestion = ({ triggerCity, stateCity }) => {
  const cityNames = [
    { text: "Select location", disabled: true },
    { text: "Stockholm", disabled: false },
    { text: "Gothenburg ", disabled: false },
    { text: "Malmo", disabled: false },
    { text: "Other", disabled: false },
  ]

  return (
    <form className="form">
      {/* dropdown */}
      <select onChange={(event) => triggerCity(event)} value={stateCity}>
        {/* values in the dropdown */}
        {cityNames.map((city) => (
          <option value={city.text} disabled={city.disabled}>
            {city.text}
          </option>
        ))}
      </select>
    </form>
  )
}

export default SecondQuestion
