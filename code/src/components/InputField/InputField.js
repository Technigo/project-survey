import React from 'react';

const InputField = ({ text, inputText }) => {
  console.log(text)

  return (
    <div className="input-field">
      <form>
        <input
          id="test"
          name="text"
          type="text"
          value={text}
          onChange={(event) => inputText(event.target.value)} />
      </form>
    </div>
  );
};

export default InputField;