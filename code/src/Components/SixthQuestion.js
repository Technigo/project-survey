import React from 'react';

const SixthQuestion = ({
  blockersDescription,
  onBlockersDescriptionChange,
  handleShowOverview,
}) => {
  return (
    <form className="form">
      <label>
        Describe your blocker:
        <textarea
          id="blockersDescription"
          rows="2"
          cols="30"
          value={blockersDescription}
          onChange={onBlockersDescriptionChange}
          placeholder="Add a description so we easily can help you remove the blocker"
        />
      </label>
      <button
        className="button"
        disabled={blockersDescription === ''}
        onClick={handleShowOverview}
      >
        Overview
      </button>
    </form>
  );
};

export default SixthQuestion;
