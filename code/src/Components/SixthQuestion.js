import React from 'react';

const SixthQuestion = ({
  blockersDescription,
  onBlockersDescription,
  onStepChange,
}) => {
  return (
    <form>
      <label htmlFor="blockersDescription">Describe your blocker: </label>
      <textarea
        id="blockersDescription"
        rows="2"
        cols="50"
        value={blockersDescription}
        onChange={onBlockersDescription}
        placeholder="Add a description so we easily can help you remove the blocker"
      />
      <button disabled={blockersDescription === ''} onClick={onStepChange}>
        Overview
      </button>
    </form>
  );
};

export default SixthQuestion;
