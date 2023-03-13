import React from 'react';
import YesButton from './Button'

export const Header = () => {
  return (
    <section className="header">
      <h1 className="section-title">Would you dare to dream?</h1>
      <YesButton name="OKey" />
    </section>
  );
}