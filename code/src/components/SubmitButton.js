import React from 'react';


const SubmitButton =({onSetShowSummary}) => {

return(
<button className="sumbit-button" type="button" onClick={onSetShowSummary}>Summary</button> 


);
};

export default SubmitButton;