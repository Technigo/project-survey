import { useState } from "react";

const Register = () => {

    const [newbie, setNewbie] = useState("");
    const [email, setEmail] = useState("");
    //const [location, setLocation] = useState("");

    return ( 
        <div className="register-wrapper">
            <form>
                <div className="input">
                    <label htmlFor="">Name</label>
                    <input type="text" 
                    required
                    value={ newbie }
                    onChange={(e)=>setNewbie(e.target.value)}/>

                    <label>Email</label>
                    <input type="text" 
                    required
                    value={ email }
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                

            </form>
            {/* <button>Previous Step</button>
            <button>Continue</button> */}
        </div>
     );
}
 
export default Register;