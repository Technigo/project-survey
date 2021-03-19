import React from 'react';

import { Button } from './Button';

// Component for the start page

export const Start = () => {
  return (
    <section className="start-container">
      <div className="circle"></div>
      <h1 className="start-title" tabIndex="0">Hello!</h1>
      <h2 className="start-text" tabIndex="0">You stayed with us recently and we would love it if you could just answer a few quick questions!</h2>
      <Button 
        button="LETS START!" />
    </section>
  )
}