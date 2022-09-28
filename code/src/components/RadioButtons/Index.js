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
      {props.options.map((test) => (
        <label key={test} htmlFor="test">
          <input
            id="test"
            name="test"
            type="radio"
            value={test}
            onChange={(event) => props.onChange(event.target.value)}
            checked={props.value === test}
          />
          {test}
        </label>
      ))}
    </form>
  );
};

export default RadioButtons;
