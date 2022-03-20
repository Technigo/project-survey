import React from "react";
import { AiOutlineLeft } from "react-icons/ai";



const Buttons = ({ nextQuestion, prevQuestion, questionNum}) => {
    return <>
    {questionNum === 1 && (
    <button  className='btn next-btn'  type="button" onClick={nextQuestion}>Next</button>

    )} 
    {questionNum > 1 && questionNum < 6 && (
    <>
    <button className='btn prev-btn' type="button" onClick={prevQuestion}><AiOutlineLeft className='prev-icon'/></button>
    <button className='btn next-btn' type="button" onClick={nextQuestion}>Next</button>
    </>
    )}

    {questionNum === 6 && (
    <>
    <button className='btn prev-btn' type="button" onClick={prevQuestion}><AiOutlineLeft className='prev-icon'/></button>
    </>
    )}
    </>
}

export default Buttons;