import React, { useState } from 'react';
import SignInMember from "./SignInMember";
import Register from "./Register";
import Booking from "./Booking";
import Timeslot from './Timeslot';
import Confirmation from "./Confirmation";

const Form = () => {
    const WelcomeMsg = "WELCOME! To the next level gym";
    const [page, setPage] = useState(0);

    //title for each page 
    const FormTitles=["Hey! Welcome Back", "Nice to see you here, book a trial with us", "Which Challenge Are You Taking Today?", "Book a Time", "Confirmation"];

    const InfoDisplay = ()=>{
        if (page === 0){
            return <SignInMember />
        } else if (page === 1){
            return <Register />
        } else if (page === 2){
            return <Booking />
        } else if (page === 3){
            return <Timeslot /> 
        } else {
            return <Confirmation />
        }
    }

    return ( 
        <>
        <div className="progressBar">
            <div style={{ width: page === 0 ? "20%" : page === 1 ? "40%" : page ===2 ? "60%": page === 3 ? "80%" : "100%" }}></div>
        </div>
        <div className="header">
            <h1>{WelcomeMsg}</h1> {/* this will permanently display */} 
            <h2>{FormTitles[page]}</h2> {/* this will change depending on which page you're in */}
        </div>

        <div className="info-display-wrapper">
            {InfoDisplay()}
        </div>

        <div className="footer">
            <button
            disabled = {page === 0}
            onClick = {() => { setPage((currentPage => currentPage -1))} }>Previous Step</button>
            <button 
            disabled = {page === FormTitles.length -1}
            onClick = {() => { setPage((currentPage => currentPage +1))} }
            >Continue</button>
        </div>

        </>
        
     );
}
 
export default Form;
