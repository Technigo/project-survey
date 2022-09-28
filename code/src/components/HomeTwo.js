import React from 'react';

export const HomeTwo = ({ home, setHome }) => {
  const handleHomeChange = (event) => {
    setHome(event.target.value);
  }
  return (
    <form>
      <p>Where do you live?</p>
      <select
        onChange={handleHomeChange}
        Value={home}>
        <option value=" ">Select location</option>
        <option value="City">City</option>
        <option value="Village">Village</option>
        <option value="Coyntryside">Countryside</option>
      </select>
    </form>
  )
}