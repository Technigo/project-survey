import React from 'react';

import { Button } from './Button';

export const Welcome = () => {
  return (
    <section className="start-container">
      <div class="circle"></div>
      <h1 className="start-title">Hello!</h1>
      <h2 className="start-text">You stayed with us recently and we would love it if you could just answer a few quick questions!</h2>
      <Button 
        button="LETS START!" />
    </section>
  )
}