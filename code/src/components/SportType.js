import React from 'react';

export const SportType = ({ sportType, setSportType }) => {
  const handleSportTypeChange = (event) => {
    setSportType(event.target.value);
  }
  return (
    <div className="questionWrapper">
      <form>
        <h2>If Yes, what kind of sport of physical activity do you do?</h2>
        <select
          onChange={handleSportTypeChange}
          value={sportType}
          label="selectSportType">
          <option disabled value="" label="Select sport">Select sport or activity</option>
          <option value="Ball sports" label="Ball sports">Ball sports</option>
          <option value="Water sports" label="Water sports">Water sports</option>
          <option value="Martial arts" label="Martial arts">Martial arts</option>
          <option value="Running/Jogging" label="Running/Jogging">Running/Jogging</option>
          <option value="Gym" label="Gym">Gym</option>
          <option value="Other" label="Other">Other</option>
        </select>
      </form>
    </div>
  )
}