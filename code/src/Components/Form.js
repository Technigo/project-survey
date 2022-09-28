/* import React, { useState } from 'react';
 */
import CheckMember from "./CheckMember";
import Register from "./Register";
import SignInMember from "./SignInMember";

const Form = () => {
    const WelcomeMsg = "WELCOME! To the next level gym"


    return ( 
        <>
        <div className="start">
            <h1>{WelcomeMsg}</h1>
            <CheckMember />
        </div>

        <div className="signIn">
            <SignInMember />
        </div>

        <div className="register">
            <Register />
        </div>

        </>
        
     );
}
 
export default Form;
