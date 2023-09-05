/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';

const ProgressBar = ({ step }) => {
  return (
    <section className="form__progressBar">
      <progress id="progress" className="progress" aria-hidden="true" value={step} aria-valuemin="1" aria-valuenow={step} aria-valuemax="5" max="5" />
    </section>
  )
}

export default ProgressBar;