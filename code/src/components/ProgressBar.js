import React from "react";


const ProgressBar = ({questionNum}) => {
    return <progress max='5' value={questionNum}></progress>
}


export default ProgressBar;