import React from 'react';

const ExitButton = ({ onExit }) => {
  return ( 
    <section className="exit-button">
      <button 
        type="submit"
        form="exitToHeader"
        onClick={() => onExit()}
      >
        Exit
      </button>
    </section>
  );
}
 
export default ExitButton;