import React, { useState } from 'react';

const Summary = ({ inputName, genre, cost, selectBigVenue, selectMidVenue, selectSmallVenue, range }) => {
    
  return (

    <section className="summary">
      <h2>Hey {inputName}! 
       Your favourite music gengre is {genre} - cool! 
       Prior to the panemic you usually spent {cost} on live gigs each month
       Your favourite big sized live music venue in Stockholm is {selectBigVenue} 
       Your favourite medium sized live music venue in Stockholm is {selectMidVenue} 
       Your favourite small sized live music venue in Stockholm is {selectSmallVenue} 
       On a scale from 1-10, you miss live music at a level of {range} 
       </h2>
    </section>
  );
};

export default Summary;