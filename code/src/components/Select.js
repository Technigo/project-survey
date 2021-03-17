import React, { useState } from 'react';

const Select = () => {
    const [selectWorldsNeeds, setSelectWorldsNeeds] = useState ('option');

    const onSelectWorldsNeedsChange = (e) => {
        setSelectWorldsNeeds(e.target.option);
        console.log(e.target.option);
    }


    return(
        <form>
            <div>
                <label>What does the world need more of?</label>
                <select 
                    id="whatWorldNeeds"
                    value={selectWorldsNeeds}
                    onChange={onSelectWorldsNeedsChange}
                >
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