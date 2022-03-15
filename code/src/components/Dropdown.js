import React, {useState} from 'react'

const Dropdown = () => {
const [location,setLocation] = useState("")

    return(
        <div>
            <h1>You're marooned on a remote, unpopulated Pacific Island. What would you rather have? </h1>
            <form>
         <select
        onChange={event=> setLocation(event.target.value)}
        value={location}
        >
       <option value="">Choose your gear </option>
         <option value="Lemond and radio">A lemon and a radio</option>
         <option value="Llama and kite">A llama and a kite</option>
         <option value="Bow and sunglasses">A bow whit arrows and a pair of sunglasses</option>
         <option value="Gassoline and bicycle">A gallon of gasoline and a bicycle</option>
       </select>
       </form>
        </div>
    )
}

export default Dropdown

