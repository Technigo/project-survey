import { excitementFunction } from '../utils';

const RangeInput = ({ value, setter }) => {
  // excitementFunction converts the excitement value in the state to a string
  const excitementLevel = excitementFunction(value);

  return (
    <div className="range-container">
      <input
        onChange={event => setter(event.target.value)}
        className="range-input"
        type="range"
        value={value}
        min="1"
        max="100"
      ></input>
      <i className="excitement-label">"{excitementLevel}"</i>
    </div>
  );
};

export default RangeInput;
