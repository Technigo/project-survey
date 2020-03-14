import React, { useState } from 'react';

export const Suggestions = () => {
  const [suggestion, setSuggestion] = useState(false)

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>
        Would you like some suggestions of what you can do to feel better?
        <input
          type="checkbox"
          checked={suggestion}
          onChange={(event) => setSuggestion(event.target.checked)} />
      </label>
    </form>
  )
}

export default Suggestions