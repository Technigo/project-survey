import preferDefaultExport from "eslint-plugin-import/lib/rules/prefer-default-export";
import React from "react";

const QuestionThree = ({answerThreeOption, setanswerThreeOption}) =>{

    const answerThree = event => {
        setanswerThreeOption(event.target.value)
    }

return(
    <form className="dropDownOptions p-10" onSubmit={(event) => event.preventDefault}> 
    <h1 className="p-2 text-lg'">Survey</h1>
    <p className="answerOptions m-6 p-4">What option would fit you the most?</p>
        <select className="dropDown m-5 p-5 hover:bg-pink-200"
        onChange = {(event) => setanswerThreeOption(event.target.value)}
        value = {answerThreeOption}
        defaultChecked={answerThreeOption}>
        <option value="">Select option</option>
        <option value="One">One super shiny flower</option>
        <option value="Two">Bouquet of flowers</option>
        <option value="Three">Flowers are all around the cube</option>
        <option value="Four">No flowers at all</option>
        </select>
    </form>
)


}

export default QuestionThree;