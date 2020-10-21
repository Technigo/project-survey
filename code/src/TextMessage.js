import React from 'react';

const TextMessage = ({ textMessage, onMessageChange }) => {
  return (
    <div className="message" id="sectionMessage">
      <label htmlFor="message">Please leave your message</label><br></br>
      <textarea className="text-box"
          id="message"
          type="text"
          rows="10"
          maxLength="800"
          onChange={event => onMessageChange(event.target.value)}
          value={textMessage}
        >
      </textarea>
    </div>
  );
};
 
export default TextMessage;