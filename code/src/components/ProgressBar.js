import React from 'react';

const ProgressBar = (props) => {
  const { completed, totalQuestions } = props;

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${(completed / totalQuestions) * 100}%`,
    backgroundColor: '#00695c',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontSize: 10,
    letterSpacing: -1,
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed} of ${totalQuestions}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
