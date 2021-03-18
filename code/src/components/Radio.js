import React, { useState } from 'react'
import CharacteristicsButtonOptions from 'CharachteristicsButtonOption'

const characteristics = ['great', 'fabulous', 'easygoing', 'kind'];

const Radio = () => {
    const [inputCharacteristics, setInputCharacteristics] = useState ('')



    return(
        <form>
            <div>
                <p>How would you describe yourself</p>
                {characteristics.map((characteristic) =>{
                    return <CharacteristicsButtonOptions 
                    characteristicsName={characteristic} 
                    setInputCharacteristics={setInputCharacteristics}
                />;
                })}
            </div>
        </form>
    )
}

export default Radio;