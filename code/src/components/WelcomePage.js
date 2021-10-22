import React from "react";

const WelcomePage = ({setWelcome}) => {
return(<><p className="welcome-text">Hi, please answer some questions about your favourite CSS properties.</p>
    <button className="start-btn" onClick={setWelcome}
    >Click here to start</button></>)
}

export default WelcomePage