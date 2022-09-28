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
        <option value="in a city">City</option>
        <option value="in a village">Village</option>
        <option value="on the countryside">Countryside</option>
      </select>
    </form>
  )
}