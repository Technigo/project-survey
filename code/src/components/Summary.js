import React from 'react';

const Summary = ({ name, diagnosis, yearsOfAge, numberOfCoffee, supplements }) => {
  return (
    <div>
      <p> Summary</p>
      <p>Name: {name}</p>
      <p>I want help with: {diagnosis}</p>
      <p>I am this old: {yearsOfAge}</p>
      <p>I drink this much coffee: {numberOfCoffee}</p>
      <p>I use these medicine, mineral or vitamin supplements: {supplements}</p>
    </div>
  );
}

export default Summary;