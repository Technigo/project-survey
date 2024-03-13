import React, { useEffect } from 'react';
import ProgressButton from './ProgressButton';

const CommentOption = ({
  comment, setComment, textInput, setTextInput, progress,
  setProgress,
  showProgressButton,
  setShowProgressButton
}) => {
  console.log({ textInput })

  useEffect(() => {
    if (!comment) {
      setShowProgressButton(false);
      console.log('IF', { showProgressButton });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <form className="commentForm">
        <h3>Is there any specific snack you would like us to stock up on? </h3>
        <select
          onChange={(event) => {
            setComment(event.target.value);
            setShowProgressButton(true);
          }}
          value={comment}>
          <option value="" disabled>Add a snack?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {comment === 'yes' && (
          <input
            type="text"
            onChange={(event) => setTextInput(event.target.value)}
            value={textInput}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
              }
            }} />
        )}
      </form>
      {showProgressButton && (
        <ProgressButton
          progress={progress}
          setProgress={setProgress} />
      )}
    </>
  );
};

export default CommentOption;