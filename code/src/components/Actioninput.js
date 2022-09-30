import React from 'react';

export const ActionInput = ({ action, setAction }) => {
  const handleAction = (event) => {
    setAction(event.target.value)
  }
  return (
    <>
      <p>And I would hate it if someone had to</p>
      <form>
        <label htmlFor="actionValue">
          <input name={action} type="radio" value="Sulk" checked={action === 'Sulk'} onChange={handleAction} />
          Sulk
        </label>
        <label htmlFor="actionValue">
          <input name={action} type="radio" value="Retaliate" checked={action === 'Retaliate'} onChange={handleAction} />
          Retaliate
        </label>
        <label htmlFor="actionValue">
          <input name={action} type="radio" value="Actually confront you" checked={action === 'Actually confront you'} onChange={handleAction} />
          Actually confront you
        </label>
        <label htmlFor="actionValue">
          <input name={action} type="radio" value="Write another note" checked={action === 'Write another note'} onChange={handleAction} />
          Write another note
        </label>
        <label htmlFor="actionValue">
          <input name={action} type="radio" value="Call the cops" checked={action === 'Call the cops'} onChange={handleAction} />
          Call the cops
        </label>
      </form>
    </>
  );
}