import React from "react";

const Overview = ({ date, rating, frequency, loyalty, feedback, satisfaction, submit }) => {
    
    return <div className='overview question'>
        <h2>A Short Summary Of Your Survey ✨</h2>
        <ul className='overview-list'>
            <li>
                <p>Last time you ordered our service: <span>{date}</span></p>    
            </li>
            <li>
                <p>Your satisfaction level: <span>{rating} - {satisfaction}</span></p>    
            </li>
            <li>
                <p>Order frequency: <span>{frequency}</span></p>    
            </li>
            <li>
                <p>Re-use our service: <span>{loyalty}</span></p>    
            </li>
            <li>
                <p>Your feedback to Shine: <span>{feedback}</span></p>    
            </li>
        </ul>
        <button className='btn submit-btn' type='submit' onSubmit={submit}>Submit</button>
    </div>
} 

export default Overview;