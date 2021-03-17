import React, { useState } from 'react'

const Radio = () => {
    const [inputCharacteristic, setInputCharacteristic] = useState ('')

    const onInputCharacteristicChange = (e) => {
        setInputCharacteristic(e.target.value)
    }

    return(
        <form>
            <div>
                <p>How would you describe yourself</p>
                <label htmlFor="great">Great</label>
                <input id="great" type="radio"/>   
                <label htmlFor="amazing">Amazing</label>
                <input id="amazing" type="radio"/>
                <label htmlFor="cool">Cool</label>
                <input id="cool" type="radio"/>
                <label htmlFor="fantastic">Fantastic</label>
                <input id="fantastic" type="radio"/>
            </div>
        </form>
    )
}

export default Radio;