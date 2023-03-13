import React from 'react';
import { Button } from './Button'

export const Header = () => {
  return (
    <section>
      <i>Icon</i>
      <h1>Work from home survey</h1>
      <p>How are you coping?</p>
      <Button name="Start" />
      <div>
        <i>Icon</i>
        <p>Takes 2 mins</p>
      </div>

    </section>

  );
}