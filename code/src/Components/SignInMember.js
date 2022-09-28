import { useState } from "react";

const SignInMember = () => {

    const [name, setName] = useState("");
    const [passcode, setPasscode] = useState("");

    return ( 
       <div className="memberSignIn">
        <h2>Hey, welcome back!</h2>
        <form>
            <label htmlFor="">Name:</label>
            <input 
                type="text" 
                required
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <label htmlFor="">Passcode:</label>
            <input 
                type="text" 
                required
                value={passcode}
                onChange={(e)=>setPasscode(e.target.value)}
            />
        </form>
        <button>Previous Step</button>
        <button>Continue</button>
        {/* <p>{name}</p> */}
        {/* <p>{passcode}</p> */}
       </div> 
        
     );
}
 
export default SignInMember;