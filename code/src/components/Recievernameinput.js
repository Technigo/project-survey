import React from 'react';

export const RecieverNameInput = ({ recieverName, setRecieverNameInput }) => {
  const handleRecieverNameInput = (event) => {
    setRecieverNameInput(event.target.value);
  }
  return (
    <label htmlFor="reciever">
      Dear
      <input type="text" value={recieverName} onChange={handleRecieverNameInput} placeHolder="Reciever name" />
      ,
    </label>
  );
}