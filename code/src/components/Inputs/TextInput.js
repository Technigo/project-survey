const TextInput = ({ value, setter }) => {
  return (
    <input
      onChange={event => setter(event.target.value)}
      className="name-input"
      type="text"
      placeholder="Type your answer here..."
      value={value}
    ></input>
  );
};

export default TextInput;
