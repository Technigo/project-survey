import React from 'react'

const Summary = ({ userName, mediaselect, age, hourselect }) => {
    
    console.log(hourselect)
    return (
      <section className='container'>
        <h2>Those are some some interesting picks {userName}!</h2>
        <p>Thank you for taking the time to answer these questions.</p>
        <p>To sum up your media habits:</p>
        <p>You prefer using the {mediaselect} device.
          And you spend about {hourselect}, hours daily.
          You are between {age} years old.
          

        </p>
      </section>
    );
  };
  
  export default Summary;