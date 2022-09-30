import React from 'react';

export const Summary = ({ recieverName, consideration, textArea, action, userName }) => {
  return (
    <div>
      <p>Dear {recieverName}, </p>
      <p>
        You might want to consider {consideration}.
        Lately I`ve noticed that you {textArea}.
      </p>
      <p>And I would hate if someone had to {action}.</p>
      <p>Sincerely, {userName}.</p>
    </div>
  );
}