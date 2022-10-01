const RadioInput = ({ value, setter }) => {
  const gifts = [
    'Something I can eat or drink 🌮',
    'Something I can use at work 💼',
    "Something that'll make me laugh 😂",
    'Something which is practical 🔧',
    'Something for my house 🏠',
  ];
  return (
    <div className="radio-container">
      {gifts.map((gift, index) => {
        return (
          <label key={index}>
            <input
              onChange={event => setter(event.target.value)}
              className="radio-input"
              type="radio"
              value={gift}
              checked={value === gift}
            ></input>
            {gift}
          </label>
        );
      })}
    </div>
  );
};

export default RadioInput;
