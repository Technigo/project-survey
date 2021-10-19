import React from 'react';

const ProgressBar = (props) => {
  const { bgcolor, completed, totalQuestions } = props;

  const containerStyles = {
    height: 20,
    width: '60%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    // eslint-disable-next-line comma-dangle
    margin: 50,
  };

  const fillerStyles = {
    height: '100%',
    // width: `${completed}%`,
    width: `${(completed / totalQuestions) * 100}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    // eslint-disable-next-line comma-dangle
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    // eslint-disable-next-line comma-dangle
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
