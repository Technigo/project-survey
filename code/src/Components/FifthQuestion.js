import React from 'react'

const FifthQuestion = ({setLike, onLikeInputChange, onStepChange}) => {
    return (
        <section className="questionWrapper">
            <div className="question">
               
            <p>Custom range slider:</p>
            <input type="range" min="1" max="100" value="0" className="slider" id="myRange" onChange={setLike} />
            </div> 

            <button className = "btnslider" onClick = {onStepChange} > Start </button>




            
        </section>

    )
}




export default FifthQuestion