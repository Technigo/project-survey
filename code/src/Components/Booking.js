
const Booking = ({setWorkout, setLocation}) => {

   const workouts = [
    {
        name:"holy-shred",
        value:"Holy Shred",
        label: "Holy Shred"
    },
    {
        name:"holy-build",
        value:"Holy Build",
        label: "Holy Build"
    },
    {
        name:"holy-ride",
        value:"Holy Ride",
        label: "Holy Ride"
        },
    {
        name:"holy-shred",
        value:"Holy Booty",
        label: "Holy Booty"
        }, 
    {
        name:"open-gym",
        value:"Open Gym",
        label: "Open Gym"
        }
     ]

     const locations = [
        {
            name:"oud-zuid",
            value:"Oud Zuid",
            label:"Oud Zuid"
        },
        {
            name:"oud-west",
            value:"Oud West",
            label:"Oud West"
        }
     ]

    return (
        <>
        <div className="booking">
        {workouts.map(workout => {
        return (
            <> 
            <input 
            type="radio" 
            name= {workout.name}
            value= {workout.value}
            onChange={e=>setWorkout(e.target.value)} />
            <label>{workout.label}</label>
            </>
        )
    })} 
    </div>
    
    <div className="location">
        {locations.map(location => {
            return(
                <>
                <input type="checkbox" 
                name={location.name}
                value={location.value}
                onChange={e=>setLocation(e.target.value)} />
                <label>{location.label}</label>
                </>
            )
        })}
    </div>
    </>

    )
}
 
export default Booking;






