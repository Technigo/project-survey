import React from 'react';

export const Summary = ({ name, activity, colour, place, temp, who }) => {
  return (
    <div className="content-container">
      <p className="p-step">Complete 7 / 7</p>
      <h4 className="sumh4">So...</h4>
      <p>
        {name}, picture yourself by the {place} where you are about to start your {activity}. <br />
        You feel the atmosphere beeing just the way you want, it is around {temp} degrees.  <br />
        By your side you have {who} looking at you with a smile.  <br />
        In the distance you see a beautiful {colour} light.
      </p>
      <p>
        {who} want you to move on now.
        Are you ready to take the next step {name}?
      </p>
    </div>
  )
}