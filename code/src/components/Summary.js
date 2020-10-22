import React from 'react'

const startAgain = () => {
    document.location.href = "";
};


export const Summary = ({ name, knowHeadPhone, brand }) => {
    return (
        <section className="summary">
            <h4> Thank you {name}, So as we understand you own headphones from {brand} and you awareness about it is "{knowHeadPhone}."</h4>
            <button onClick={startAgain}>Start Again!</button>
        </section>
    )
}