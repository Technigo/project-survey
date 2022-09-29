const Timeslot = () => {
    return ( 
        <>
         <div className="time">
         <label>Select a Time</label>
         
        <select>
            <option value="" disabled selected>Select your option</option>
            <option value="">8AM</option>
            <option value="">9AM</option>
            <option value="">10AM</option>
            <option value="">11AM</option>
            <option value="">12PM</option>
            <option value="">1PM</option>
            <option value="">2PM</option>
            <option value="">3PM</option>
            <option value="">4PM</option>
            <option value="">5PM</option>
            <option value="">6PM</option>
            <option value="">7PM</option>
            <option value="">8PM</option>
        </select>
        
         </div>
        </>
     );
}
 
export default Timeslot;