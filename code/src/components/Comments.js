import React from 'react';

const Comments = ({ comments, setComments }) => {
  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  }
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor="comments" className="comments-label">
      <p>If you have additional comments you can write them here:</p>
      <textarea
        id="comments"
        value={comments}
        onChange={handleCommentsChange}
        className="input-field-comments"
        placeholder="Write any additional comments here..."
        rows={4}
        cols={20} />
    </label>
  );
}

export default Comments;