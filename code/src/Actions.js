import React from 'react';

export const Actions = props => {
  const { action1, setAction1, action2, setAction2 } = props;

  return (
    <form onSubmit={event => event.preventDefault()}>
      Name two things you normally do in order to try to feel better?
      <br />
      1.
      <label>
        <input
          class='inputfield'
          type='text'
          onChange={event => setAction1(event.target.value)}
          value={action1}
        />
      </label>
      2.
      <label>
        <input
          class='inputfield'
          type='text'
          onChange={event => setAction2(event.target.value)}
          value={action2}
        />
      </label>
    </form>
  );
};

export default Actions;
