/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';

const ProgressBar = ({ step }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <progress id="progress" className="progress" aria-label="Survey" value={step} aria-valuemin="1" aria-valuenow={step} aria-valuemax="5" max="5" tabIndex={0} />
  )
}

export default ProgressBar;