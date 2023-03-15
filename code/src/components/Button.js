import React from 'react';
import { MdDone } from '@react-icons/all-files/md/MdDone';

const Button = ({ counter, setCounter, name }) => {
  const handleCounterIncrement = () => {
    console.log(counter)
    return setCounter(counter + 1)
  }
  return (
    <button className="btn" type="button" onClick={handleCounterIncrement}>
      {name}
      <MdDone />
    </button>
  );
}
export default Button;