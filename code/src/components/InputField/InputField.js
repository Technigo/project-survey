import React, { useState } from 'react';

const InputField = () => {
  const [text, inputText] = useState('');

  return (
    <form>
      <input
        id="test"
        name="text"
        type="text"
        value={text}
        onChange={(event) => inputText(event.target.value)} />
    </form>
  );
};

export default InputField;