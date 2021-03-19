import React, { useState } from 'react'

const ButtonBack = ({ questionIndex, setQuestionIndex }) => {

    const onBackIndexChange = () => {
        setQuestionIndex(questionIndex -1)
    }

    return (
        <>
            <button
                type="button"
                onClick={onBackIndexChange}>
                Back
            </button>
                
        </>
    )
}

export default ButtonBack;





