import React, {useState} from 'react'
import Summary from './Summary'
import FirstQuestion from './FirstQ'
import SecondQuestion from './SecondQ'

const Form = () => {
    const [name, setName] = useState('')
    const [ageGroup, setAgeGroup] = useState(false)
    const [artists, setArtist] = useState('')

    //Another state property to hide and display summary
    const [isSummaryDisplayed, setIsSummaryDisplayed] = useState(false)

    const ageGroups = ["0-17", "18 and older"]

    const handleSubmit = (event) => {event.preventDefault()
    
    const orderTickets = {name, ageGroups}

    console.log(orderTickets)
    }
    

    return (

        <section>

        <form onSubmit={handleSubmit}>
            <h2>Answer the following five questions and submit to order your awesome tickets</h2>
            <FirstQuestion name={name} setName={setName}/>
            {/* <label hmtlFor="name">What's your name?
                <input 
                type="text" 
                name="name" 
                onChange={(event)=>setName(event.target.value)} 
                value={name} />
            </label> */}

            <SecondQuestion />
            {/* <h3>How old are you?</h3>
            {ageGroups.map(ageGroup => (
                <label key={ageGroup}>
                    <input type="radio" 
                        name="age" 
                        onChange={event =>setAgeGroup(event.target.value)} 
                        checked={ageGroups === ageGroup} 
                        value={ageGroup}
                    />
                    {ageGroup}
                </label>
            ))}*/}
            <label> 
                <select />
            </label>
            <button
            onClick={()=> setIsSummaryDisplayed(true)}>
            Buy tickets
            </button>
        </form>

        {isSummaryDisplayed && ( 
            
            <Summary name = {name} 
            ageGroup = {ageGroup}
            />
            
            )}

            
        </section>
    )
}

export default Form