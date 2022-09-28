import React from "react";

const QuestionFour= ({famous, setFamous}) => {
    const handleFamousChange = (event) => {
        setFamous (event.target.value)
    }

    return (
        <form>
            <h2>Which famous dog would you want to play with?</h2>
            <select
            onChange={handleFamousChange}
            value={famous}>
                <option value='Bruiser Woods'>Select dog</option>  
                <option value='Bruiser Woods'>Bruiser Woods</option>
                <option value='Bo Obama'>Bo Obama</option>
                <option value='Scooby Doo'>Scooby Doo</option>
                <option value='Lassie'>Lassie</option>
            </select>
        </form>
    );
}

export default QuestionFour