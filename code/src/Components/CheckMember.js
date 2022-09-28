import { useState } from "react";

const CheckMember = () => {

    const [member,setMember] = useState("");
    

    return ( 
        <div className="checkMember">
            <label htmlFor="">Are you</label>
            <select name="checkIfMember" id="checkIfMember"
            value={member}
            onChange={(e)=>setMember(e.target.value)}>
                <option value="" disabled selected>--Select your option--</option>
                <option value="member">Member Login</option>
                <option value="trial">Book a Trial</option>
            </select>
            {/* <p>{member}</p> */}
            
            <button className="continue">Continue</button>
        </div>
     );
}
 
export default CheckMember;