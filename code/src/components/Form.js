import React, {useState} from 'react'

// imported Components
import QuestionOne from 'components/QuestionOne'
import QuestionTwo from 'components/QuestionTwo'
import QuestionThree from 'components/QuestionThree'
import QuestionFour from 'components/QuestionFour'
import Summary from './Summary'


const Form = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [locations, setLocations] = useState('')
    const [ageGroup, setAgeGroup] = useState()
    const [isSummaryDisplayed, setIsSummaryDisplayed] = useState(false)
    
    const handleInputChange = (event) => {
        setName(event.target.value)
    }
    const handleSecondInputChange = (event) => {
        setEmail(event.target.value)
    }
    const handleThirdInputChange = (event) => {
        setLocations(event.target.value)
    }
    const handleFourthInputChange = (event) => {
        setAgeGroup(event.target.value);
    }
    return(
        <section>
            <QuestionOne name={name} onInputChange={handleInputChange} />
            <QuestionTwo email={email} onSecondInputChange={handleSecondInputChange} />
            <QuestionThree location={locations} onThirdInputChange={handleThirdInputChange} />
            <QuestionFour group={ageGroup} handleFourthInputChange={handleFourthInputChange} />
            <button onClick={() => setIsSummaryDisplayed(true)}>Show Summary!</button>
       {isSummaryDisplayed && (
            <Summary
            name={name}
            email={email}
            location={locations}
            locations={locations}
            ageGroup={ageGroup}
            />
        )}
    </section>
    )
}
export default Form                 

// const Form = () =>{
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [locations, setLocations] = useState('')
//     const [ageGroup, setAgeGroup] = useState()
//     const [isSummaryDisplayed, setIsSummaryDisplayed]= useState(false)
    
//     const handleInputChange= (event)=> {
//         setName(event.target.value)
//        }
//     const handleSecondInputChange= (event)=> {
//         setEmail(event.target.value)
//       }
//     const handleThirdInputChange =(event)=> {
//         setLocations(event.target.value)
//     }
//     const handleFourthInputChange =(event)=> {
//         setAgeGroup(event.target.value)
//     }

//     return(
//         <section>
//             <QuestionOne name={name} onInputChange={handleInputChange}/>
//             <QuestionTwo email={email} onSecondInputChange={handleSecondInputChange}/>
//             <QuestionThree 
//                 location={locations} onThirdInputChange={handleThirdInputChange}/>
//             <QuestionFour group={ageGroup} handleFourthInputChange={handleFourthInputChange}/>

//             <button onClick={() =>setIsSummaryDisplayed(true)}>Show Summary!</button>

//        {isSummaryDisplayed && (
//             <Summary
//             name={name}
//             email={email}
//             location={locations}
//             locations={locations}
            
//             />
//         )}
//     </section>

//     )
// }

// export default Form