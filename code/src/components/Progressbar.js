import React from 'react'

const ProgressBar = (props) => {
  const step = props.step

  let progress = step * 20
  let width = ( progress / 100 ) * 200

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: '50px',
    backgroundColor: 'red',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <div style={{width: `${width}px`}} className="labelStyles">
          <p>{progress} %</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar