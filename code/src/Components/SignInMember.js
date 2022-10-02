import { useState } from "react";

const SignInMember = () => {

    const [name, setName] = useState("");
    const [passcode, setPasscode] = useState("");

    return ( 
       <div className="memberSignIn">
        <form>
            <label>Name:</label>
            <input 
                type="text" 
                required
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <label htmlFor="">Passcode:</label>
            <input 
                type="password" 
                required
                value={passcode}
                onChange={(e)=>setPasscode(e.target.value)}
            />
        </form>
         {/* <p>{name}</p>  */} {/* checking if name and passcode prints on the page. yes it does */}
        {/* <p>{passcode}</p> */}

        <p className="newbie-guide">Not a member yet 😉? Click continue to book a trial</p>
       </div> 
        
     );
}
 
export default SignInMember;