import React from "react";

const IntroPage = ( {nextQuestion} ) => {
    return <div>
    <span>Shine</span>
    <button type="button" onClick={nextQuestion}>Give feedback</button>
    </div>
}

export default IntroPage;