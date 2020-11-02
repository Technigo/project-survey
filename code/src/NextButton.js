import React from 'react';

const NextButton  = ({ sectionId, disabled }) => {
  const handleSectionChange = () => {
    window.location.hash = `#${sectionId}`;
  }

  return (
    <div className="next-button">
      <button className="button"
        type="button"
        onClick={() => handleSectionChange()}
      >
        Next
     </button>
    </div>
    );
};
 
export default NextButton ;
