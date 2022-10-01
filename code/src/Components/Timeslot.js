import { useState } from "react";

const Timeslot = () => {

    const [timeslot, setTimeslot] = useState(""); 
    
    return ( 
         <div className="time">
         
         <label>Select a Time</label>
            <select value={timeslot}
            onChange ={(e)=>setTimeslot(e.target.value)} >
                <option disabled selected>Select your option</option>
                <option>8AM</option>
                <option>9AM</option>
                <option>10AM</option>
                <option>11AM</option>
                <option>12PM</option>
                <option>1PM</option>
                <option>2PM</option>
                <option>3PM</option>
                <option>4PM</option>
                <option>5PM</option>
                <option>6PM</option>
                <option>7PM</option>
                <option>8PM</option>
            </select>
            {/* <p>{timeslot}</p> */}
         </div>
     );
}
 
export default Timeslot;