import React from 'react';

const SubmitButton = ({ doSubmit }) => {
  return ( 
    <div className="button">
      <button 
        type="submit"
        form="SurveyForm"
        onClick={() => doSubmit()}
      >
        Complete
      </button>
    </div>
   );
}
 
export default SubmitButton;