import React from "react";


const SignUpButton =({reset, element, onSignUp}) => {

return (
<button onClick={onSignUp} className="signup-button">
          Sign up below!
        </button>
);
};



export default SignUpButton;