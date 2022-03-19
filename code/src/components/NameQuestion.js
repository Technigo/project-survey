import React from 'react'


const NameQuestion = ({ 
    nameInput, 
    onNameInputChange, 
    surnameInput,
    onSurnameInputChange,
    nextPage

}) => {

    return (
        
        <div>
            <label htmlFor="name">What's your name?</label>

            <div>

                <div>
                    <input
                    id="name" 
                    type="text" 
                    placeholder="First name" 
                    value={nameInput}
                    onChange={onNameInputChange}
                    />
                </div>


                <div>
                    <input
                    id="name" 
                    type="text" 
                    placeholder="Surname" 
                    value={surnameInput}
                    onChange={onSurnameInputChange} 
                    />      
                </div>
                
                <div>
                <button className="btn" type="submit" onClick={nextPage}>
                    Next question!</button>
                </div>
            </div>

       </div>
    )

}

export default NameQuestion