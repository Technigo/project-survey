import React from 'react';

export const Button = (props) => {
    const  { clickFunction, style, type, title } = props;

    return (
        <div>
           <button onClick={clickFunction} className={style} type={type}>{title}</button>  
        </div>
    );
};