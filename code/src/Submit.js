import React from "react";

export const Submit = (props) => {
    return (
        <button
        type="submit"
        value='summary'>
            <h1>{props.text}</h1>
        </button>
    );
};

