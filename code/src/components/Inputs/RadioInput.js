const RadioInput = ({ value, setter }) => {
  /*
<option value="">
            Out partying with friends 🥳
          </option>
          <option value="">At the gym 😤</option>
          <option value="">In front of Netflix 📺</option>
          <option value="">Eating out 🍴</option>
          */

  const gifts = [
    'Out partying with friends 🥳',
    'At the gym 😤',
    'In front of Netflix 📺',
    'Eating out 🍴',
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
