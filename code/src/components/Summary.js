import React from 'react'

const Summary = ({ userName, mediaselect, age, hourselect, onBackChange }) => {
    
    console.log(hourselect)
    return (
      <section className="container">
        <h2>Those are some some interesting picks {userName}!</h2>
        <p>Thank you for taking the time to answer these questions.</p>
        <p>To sum up your media habits:</p>
        <p>You prefer using the {mediaselect} device,
          and you spend about {hourselect}, hours daily using it.
          You are between {age} years old.
        </p>
        <button className="btn" onClick={onBackChange}>Back</button>
      </section>
    );
  };
  
  export default Summary;