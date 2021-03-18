import React, { useState } from 'react';



const Select = () => {
    const [worldNeeds, setWorldNeeds] = useState ('');

    const onWorldNeedsChanged = (e) => {
        setWorldNeeds(e.target.value);
        console.log(e.target.value);
    }


    return(
        <form>
            <div>
                <label>What does the world need more of?</label>
                <select 
                    id="whatWorldNeeds"
                    onChange={onWorldNeedsChanged}
                    value={worldNeeds}
                >
                    <option disabled></option>
                    <option>Puppys</option>
                    <option>Kindness</option>
                    <option>Calmness</option>
                    <option>Modesty</option>
                </select>
            </div>
        </form>
    )
}

export default Select;