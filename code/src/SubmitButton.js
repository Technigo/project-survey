import React from 'react';

const SubmitButton = ({ doSubmit }) => {
  return ( 
    <section className="button">
      <button 
        type="submit"
        form="SurveyForm"
        onClick={() => doSubmit()}
      >
        Complete
      </button>
    </section>
   );
}
 
export default SubmitButton;