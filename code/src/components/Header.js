import React from 'react';
import BeginButton from './Button'

export const Header = () => {
  return (
    <section className="header">
      <h1 className="section-title">Would you dare to dream?</h1>
      <BeginButton name="Begin Button" />
    </section>
  );
}