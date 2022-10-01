const RadioInput = ({ value, setter }) => {
  const gifts = [
    'out partying with friends 🥳',
    'at the gym 😤',
    'in front of Netflix 📺',
    'eating out 🍴',
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
