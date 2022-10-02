import React, { useState } from 'react';
import SignInMember from "./SignInMember";
import Register from "./Register";
import Booking from "./Booking";
import Timeslot from './Timeslot';
import Confirmation from "./Confirmation";
import Welcome from './Welcome';

const Form = () => {
    /* const WelcomeMsg = "WELCOME! To the next level gym"; */
    const [page, setPage] = useState(0); //later this is used to determine the display based on which page we're on
    
    const [userEmail, setUserEmail] = useState("");
    const [passcode, setPasscode] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [register, setRegister] = useState("");
    const [timeslot, setTimeslot] = useState(""); 
    const [workout, setWorkout] = useState("");
    const [location, setLocation] = useState("");
 
    //title for each page 
    const FormTitles=["S&S", "Hey! Welcome Back", "Nice to see you here, book a trial with us", "Which Challenge Are You Taking Today?", "Book a Time", "Confirmation"];

    const InfoDisplay = ()=>{
        if (page === 0) {
            return <Welcome />
        } else if (page === 1){
            return <SignInMember userEmail = {userEmail} setUserEmail={setUserEmail} passcode={passcode} setPasscode={setPasscode}/>
        } else if (page === 2){
            return <Register newEmail={newEmail} setNewEmail={setNewEmail} register={register} setRegister={setRegister}/>
        } else if (page === 3){
            return <Booking workout={workout} setWorkout={setWorkout} location={location} setLocation={setLocation}/>
        } else if (page === 4){
            return <Timeslot setTimeslot={setTimeslot}/> 
        } else {
            return <Confirmation timeslot = {timeslot} setTimeslot={setTimeslot} workout={workout} setWorkout={setWorkout} location={location} setLocation={setLocation}/>
        }
    }

    return ( 
        <div className='info-wrapper'>
            <div className="progressBar">
                <div style={{ width: page === 0 ? "10%" : page === 1 ? "30%" : page ===2 ? "50%": page === 3 ? "70%" : page===4 ? "90%" :"100%" }}></div>
            </div>

            <div className="header">
                <h1 className="form-title">{FormTitles[page]}</h1> {/* this will change depending on which page you're in */}
            </div>
            
            <div className="info-display-wrapper"> 
                {InfoDisplay()} {/* see line 15-27 */}
            </div>

            <div className="footer">
                <button
                disabled = {page === 0}
                onClick = {() => { setPage((currentPage => currentPage -1))} }>Previous Step</button>

                <button 
            disabled = {page === 5}  
                onClick = {() => { 
                    if (page === FormTitles.length - 1) {
                        return alert("Confirmed");
                    } else {
                        setPage ((currentPage) => currentPage + 1);
                    }
                    } }
                >
                    {page === FormTitles.length - 2 ? "Submit" : "Continue"}
                </button>
            </div>
            

        </div>
        
     );
}
 
export default Form;
