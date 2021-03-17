import React, { useState } from 'react'

const Radio = () => {
    const [inputCharacteristics, setInputCharacteristics] = useState ('')

    const onInputCharacteristicsChanged = (e) => {
        setInputCharacteristics(e.target.value)
        console.log(e.target.value)
    }

    return(
        <form>
            <div>
                <p>How would you describe yourself</p>
                <label htmlFor="great">Great</label>
                <input 
                    name="characteristics"
                    id="great" 
                    value="great" 
                    type="radio"
                    onChange={onInputCharacteristicsChanged}
                />   
                <label htmlFor="amazing">Amazing</label>
                <input 
                    name="characteristics" 
                    id="amazing" 
                    value="amazing" 
                    type="radio"
                    onChange={onInputCharacteristicsChanged}
                />
                <label htmlFor="cool">Cool</label>
                <input 
                    name="characteristics" 
                    id="cool" 
                    value="cool" 
                    type="radio"
                    onChange={onInputCharacteristicsChanged}
                />
                <label htmlFor="fantastic">Fantastic</label>
                <input 
                    name="characteristics" 
                    id="fantastic" 
                    value="fantastic" 
                    type="radio"
                    onChange={onInputCharacteristicsChanged}
                />
            </div>
        </form>
    )
}

export default Radio;