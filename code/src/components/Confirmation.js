import React from 'react';

export const Confirmation = ({ name, phone, dest, pax, paxChild, age }) => {
  return (
    <>
      <p>Your name is: {name}</p>
      <p>Your phone number is: {phone}</p>
      <p>Wished flight time: {dest}</p>
      <p>Pax adults: {pax}</p>
      <p>Pax children: {paxChild}</p>
      <p>Children age: {age}</p>
    </>
  )
}
