import React, {useState} from 'react';

export const TextInput = (props) => {
  const [name, setName] = useState("Karolin");
  const handleChange = (event) =>{
    props.onSubmit(event.target.value);
  }

  return (
    <div className="text-input-container">
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        onSubmit={props.onSubmit(name)}
        value={name}
        required
      ></input>
  </div>
  );
};