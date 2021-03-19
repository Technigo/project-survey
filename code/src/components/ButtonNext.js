import React, { useState } from 'react'

const ButtonNext = ({ questionIndex, setQuestionIndex }) => {

    const onQuestionIndexChange = () => {
        console.log(questionIndex)
        setQuestionIndex(questionIndex +1)
    }

    return (
        <>
            <button 
                type="button"
                className='next-button'
                onClick={onQuestionIndexChange}>
                Next
            </button>
                
        </>
    )
}

export default ButtonNext;


