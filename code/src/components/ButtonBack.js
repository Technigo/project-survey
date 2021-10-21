import React from 'react'

const ButtonBack = ({ questionIndex, setQuestionIndex }) => {

    const onBackIndexChange = () => {
        setQuestionIndex(questionIndex -1)
    }

    return (
        <>
            <button
                type="button"
                className='back-button'
                onClick={onBackIndexChange}>
                Back
            </button>
                
        </>
    )
}

export default ButtonBack;





