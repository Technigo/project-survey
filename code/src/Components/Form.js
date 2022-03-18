import React, {useState} from 'react'
import Summary from './Summary'
import FirstQuestion from './FirstQ'
import SecondQuestion from './SecondQ'
import ThirdAndFourthQuestion from './ThirdFourthQ'

const Form = () => {
    const [name, setName] = useState('')
    const [amountOfBands, setAmountOfBands] = useState(false)
    const [bands, setBands] = useState('Korn')
    const [musicType, setMusicType] = useState([])
    
    //State property to go to next question or back
    const [section, setSection] = useState(0)

    const nextSection = () => {setSection(section + 1)}
    const backSection = () => {setSection(section - 1)}
    const restart = () => {setSection(0)}


    // Arrays of objects in radio buttons and dropdown
    const arrayOfBandNumbers = ["0-1", "2-4", "5 or more"]          
    const bandOptions = ['Korn', 'Greta van Fleet', 'Red Hot Chili Peppers', 'Foo Fighters', 'Rammstein', ]

    const handleSubmit = (event) => {event.preventDefault()}


    //Removing or adding musictype in the array from checked checkboxes
    const onCheckboxChange = (music) => {
        if (musicType.includes(music)) {
            const filteredMusicType = musicType.filter(item => {
                return item !== music                     //If musictype is included it will remove it if clicked again
            })
            setMusicType(filteredMusicType)
        } else {
            setMusicType([...musicType, music])
        }
    }

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
            setAmountOfBands={setAmountOfBands} 
            arrayOfBandNumbers={arrayOfBandNumbers}
            nextSection={nextSection}
            backSection={backSection}
            />)}
            
            {section === 2 && (
            <ThirdAndFourthQuestion 
            bandOptions={bandOptions} 
            setBands={setBands}
            musicType={musicType}
            onCheckboxChange={onCheckboxChange}
            nextSection={nextSection}
            backSection={backSection}
            />
            )}

        </form>   


            {section === 3 && (
            <Summary name = {name} 
            amountOfBands = {amountOfBands}
            bands = {bands}
            musicType={musicType}
            restart = {restart}
            />
            
            )}  
            
        </section>
    )
}

export default Form