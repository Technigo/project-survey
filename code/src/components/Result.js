import React from "react";

export const Result = ({ name, activity, size, famous }) => {
    return (
        <>
        <div className="result-container">
         <h2 tabindex='0'>Alrighty then!</h2>
            <p tabindex='0'> <span className="bold">Here are your answers, please press submit if you are satisfied with them. </span>  </p>
            <p>Email: {name}</p>
            <p>Favourite activity: {activity}</p>
            <p>Preferred size: {size}</p>
            <p>Favourite famous dog: {famous}</p>
        </div>

        <div className="image-center">
            <img className='third-image' src='/images/dog-walking.png' alt='Woman on a dogwalk'/>
        </div>
        </>
    );
}

export default Result