import React from 'react';
import FinishScreen from 'components/FinishScreen.js';

const FinishButton = ({ screenRender, setScreenRender }) => {
  const handleDoneClick = () => {
    setScreenRender(<FinishScreen />);
  };

  return (
    <div className="finishBtn">
      {screenRender || (
        <button type="button" onClick={handleDoneClick}>
          Nope done
        </button>
      )}
    </div>
  );
};

export default FinishButton;