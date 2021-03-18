import React from 'react';


const RadioOption = () => {
    return (
        <>
            <label key={flower} htmlFor="Rose">Rose</label>
                <input 
                    name="flower" 
                    id={flower} 
                    type="radio" 
                    value={flower}
                    onChange={onFlowerChange}
                    checked={flower === flower}  
                />
        </>
    )

}

export default RadioOption;