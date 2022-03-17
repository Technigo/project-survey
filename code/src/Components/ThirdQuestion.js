import React from 'react'


const ThirdQuestion = ({homeInput, onHomeInputChange, onStepChange}) => {
    return (
        <section className="questionWrapper">
        <div className="question">
            <form>
                <h2>In which dormitory do you belong?</h2>
                <div className="radioGroup">
                <label className="dormitory">
                    <input 
                    type="radio"
                    name="dormitorys"
                    value="Slytherin"
                    onChange = {onHomeInputChange}
                    defaultChecked = {homeInput==="Slytherin"}
                    />
                    Slytherin
                    </label>
                    <label className="dormitory">
                    <input 
                    type="radio"
                    name="dormitorys"
                    value="Ravenclaw"
                    onChange = {onHomeInputChange}
                    defaultChecked = {homeInput==="Rawenclaw"}
                    />
                    Ravenclaw
                    </label>
                    <label className="dormitory">
                    <input 
                    type="radio"
                    name="dormitorys"
                    value="Gryffindor"
                    onChange = {onHomeInputChange}
                    defaultChecked = {homeInput==="Gryffindor"}
                    />
                    Gryffindor
                    </label>
                    <label className="dormitory">
                    <input 
                    type="radio"
                    name="dormitorys"
                    value="Hufflepuff"
                    onChange = {onHomeInputChange}
                    defaultChecked = {homeInput==="Hufflepuff"}
                    />
                    Hufflepuff
                    </label>
                    </div>

                    <button className="btn" onClick={onStepChange}>Next Question</button>            

                
            </form>
        </div>
        </section>
    )}
export default ThirdQuestion