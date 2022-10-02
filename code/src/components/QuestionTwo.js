import React from 'react'
import QuestionThree from './QuestionThree'


export const QuestionTwo = (props) => {

    const answerTwoOptions = [ 
    "Long and sturdy ladder behind the cube ",
    "Thin small ladder beside the cube",
    "Rusty ladder far far away",
    "There are many ladders all over the place, cant count!"]
            //console.log(props.value) dev purposes

return(    //stop rerendering on submit
    <form className="containerTwo m-8" onSubmit={(event) => event.preventDefault}> 
        <p className="answerOptions text-center">Answer options:</p>
        {answerTwoOptions.map(answer =>(
            <label className="label p-5  text-lg" key = {answer}>
                <input 
                type = "radio"
                value = {answer}
                radioGroup="questionTwo"
                onChange = {event => props.setanswerTwoOption(event.target.value)}
                checked = {props.value === answer}
                />
                {answer}
            </label>
        ))}
    </form>
    )
    
}