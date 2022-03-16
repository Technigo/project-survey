import React, {useState} from 'react'
import Summary from './Summary'
import FirstQuestion from './FirstQ'
import SecondQuestion from './SecondQ'
import ThirdAndFourthQuestion from './ThirdFourthQ'

const Form = () => {
    const [name, setName] = useState('')
    const [ageGroup, setAgeGroup] = useState(false)
    const [bands, setBands] = useState('Korn')
    const [shirt, setShirt] = useState('yes')

    //Another state property to hide and display summary
    const [isSummaryDisplayed, setIsSummaryDisplayed] = useState(false)
    const [isFirstQDisplayed, setIsFirstQDisplayed] = useState(true)
    const [isSecondQDisplayed, setIsSecondQDisplayed] = useState(false)
    const [isThirdFourthQDisplayed, setIsThirdFourthDisplayed] = useState(false)

    // Arrays of objects in radio buttons and dropdown
    const ageGroups = ["0-17", "18 and older"]
    const bandOptions = ['Korn', 'Mumford & Sons', 'Red Hot Chili Peppers', 'Foo Fighters', 'Rammstein' ]

    const handleSubmit = (event) => {event.preventDefault()}
     
    return (

        <section>

        <form onSubmit={handleSubmit}>
            <h2>Answer the following five questions and submit to order your awesome tickets</h2>
            {isFirstQDisplayed && (
            <FirstQuestion 
            name={name} 
            setName={setName}
            />)}
            
            {isSecondQDisplayed && (
            <SecondQuestion 
            setAgeGroup={setAgeGroup} 
            ageGroups={ageGroups}
            />)}
            
            {isThirdFourthQDisplayed && (
            <ThirdAndFourthQuestion 
            bandOptions={bandOptions} 
            setBands={setBands}
            shirt={shirt}
            setShirt={setShirt}
            />)}
            
            <button
            onClick={()=> setIsSummaryDisplayed(true)}>
            Buy tickets
            </button>
        </form>

            {isSummaryDisplayed && ( 
            
            <Summary name = {name} 
            ageGroup = {ageGroup}
            bands = {bands}
            />
            
            )}

            
        </section>
    )
}

export default Form