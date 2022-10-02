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
          <input className="radiobutton" name={action} type="radio" value="Sulk" checked={action === 'Sulk'} onChange={handleAction} required />
          Sulk
        </label>
        <label htmlFor="actionValue">
          <input className="radiobutton" name={action} type="radio" value="Retaliate" checked={action === 'Retaliate'} onChange={handleAction} required />
          Retaliate
        </label>
        <label htmlFor="actionValue">
          <input className="radiobutton" name={action} type="radio" value="Actually confront you" checked={action === 'Actually confront you'} onChange={handleAction} required />
          Actually confront you
        </label>
        <label htmlFor="actionValue">
          <input className="radiobutton" name={action} type="radio" value="Write another note" checked={action === 'Write another note'} onChange={handleAction} required />
          Write another note
        </label>
        <label htmlFor="actionValue">
          <input className="radiobutton" name={action} type="radio" value="Call the cops" checked={action === 'Call the cops'} onChange={handleAction} required />
          Call the cops
        </label>
      </form>
    </>
  );
}