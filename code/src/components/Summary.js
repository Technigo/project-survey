import React from 'react';

export const Summary = ({ name, gender, age, food, times }) => {
  return (
    <p>{name} is a {gender} between {age} that eats {food} {times}</p>
  )
}

export default Summary;