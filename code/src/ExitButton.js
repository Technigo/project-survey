import React from 'react';

const ExitButton = ({ onExit }) => {
  return ( 
    <div>
      <button className="button exit-button"
        type="submit"
        form="exitToHeader"
        onClick={() => onExit()}
      >
        Exit
      </button>
    </div>
  );
};
 
export default ExitButton;
