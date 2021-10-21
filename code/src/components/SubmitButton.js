import React from 'react';


const SubmitButton =({onSetShowSummary}) => {

return(

<button className="submit-button" type="button" onClick={onSetShowSummary}>Submit</button> 

);
};

export default SubmitButton;