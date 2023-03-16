/// ////////// IMPORTS //////////////// ///

import React from 'react';
import './Greeting.css';

/// ////////// FUNCTION //////////////// ///

export const Greeting = () => {
  return (
    <div>
      <h1 className="nametext" aria-label="Welcome Hello"> HELLO WINELOVER!</h1>
      <p className="greetingtext"> Let us give you a suggestion</p>
    </div>
  );
};