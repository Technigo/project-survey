import React from 'react';

const Progressbar = ({ progress }) => {
  const ChildWidth = {
    width: `${progress + 10}%`
  }

  return (
    <div className="progress-parent">
      <div className="progress-child" style={ChildWidth}>
        <span className="progresstext">{`5/${progress}`}</span>
      </div>
    </div>
  )
}

export default Progressbar;