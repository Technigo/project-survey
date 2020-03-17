import React from "react";

export const Button = (props) => {
    const  { type, title } = props;

    return (
        <div>
           <button type={type}>{title}</button>  
        </div>
    );
};