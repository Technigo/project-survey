import React from 'react';
import StartButton from './Button'

export const Header = () => {
  return (
    <section className="header">
      <i>Icon</i>
      <h1 className="section-title">Work from home survey</h1>
      <p>How are you coping?</p>
      <StartButton name="Start" />
      <div className="btn-subtitle">
        <i>Icon</i>
        <p>Takes 2 mins</p>
      </div>

    </section>

  );
}