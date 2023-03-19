import React from 'react';

const CommentOption = ({ comment, setComment, textInput, setTextInput }) => {
  console.log({ textInput })
  return (
    <form className="commentForm">
      <h3>Is there any specific snack you would like us to stock up on? </h3>
      <select
        onChange={(event) => setComment(event.target.value)}
        value={comment}>
        <option value="" disabled>Add a snack?</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      {comment === 'yes' && (
        <input
          type="text"
          onChange={(event) => setTextInput(event.target.value)}
          value={textInput} />
      )}
    </form>
  );
};

export default CommentOption;