import React from 'react';

export const Summary = ({ name, activity, colour, place, temp, who }) => {
  return (
    <div className="sum-container">
      <h4>So...</h4>
      <p className="sum-p">
        {name}, picture yourself by the {place} where you are about to start your {activity}. <br />
        You feel the atmosphere beeing just the way you want, it is around {temp} degrees.  <br />
        By your side you have {who} looking at you with a smile.  <br />
        In the distance you see a beutiful {colour} light.
      </p>
      <p className="sum-p">
        {who} want to move on now.
        Are you ready to take the next step for your mental health {name}?
      </p>
    </div>
  )
}