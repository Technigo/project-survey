import React from 'react';
import Heading from './Heading';
import { Button } from './Button';

export const FormWrapper = () => {
  return (
    <div className="outer-wrapper">
      <section className="form-wrapper">
        <form onSubmit={(event) => event.preventDefault()}>
          <Heading />
          <Button />
        </form>
      </section>
    </div>
  );
};