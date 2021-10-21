import React from "react";


const SignUpButton =({reset, element, onSignUp}) => {

return (
<button onClick={onSignUp} className="signup-button">
          Bake me up!
        </button>
);
};



export default SignUpButton;