import React from "react";

 const LastQuestion = (props) => {

const {onStepChange} = props;
return <button className="overview-btn" onClick={onStepChange}>see overview</button>

 }
 export default LastQuestion;