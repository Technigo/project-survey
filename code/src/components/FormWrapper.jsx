import React from 'react';
/* import Heading from './Heading';
import { Button } from './Button'; */
import { Menu } from './Start';

export const FormWrapper = () => {
  return (
    <div className="outer-wrapper">
      <section className="form-wrapper">
        <form onSubmit={(event) => event.preventDefault()}>
          <Menu />
        </form>
      </section>
    </div>
  );
};