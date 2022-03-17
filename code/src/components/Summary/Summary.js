import React from 'react';

import './Summary.css';

const Summary = (props) => {
    const { username , lostItem, lastTime } = props;

    const lastTimeComment1 = <p>The last time you had it was {lastTime}.</p>
    const lastTimeComment2 = <p>You don't now when you had it the last time so it's probably gone forever.</p> 

    return (
        <>
          <h2>Summary</h2>
          <h3>{username !== '' ? username : 'Stranger'}! Here's a short summary for you!</h3>
          <p>You have lost your {lostItem.length > 0 ? lostItem : 'mind apparently'}.</p>
          {lastTime !== "I don't know" ? lastTimeComment1 : lastTimeComment2}
        </>
    )
}

export default Summary;