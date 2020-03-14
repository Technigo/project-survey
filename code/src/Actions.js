import React, { useState } from 'react';

export const Selfhelp = () => {
  const [action1, setAction1] = useState('')
  const [action2, setAction2] = useState('')
  const [action3, setAction3] = useState('')
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      What do you normally do in order to try to feel better?
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
      <label>3:
        <input
          type="text"
          onChange={(event) => setAction3(event.target.value)}
          value={action3} />
      </label>
    </form>
  );
};

export default Selfhelp