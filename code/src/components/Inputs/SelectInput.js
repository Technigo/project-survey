const SelectInput = ({ value, setter }) => {
  console.log(value);
  return (
    <div className="select-container">
      <label>
        <select
          onChange={event => setter(event.target.value)}
          className="select-input"
          value={value}
        >
          <option value="hide">-- Select an activity --</option>
          <option value="Out partying with friends 🥳">
            Out partying with friends 🥳
          </option>
          <option value="At the gym 😤">At the gym 😤</option>
          <option value="In front of Netflix 📺">In front of Netflix 📺</option>
          <option value="Eating out 🍴">Eating out 🍴</option>
        </select>
      </label>
    </div>
  );
};

export default SelectInput;
