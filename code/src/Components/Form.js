import React, {useState} from 'react'
import Summary from './Summary'
import FirstQuestion from './FirstQ'
import SecondQuestion from './SecondQ'
import ThirdAndFourthQuestion from './ThirdFourthQ'

const Form = () => {
    const [name, setName] = useState('')
    const [ageGroup, setAgeGroup] = useState(false)
    const [bands, setBands] = useState('Korn')
    const [shirt, setShirt] = useState(false)
    
    //State property to go to next question or back
    const [section, setSection] = useState(0)

    const nextSection = () => {setSection(section + 1)}
    const backSection = () => {setSection(section - 1)}
    const restart = () =>{setSection(section - 3)}


    // Arrays of objects in radio buttons and dropdown
    const ageGroups = ["0-17", "18 and older"]                //Change to sizes?
    const bandOptions = ['Korn', 'Mumford & Sons', 'Red Hot Chili Peppers', 'Foo Fighters', 'Rammstein' ]

    const handleSubmit = (event) => {event.preventDefault()}

return (
        <section>

        <form onSubmit={handleSubmit}>
            {section === 0 && (
            <FirstQuestion 
            name={name} 
            setName={setName}
            nextSection={nextSection}
            />)}
            
            {section === 1 && (
            <SecondQuestion 
            setAgeGroup={setAgeGroup} 
            ageGroups={ageGroups}
            nextSection={nextSection}
            backSection={backSection}
            />)}
            
            {section === 2 && (
            <ThirdAndFourthQuestion 
            bandOptions={bandOptions} 
            setBands={setBands}
            shirt={shirt}
            setShirt={setShirt}
            nextSection={nextSection}
            backSection={backSection}
            />
            )}
            
            
        </form>

            {section === 3 && (
            
            <Summary name = {name} 
            ageGroup = {ageGroup}
            bands = {bands}
            restart = {restart}
            />
            
            )}

            
        </section>
    )
}

export default Form