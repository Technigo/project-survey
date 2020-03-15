import React, { useState } from 'react';


export const Actions = () => {
  const [action1, setAction1] = useState('')
  const [action2, setAction2] = useState('')


  return (
    <form onSubmit={(event) => event.preventDefault()}>
      Name two things you normally do in order to try to feel better?
      <label>1:
        <input
          type="text"
          onChange={(event) => setAction1(event.target.value)}
          value={action1} />
      </label>
      <label>2:
        <input
          type="text"
          onChange={(event) => setAction2(event.target.value)}
          value={action2} />
      </label>
      <div className="summary">
        <h1>When you're stressed you usually: {action1} or {action2}</h1>
      </div>
    </form>

  );

};

export default Actions