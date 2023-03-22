/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable indent */
import React from 'react';

const Result = ({ name, purchases, favProduct }) => {
    return (
        <>
        <p>Awesome! Thank you for completing our survey {name}.</p>
        <p>You have used our online store {purchases} and we appreciate that, your favorite out of our range of ultra nostalgic products are {favProduct}.</p>
        </>
    )
}

export default Result;