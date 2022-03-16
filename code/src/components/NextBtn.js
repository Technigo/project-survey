import React, { useState } from "react";

const NextBtn = ({ nextQuestion }) => {
    return <button type="button" onClick={nextQuestion}>Next</button>
}

export default NextBtn;