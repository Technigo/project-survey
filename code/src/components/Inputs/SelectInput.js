const SelectInput = ({ value, setter }) => {
  console.log(value);

  /*
    'Something ',
    'Something ',
    'Something ',
    */

  return (
    <div className="select-container">
      <label>
        <select
          onChange={event => setter(event.target.value)}
          className="select-input"
          value={value}
        >
          <option value="hide" disabled>
            Something..{' '}
          </option>
          <option value="Something I can eat or drink 🌮">
            Something I can eat or drink 🌮
          </option>
          <option value="Something I can use at work 💼">
            Something I can use at work 💼
          </option>
          <option value="Something that'll make me laugh 😂">
            Something that'll make me laugh 😂
          </option>
          <option value="Something which is practical 🔧">
            Something which is practical 🔧
          </option>
          <option value="Something for my house 🏠">
            Something for my house 🏠
          </option>
        </select>
      </label>
    </div>
  );
};

export default SelectInput;
