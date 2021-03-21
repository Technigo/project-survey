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
    const radioAnswers = ["Wiccan", "Pagan", "Eclectic", "Other"]
    console.log(firstThought)
    console.log(radioValue)
    console.log(dropDown)
    console.log(societysPortrayal)

    return (
        <form>
            {currentPage === 0 && (
                <div>
                    <h1>Merry Meet and Blessed Be! 🔮<span>🕯️</span></h1>
                </div>
            )}
            
            {currentPage === 1 && (
                <div className="question-one-container">
                  < TextInputOne
                    labelText = {"1. When you think of the term 'Witch' what are the first few words that comes to mind?🔮"}
                    id="1"
                    setFirstThought={setFirstThought}
                  />
                </div>
            )}
            {currentPage === 2 && (
                <div className="question-two-container">
                    <h2>2. What is the most accurate description of your practice/craft?🔮</h2>
                    <div className="radio-button-container">
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
                </div>
            )}
            {currentPage === 3 && (
                <div className="question-three-container">
                  < SelectList
                    questionText = {"3. How long have you been practicing witchcraft?🔮"}
                    setDropDown = {setDropDown}
                  />
                </div>
            )}
            {currentPage === 4 && (
                <div className="question-four-container">
                  < TextInputTwo
                    labelText = {"4. Do you think society's portrayal of witches is fair? Please explain your answer.🔮"}    
                    id="4"       
                    setSocietysPortrayal={setSocietysPortrayal}
                  />
                </div>
            )}
            {currentPage === 5 && (
                <>
                <div className="summary-container">
                    < Summary 
                        radioValue = {radioValue}
                        dropDown = {dropDown}
                        firstThought = {firstThought}
                        societysPortrayal = {societysPortrayal}
                    />
                </div>
                    < Button 
                        buttonText = "Submit"
                        buttonType = "Submit"
                    />
                </>
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