import React, { useState } from "react";

const TextInput = (props) => {
  const [text, setText] = useState("");

  return (
    <>
      <form action="">
        <label htmlFor={props.question}></label>
        <input
          type="text"
          id={props.question}
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
      </form>
    </>
  );
};

export default TextInput;
