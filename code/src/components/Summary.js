import React from 'react';

const Summary = (props) => {
    const { username , lostItem, lastTime } = props;

    const lastTimeComment1 = <p>The last time you had it {lastTime !== '' ? 'was ' + lastTime : 'is unknown'}.</p>
    const lastTimeComment2 = <p>You don't now when you had it the last time so it's probably gone forever.</p> 

    return (
        <div className="summary">
          <h2>{username !== '' ? username : 'Stranger'}!</h2>
          <h3>Here's a short summary about what you've lost:</h3>
          <p>You have lost your {lostItem.length > 0 ? lostItem : 'mind apparently'}.</p>
          {lastTime !== "I don't know" ? lastTimeComment1 : lastTimeComment2}
          <p>If you don't agree, press restart to answer the questions again.</p>
        </div>
    )
}

export default Summary;