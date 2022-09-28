import React from 'react';

const Result = ({ name, food, drink }) => {
  return (
    <section className="container">
        <p>Your name is {name}</p>
        <p>Your favourite food is {food}</p>
        <p>Your favourite drink is {drink}</p>
    </section>
  );
}

export default Result
