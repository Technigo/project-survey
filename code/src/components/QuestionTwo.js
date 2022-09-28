import React from 'react'


export const QuestionTwo = ({answerTwoOption, setanswerTwoOption}) => {
    

    const answerTwoOptions = [ 
    "Long and sturdy ladder behind the cube ",
    "Thin small ladder beside the cube",
    "Rusty ladder far far away",
    "There are many ladders all over the place, cant count!"]


return(                                   //stop rerendering on submit
    <form className="radioOptions" onSubmit={(event) => event.preventDefault}> 
        <p className="answerOptions">Answer options:</p>
        {answerTwoOptions.map(answer =>(
            <label className="label" key = {answer}>
                <input type = "radio"
                value = {answer}
                onChange = {event => setanswerTwoOption(event.target.value)}
                checked = {answerTwoOptions === answer}/>
                {answer}
            </label>
        ))}
    </form>
    )
}