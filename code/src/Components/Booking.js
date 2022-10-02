
const Booking = () => {

    const handleRadioBtn =(e) =>{
        console.log(e.target.value);
        e.target.value;
    }

    const handleCheckBox =(e) =>{
        console.log(e.target.value);
        e.target.value;
    }

    return ( 
        <>
        <div className="booking">
        <input type="radio" 
            name="holy-shred" 
            value="holy-shred"
            onChange={handleRadioBtn} />
            <label htmlFor="">Holy Shred</label>

            <input type="radio" 
            name="holy-build" 
            value="holy-build"
            onChange={handleRadioBtn} />
            <label htmlFor="">Holy Build</label>

            <input type="radio" 
            name="holy-ride" 
            value="holy-ride"
            onChange={handleRadioBtn}/>
            <label htmlFor="">Holy Ride</label>

            <input type="radio" 
            name="holy-box" 
            value="holy-box"
            onChange={handleRadioBtn} />
            <label htmlFor="">Holy Box</label>

            <input type="radio" 
            name="holy-booty" 
            value="holy-booty"
            onChange={handleRadioBtn} />
            <label htmlFor="">Holy Booty</label>

            <input type="radio" 
            name="open-gym" 
            value="open-gym"
            onChange={handleRadioBtn}/>
            <label htmlFor="">Open Gym</label>
        </div>

        <div className="location">   
            <p className="which-gym">Which location are you going?</p>
            <input type="checkbox" 
            name="location"
            value="oud-zuid"
            onChange={handleCheckBox}/>
            <label>Oud-Zuid</label>

            <input type="checkbox"
            name="location"
            value="oud-west" 
            onChange={handleCheckBox}/>
            <label>Oud-West</label>
        </div> 
        </>
     );
}
 
export default Booking;






