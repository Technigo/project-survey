import React from 'react';

const Suggestions = props => {
  const { suggestion, setSuggestion } = props;

  return (
    <form onSubmit={event => event.preventDefault()}>
      <label>
        Please tick the box if you'd like some suggestions of what you can do to
        feel better!
        <input
          type="checkbox"
          checked={suggestion}
          onChange={event => setSuggestion(event.target.checked)}
        />
      </label>
    </form>
  );
};
export default Suggestions;
