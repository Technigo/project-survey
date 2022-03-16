import React, {useState} from 'react'

// imported Components
import QuestionOne from 'components/QuestionOne'
import QuestionTwo from 'components/QuestionTwo'
import Summary from './Summary'


// import QuestionThree from 'components/QuestionThree'
// import QuestionFour from 'components/QuestionFour'


const Form = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isSummaryDisplayed, setIsSummaryDisplayed]= useState(false)
    
    const handleInputChange= (event)=> {
        setName(event.target.value)
       }
    const handleSecondInputChange= (event)=> {
        setEmail(event.target.value)
      }

    return(
        <section>
            <QuestionOne name={name} onInputChange={handleInputChange}/>
            <QuestionTwo email={email} onSecondInputChange={handleSecondInputChange}/>
            {/* <QuestionThree/>
            <QuestionFour/> */}
            <button onClick={() =>setIsSummaryDisplayed(true)}>Show Summary!</button>

       {isSummaryDisplayed && (
            <Summary
            name={name}
            email={email}
            />
        )}
    </section>

    )
}

export default Form