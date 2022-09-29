import React from "react";

export const Result = ({ name, activity, size, famous }) => {
    return (
        <>
         <h2>Here we go!</h2>
            <p>Email: {name}</p>
            <p> Activity: {activity}</p>
            <p>Size: {size}</p>
            <p>Famous: {famous}</p>

            <p>Please press submit if you are satisfied with your answers. Otherwise, you can go back and change.  </p>
        </>
    );
}

export default Result