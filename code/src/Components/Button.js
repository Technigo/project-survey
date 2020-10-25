import React from 'react';

const Button = ({
    disable,
    setSection,
    nextQuestion,
   
  }) => {
  
    const handleButton = () => {
        setSection(nextQuestion);
    };
    
  
    return (
      <div>
        <button
          type="button"
          className="next-button"
          btnText="Nästa"
          onClick={handleButton}
          disable={disable === false}  
        >
        Nästa
        </button>
      </div>
    );
  };

export default Button;