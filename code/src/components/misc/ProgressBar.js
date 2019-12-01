import React from 'react';

export const ProgressBar = props => {
  const elements = [];
  const { totalSections, currentSection } = props;
  const tempSection = totalSections + 1;
  let styling = '';

  for (let j = 1; j < tempSection; j++) {
    styling = currentSection === j ? 'current-step' : '';
    elements.push(<div className={styling}>{j}</div>);
  }

  console.log(elements);

  return <div className="progress-bar">{elements}</div>;
};
