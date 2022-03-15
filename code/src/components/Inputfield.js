import React,{useState} from 'react'

const Inputfield = () =>{
     const [name, setName] = useState('input here')

    return(
        <div>
      <h1> Hello! </h1>
      <h1>Whats your name? </h1> 
      <form onSubmit={event=>event.preventDefault()}>
         <h1>The state is: {name}</h1>
         <input
         type="text"
         onChange={(event)=> setName(event.target.value)}
         value={name}
         />
       </form>
       </div>
      
    )
}

export default Inputfield