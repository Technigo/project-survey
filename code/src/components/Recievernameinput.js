import React from 'react';

export const RecieverNameInput = ({ recieverName, setRecieverName }) => {
  const handleRecieverNameInput = (event) => {
    setRecieverName(event.target.value);
  }
  return (
    <p>
      Dear
      <input className="text-input" type="text" value={recieverName} onChange={handleRecieverNameInput} placeHolder="reciever name" required />
      ,
    </p>
  );
}