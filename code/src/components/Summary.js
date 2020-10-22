import React from 'react'

const startAgain = () => {
    document.location.href = "";
};


export const Summary = ({ name, knowHeadPhone, brand }) => {
    return (
        <section className="summary" tabIndex='0'>
            <p tabIndex='0'> Thank you {name} !</p>
            <p tabIndex='0'>So as we understand you own headphones from {brand}, and you awareness about it is "{knowHeadPhone}."</p>
            <button onClick={startAgain} tabIndex='0'>Start Again!</button>
        </section>
    )
}