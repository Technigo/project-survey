import React from 'react';
/**
 *
 * @param {*} props { value: string, onChange: function }
 * @returns
 */
const RadioButtons = (props) => {
  console.log(props.question2);
  console.log('props', props);

  return (
    <form>
      {props.options.map((option) => (
        <label key={option} htmlFor={option}>
          <input
            id={option}
            name={option}
            type="radio"
            value={option}
            onChange={(event) => props.onChange(event.target.value)}
            checked={props.value === option}
          />
          {option}
        </label>
      ))}
    </form>
  );
};

export default RadioButtons;
