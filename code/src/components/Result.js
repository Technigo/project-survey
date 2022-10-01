import React from "react";

export const Result = ({ name, activity, size, famous }) => {
    return (
        <>
        <div className="result-container">
         <h2 tabindex='0'>Alrighty then!</h2>
            <p tabindex='0'> Here are your answers, please press submit if you are satisfied with them.  </p>
            <p> <span className="bold"> Email:</span>  {name}</p>
            <p> <span className="bold"> Where to spend quality time: </span> {activity}</p>
            <p> <span className="bold"> Preferred size: </span>  {size}</p>
            <p> <span className="bold">  Favourite famous dog: </span> {famous}</p>
        </div>

        <div className="image-center">
            <img className='third-image' src='/images/dog-walking.png' alt='Woman on a dogwalk'/>
        </div>
        </>
    );
}

export default Result