import React from 'react';

const NameInput = ({ recieverName, setRecieverName }) => {
  const handleRecieverNameInputChange = (event) => {
    setRecieverName(event.target.value);
  }
  return (
    <div>
      <label htmlFor="reciever-name">
        <input type="text" value={recieverName} onChange={handleRecieverNameInputChange} placeHolder="Type name" />
      </label>
    </div>
  );
}
export default NameInput;