import React from 'react';

export const Button = (props) => {
    const  { clickFunction, item, style, type, title } = props;

    return (
        <div>
            <button onClick={clickFunction} disabled={item === ''} className={style} type={type}>{title}</button>  
            {item === '' && type === 'submit' && <p>Please answer all the questions to proceed, thank you!</p> }
        </div>
    );
};
