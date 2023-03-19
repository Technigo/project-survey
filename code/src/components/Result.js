/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';

const Result = ({ name, food, favProduct }) => {
    return (
        <>
        <p>Awesome! Thank you for completing our survey {name}.</p>
        <p>You have used our online store {food} and we appreciate that, your favorite out of our range of ultra nostalgic products are {favProduct}.</p>
        </>
    )
}

export default Result;