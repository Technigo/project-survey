import React from 'react';
// select input with three options
export const HomeTwo = ({ home, setHome }) => {
  const handleHomeChange = (event) => {
    setHome(event.target.value);
  }
  return (
    <form>
      <h2>Where do you live?</h2>
      <select
        className="inputClass"
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