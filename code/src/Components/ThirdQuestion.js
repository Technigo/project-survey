import React from 'react'


const ThirdQuestion = ({homeInput, onHomeInputChange, onStepChange}) => {
    return (
        <div className="thirdQuestion">
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
                    Rawenclaw
                    </label>

    <button className="btn" onClick={onStepChange}>Next Question</button>            

                
            </form>
        </div>



    )


}


export default ThirdQuestion