import React from 'react';

const SubmitButton = ({ doSubmit }) => {
  return ( 
    <div>
      <button className="button"
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