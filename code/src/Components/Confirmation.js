const Confirmation = ({ timeslot, workout, location }) => {
    return ( 
        <div className="confirmation">
            <h1>Aw Sweet!</h1>
            <p> Thanks for booking in! See you at {location} at {timeslot} for a {workout} class</p>
        </div>
     );
}
 
export default Confirmation;