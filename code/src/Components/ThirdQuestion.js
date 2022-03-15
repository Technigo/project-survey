import React from 'react'


const ThirdQuestion = ({homeInput, onHomeInputChange, onStepChange}) => {
    return (
        <section className="questionWrapper">
        <div className="question">
            <form>
                <h2>In which dormitory do you think you belong?</h2>
                <label className="dormitorys">
                    <input 
                    type="radio"
                    name="dormitorys"
                    value="slytherin"
                    onChange = {onHomeInputChange}
                    defaultChecked = {homeInput==="Slytherin"}
                    />
                    Slytherin
                    </label>
                    <label className="dormitory">
                    <input 
                    type="radio"
                    name="dormitorys"
                    value="ravenclaw"
                    onChange = {onHomeInputChange}
                    defaultChecked = {homeInput==="Rawenclaw"}
                    />
                    Ravenclaw
                    </label>
                    <label className="dormitory">
                    <input 
                    type="radio"
                    name="dormitorys"
                    value="gryffindor"
                    onChange = {onHomeInputChange}
                    defaultChecked = {homeInput==="Gryffindor"}
                    />
                    Gryffindor
                    </label>
                    <label className="dormitory">
                    <input 
                    type="radio"
                    name="dormitorys"
                    value="hufflepuff"
                    onChange = {onHomeInputChange}
                    defaultChecked = {homeInput==="Hufflepuff"}
                    />
                    Hufflepuff
                    </label>

    <button className="btn" onClick={onStepChange}>Next Question</button>            

                
            </form>
        </div>
        </section>



    )


}


export default ThirdQuestion