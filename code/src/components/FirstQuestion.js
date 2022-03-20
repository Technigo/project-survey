import React from 'react'

const FirstQuestion = ({username, handleInputChange, backSlide, forwardSlide}) => {
    return (
        <div className='container'>
            <div className='form-container'>
                <label htmlFor='username'>Please enter your name</label>
                <input  
                value={username} 
                id={username} 
                type="text" 
                onChange={handleInputChange}
                />
            

                <div className='button-container'>

                    <button 
                    className='button' 
                    onClick={backSlide}>
                    Back
                    </button>

                    <button 
                    className='button' 
                    disabled={username === ''}
                    onClick={forwardSlide}>
                    Next
                    </button> 

                </div>
            </div>
       </div>    
    )        
}


export default FirstQuestion;