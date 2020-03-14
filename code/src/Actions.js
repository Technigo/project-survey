import React, { useState } from 'react';

export const Actions = () => {
  const [actions, setActions] = useState('')
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      What do you normally do in order to feel better?
      <label>Name up to three things or leave blank</label>
      <input type="text" name="actions"
        onChange={(event) => setActions(event.target.value)}
        value={actions} />
    </form>
  );
};

export default Actions