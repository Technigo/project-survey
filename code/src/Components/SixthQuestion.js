import React from 'react';

const SixthQuestion = ({
  blockersDescription,
  onBlockersDescriptionChange,
  handleShowOverview,
}) => {
  return (
    <form>
      <label htmlFor="blockersDescription">Describe your blocker: </label>
      <textarea
        id="blockersDescription"
        rows="2"
        cols="30"
        value={blockersDescription}
        onChange={onBlockersDescriptionChange}
        placeholder="Add a description so we easily can help you remove the blocker"
      />
      <button
        disabled={blockersDescription === ''}
        onClick={handleShowOverview}
      >
        Overview
      </button>
    </form>
  );
};

export default SixthQuestion;
