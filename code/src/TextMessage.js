import React from 'react';

const TextMessage = ({ textMessage, onMessageChange }) => {
  return (
    <div>
      <label  htmlFor="message">Please leave your message</label>
      <textarea
          id="message"
          type="text"
          row="20"
          colunm="30"
          onChange={event => onMessageChange(event.target.value)}
          value={textMessage}
        >
      </textarea>
    </div>
  );
};
 
export default TextMessage;