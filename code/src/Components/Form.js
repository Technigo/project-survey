import React, {useState} from 'react'
import Summary from './Summary'

const Form = () => {
    const [name, setName] = useState('')
    const [ageGroup, setAgeGroup] = useState()

    const ageGroups = ["0-17", "18 and older"]

    const handleSubmit = (event) => {event.preventDefault()
    const orderTickets = {name, ageGroups}

    console.log(orderTickets)
    }
    

    return (

        <section>

        <form onSubmit={handleSubmit}>
            <h2>Answer the following five questions and submit to order your awesome tickets</h2>

            <label>What's your name?
                <input type="text" name="name" onChange={(event)=>setName(event.target.value)} value={name} />
            </label>

            <h3>How old are you?</h3>
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
            ))}
            <button>Buy tickets</button>
        </form>

            <Summary name = {name} 
            ageGroup = {ageGroup}
            />
        </section>
    )
}

export default Form