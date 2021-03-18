import React, { useState } from 'react' 
import Button from 'components/Button'
import TextInput from 'components/TextInput'
import RadioButton from 'components/RadioButton'
import SelectList from './SelectList'
import Summary from 'components/Summary'

const Form = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [radioValue, setRadioValue] = useState("")
    const onPageChange = () => {
        setCurrentPage (currentPage + 1)
    }
    const radioAnswers = ["Yes", "No", "Not sure"]
    console.log(radioValue)

    return (
        <form>
            {currentPage === 0 && (
                <div className="first-page-container">
                    <h1>Welcome to the witchy survey! Press the button and get started.</h1>
                </div>
            )}
            
            {currentPage === 1 && (
                 < TextInput
                    labelText = {"1. When you hear the term 'Witch' what are the first few words that come to mind?"}
                    id="1"
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
                 < SelectList/>
            )}
            {currentPage === 4 && (
                 < TextInput
                 labelText = {"4. Do you think society's portrayal of witches is fair/accurate? Please explain your answer."}    
                 id="4"       
             />
            )}
            {currentPage === 5 && (
                <div>
                    < Summary />
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