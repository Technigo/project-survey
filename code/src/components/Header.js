import React from 'react';
import { Name } from './Name';

export const Header = () => {
  return (
    <div className="header">
      <h2>Time to make a wish</h2>
      <Name />
      {/* <p className="title">Make a wish</p> */}
    </div>
  );
}