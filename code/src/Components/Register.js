import { useState } from "react";

const Register = () => {

    const [newbie, setNewbie] = useState("");
    const [email, setEmail] = useState("");

    return ( 
        <div className="register-wrapper">
            <h2>Nice to see you here! Register to book a trial</h2>
            <form>
                <label htmlFor="">Name</label>
                <input type="text" 
                required
                value={ newbie }
                onChange={(e)=>setNewbie(e.target.value)}/>

                <label htmlFor="">Email</label>
                <input type="text" 
                required
                value={ email }
                onChange={(e)=>setEmail(e.target.value)}/>

                <p>{email}</p>

            </form>
        </div>
     );
}
 
export default Register;