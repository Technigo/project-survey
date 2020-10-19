import React from 'react';

const radiobuttons = ['0-10', '11-20', '21-30'];

const InputRadiobutton = props => {
  const { radiobutton, setRadiobutton } = props;
  // return (
  //   <label>
  //     <h2>What's your name?</h2>
  //     <input
  //       type="text"
  //       // id={id}
  //       onChange={event => setText(event.target.value)}
  //       value={text}
  //     />
  //   </label>
  // );

  return (
    <>
      <h2>Radiobutton:</h2>
      {radiobuttons.map(button => (
        <label key={button}>
          <input
            type="radio"
            value={button}
            onChange={event => setRadiobutton(event.target.value)}
            checked={radiobutton === button}
          />
          {button}
        </label>
      ))}
    </>
  );
};

export default InputRadiobutton;
