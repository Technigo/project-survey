import React from 'react';

const Summary = ({ name, weather, money }) => {
  return (
    <section className='container'>
      <h2>Summary</h2>
      <p>Those are some awesome choices {name}!</p>
      <ul>
        {/* <li></li> */}
        <li>{weather}</li>
        <li>{money}</li>
      </ul>
    </section>
  );
};

export default Summary;
