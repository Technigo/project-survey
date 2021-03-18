import React, { useState } from 'react' 
import Button from 'components/Button'
import TextInputOne from 'components/TextInputOne'
import RadioButton from 'components/RadioButton'
import SelectList from './SelectList'
import TextInputTwo from 'components/TextInputTwo'
import Summary from 'components/Summary'

const Form = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [radioValue, setRadioValue] = useState("")
    const [dropDown, setDropDown] = useState("")
    const [firstThought, setFirstThought] = useState("")
    const [societysPortrayal, setSocietysPortrayal] = useState("")

    const onPageChange = () => {
        setCurrentPage (currentPage + 1)
    }
    const radioAnswers = ["Yes", "No", "Not sure"]
    console.log(firstThought)
    console.log(radioValue)
    console.log(dropDown)
    console.log(societysPortrayal)

    return (
        <form>
            {currentPage === 0 && (
                <div className="first-page-container">
                    <h1>Welcome to the witchy survey! Press the button and get started.</h1>
                </div>
            )}
            
            {currentPage === 1 && (
                 < TextInputOne
                    labelText = {"1. When you hear the term 'Witch' what are the first few words that come to mind?"}
                    id="1"
                    setFirstThought={setFirstThought}
                 />
            )}
            {currentPage === 2 && (
                <div className = "radiobutton-container">
                    {radioAnswers.map(radioAnswer => {
                        return (
                            < RadioButton
                                labelText = {radioAnswer}
                                id = {radioAnswer}
                                key = {radioAnswer}
                                name = {"answers"}
                                setRadioValue = {setRadioValue}
                            />
                        )
                    })}
                </div>
            )}
            {currentPage === 3 && (
                 < SelectList
                 setDropDown = {setDropDown}
                 />
            )}
            {currentPage === 4 && (
                 < TextInputTwo
                 labelText = {"4. Do you think society's portrayal of witches is fair/accurate? Please explain your answer."}    
                 id="4"       
                 setSocietysPortrayal={setSocietysPortrayal}
             />
            )}
            {currentPage === 5 && (
                <div>
                    < Summary 
                        radioValue = {radioValue}
                        dropDown = {dropDown}
                        firstThought = {firstThought}
                        societysPortrayal = {societysPortrayal}
                    />
                    < Button 
                        buttonText = "Submit"
                        buttonType = "Submit"
                    />
                </div>
            )}
            {currentPage !== 5 && ( 
                < Button 
                    buttonText = {currentPage === 0 ? "Get started" : "Next"}
                    onPageChange = {onPageChange}
                />
            )}
        </form>
    )
}

export default Form;