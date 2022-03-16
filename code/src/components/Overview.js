import React, { useState } from "react";

const Overview = ({ date, rating, frequency, loyalty, feedback, satisfaction }) => {
    
    return <div>
        <p>A Short Review from Your Survey</p>
        <p>Last time you ordered our service: {date} </p>
        <p>Your satisfaction with our service: {rating} - {satisfaction} </p>
        <p>Frequency: {frequency} </p>
        <p>Re-use our service: {loyalty} </p>
        <p>Your feedback to Shine: {feedback}</p>
        <button type="submit">Submit</button>
    </div>
} 

export default Overview;