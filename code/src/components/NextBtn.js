import React, { useState } from "react";


const NextBtn = ({ nextQuestion }) => {
    return <button className='btn' type="button" onClick={nextQuestion}>Next</button>
}

export default NextBtn;