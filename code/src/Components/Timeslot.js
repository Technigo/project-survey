

const Timeslot = ({ timeslot, setTimeslot }) => {
    
    return ( 
         <div className="time">
         
         <label>Select a Time</label>
            <select 
            onChange ={(e)=>setTimeslot(e.target.value)} >
                <option value = "" disabled selected>Select your option</option>
                <option value = "8am">8AM</option>
                <option value = "9am">9AM</option>
                <option value = "10am">10AM</option>
                <option value = "11am">11AM</option>
                <option value = "12pm">12PM</option>
                <option value = "1pm">1PM</option>
                <option value = "2pm">2PM</option>
                <option value = "3pm">3PM</option>
                <option value = "4pm">4PM</option>
                <option value = "5pm">5PM</option>
                <option value = "6pm">6PM</option>
                <option value = "7pm">7PM</option>
                <option value = "8pm">8PM</option>
            </select>
         </div>
     );
}
 
export default Timeslot;