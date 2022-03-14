import React, {useState} from 'react'

const ageGroups= [
  '0-18',
  '19-30',
  '30+'
]
export const App = () => {
  const [temperature, setTemperature] = useState(20);
  const [name, setName] = useState('input here')
  const [location,setLocation] = useState("")
  const [wantsNewsletter, setWantsNewsletter] = useState(false)
  const [ageGroup, setAgeGroup] = useState()


  return (
  <section>

     <div>
     <h1>Current temperature: {temperature} degrees </h1>
    
     <button onClick={() => setTemperature(-5)}>Freez!</button>
     <button onClick={() => setTemperature(30)}>warm!</button>
   <button onClick={() => setTemperature(120)}>Boiling!</button>
   </div>

      
       <form onSubmit={event=>event.preventDefault()}>
         <h1>The state is: {name}</h1>
         <input
         type="text"
         onChange={(event)=> setName(event.target.value)}
         value={name}
         />
       </form>

       <form>
         <select
        onChange={event=> setLocation(event.target.value)}
        value={location}
        >
       <option value="">select location</option>
         <option value="New York">New York</option>
         <option value="Miami">Miami</option>
         <option value="Stockholm">Stockholm</option>
       </select>
       </form>

       <form>
         <label> Newsletter?
           <input
           type="checkbox"
           checked={wantsNewsletter}
           onChange={event=> setWantsNewsletter(event.target.checked)}
           />
         </label>
         <label> No thank you i dont want a Newsletter?
           <input
           type="checkbox"
           checked={wantsNewsletter}
           onChange={event=> setWantsNewsletter(event.target.checked)}
           />
         </label>
       </form>
     
      <form>
        ageGroup:
        {ageGroups.map((group)=>
        <label key={group}>
          <input
          type="radio"
          value={group}
          onChange={(event)=> setAgeGroup(event.target.value)}
          checked={ageGroup === group}
          />
          {group}
          </label>
        )}
      </form>
          </section>
  )
}
