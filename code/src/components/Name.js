import React, {useState} from 'react'

const Name = ({nameInput, IselectName}) => {
    //const [myname, setmyname] = useState("");
    //console.log(myname)
  
    return (
        <div className="name-container">
            <label className="name">
        <p>Name & Surname</p> 
        <input 
        type="type" 
        onChange={e => IselectName(e)} //Skriv istället onChange={setSize}
        value={nameInput}
        name="Name & Surname" 
        placeholder="Name Surname" 
        required />
        </label>
        </div>
        
    )
}

export default Name