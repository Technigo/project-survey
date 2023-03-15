import React from 'react';
import { Name } from './Name';
import Button from './Button';

export const Header = () => {
  return (
    <div className="header">
      <h2>Time to make a wish</h2>
      <Name />
      <Button />
      {/* <p className="title">Make a wish</p> */}
    </div>
  );
}