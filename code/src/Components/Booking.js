
const Booking = ({setWorkout, setLocation}) => {

   /*  const handleRadioBtn =(e) =>{
        console.log(e.target.value);
        e.target.value;
    }

    const handleCheckBox =(e) =>{
        console.log(e.target.value);
        e.target.value;
    } */

    return ( 
        <>
        <div className="booking">
        <input type="radio" 
            name="holy-shred" 
            value="Holy-Shred"
            onChange={e=>setWorkout(e.target.value)} />
            <label htmlFor="">Holy Shred</label>

            <input type="radio" 
            name="holy-build" 
            value="Holy-Build"
            onChange={e=>setWorkout(e.target.value)}  />
            <label htmlFor="">Holy Build</label>

            <input type="radio" 
            name="holy-ride" 
            value="Holy-Ride"
            onChange={e=>setWorkout(e.target.value)}/>
            <label htmlFor="">Holy Ride</label>

            <input type="radio" 
            name="holy-box" 
            value="Holy-Box"
            onChange={e=>setWorkout(e.target.value)}  />
            <label htmlFor="">Holy Box</label>

            <input type="radio" 
            name="holy-booty" 
            value="Holy-Booty"
            onChange={e=>setWorkout(e.target.value)} />
            <label htmlFor="">Holy Booty</label>

            <input type="radio" 
            name="open-gym" 
            value="Open-Gym"
            onChange={e=>setWorkout(e.target.value)} />
            <label htmlFor="">Open Gym</label>
        </div>

        <div className="location-wrap">   
            <p className="which-gym">Which location are you going?</p>

            <div className="location">
                <input type="checkbox" 
                name="location"
                value="Oud-Zuid"
                onChange={e=>setLocation(e.target.value)} />
                <label>Oud-Zuid</label>

                <input type="checkbox"
                name="location"
                value="Oud-West" 
                onChange={e=>setLocation(e.target.value)}/>
                <label>Oud-West</label>
            </div>
        </div> 
        </>
     );
}
 
export default Booking;






