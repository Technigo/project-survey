import React from 'react';


const SubmitButton =({onSetShowSummary}) => {

return(
<div>
<div className="submit">
<button className="submit-button" type="button" onClick={onSetShowSummary}>Submit</button> 
</div>

<section className="quote">
<h4>"Rememeber! A balanced diet is a cookie in each hand!"</h4>
</section>
</div>
);
};

export default SubmitButton;