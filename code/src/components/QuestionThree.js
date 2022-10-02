import React from "react";

const QuestionThree = ({answerThreeOption, setanswerThreeOption}) =>{

    const answerThree = event => {
        setanswerThreeOption(event.target.value)
    }

return(
    <form className='container p-10 content-center' onSubmit={(event) => event.preventDefault}> 
    <p className="answerOptions m-6 p-4 font-3xl">What option would fit you the most?</p>
    <div className="inputPad">  
        <select className="dropDown ml-8 p-5 hover:bg-pink-200"
        onChange = {(event) => setanswerThreeOption(event.target.value)}
        value = {answerThreeOption}
        defaultChecked={answerThreeOption}>
        <option value="">Select option</option>
        <option value="One super shiny flower">One super shiny flower</option>
        <option value="Bouquet of flowers">Bouquet of flowers</option>
        <option value="Flowers are all around the cube">Flowers are all around the cube</option>
        <option value="No flowers at all">No flowers at all</option>
        </select> 
    </div>      
    </form>   
    )
}

export default QuestionThree;